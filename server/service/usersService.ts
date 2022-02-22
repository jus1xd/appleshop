import UserModel from '../models/userModel';
import bcrypt from 'bcrypt';
import * as uuid from 'uuid';
import tokenService from './tokenService';
import { UserDto } from '../dtos/userDto';
import { sendActivationMail } from './mailService';
import { ApiError } from '../exceptions/api-error';

class UserService {
  async registration(username, email, password, role, cart) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest('Пользователь с таким email уже существует');
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = await UserModel.create({
      username,
      email,
      password: hashPassword,
      activationLink,
      cart,
      role,
    });
    await sendActivationMail(email, `${process.env.API_URL}auth/activate/${activationLink}`);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, ...userDto };
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest(`Пользователь с таким ${email} не найден`);
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest('Неверный пароль');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, ...userDto };
  }

  async logout(refreshToken) {
    return await tokenService.removeToken(refreshToken);
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest('Некорректная ссылка для активации');
    }
    user.isActivated = true;
    await user.save();
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, ...userDto };
  }

  async addToCart(idObject) {
    const updatedUser = await UserModel.findById(idObject.userId);
    updatedUser.cart.push({
      id: idObject.productId,
      quantity: 1,
      price: idObject.price,
    });
    const user = await UserModel.findByIdAndUpdate(idObject.userId, updatedUser, { new: true }).exec();
    return user.cart;
  }

  async changeQuantity(idForServerQuantity) {
    const updatedUser = await UserModel.findById(idForServerQuantity.userId);
    updatedUser.cart.filter((item) => item.id === idForServerQuantity.productId)[0].quantity =
      idForServerQuantity.quantity;
    const user = await UserModel.findByIdAndUpdate(idForServerQuantity.userId, updatedUser, { new: true }).exec();
    return user.cart;
  }

  async getCart(userId) {
    const user = await UserModel.findById(userId).exec();
    return user.cart;
  }

  async deleteCartItem(itemToDelete) {
    const updatedUser = await UserModel.findById(itemToDelete.userId);
    updatedUser.cart = updatedUser.cart.filter((product) => product.id !== itemToDelete.productId);
    const user = await UserModel.findByIdAndUpdate(itemToDelete.userId, updatedUser, { new: true }).exec();
    return user.cart;
  }
}

export default new UserService();
