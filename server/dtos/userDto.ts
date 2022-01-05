export class UserDto {
    username;
    email;
    id;
    role;
    cart;
    isActivated;

    constructor ( model ) {
        this.username = model.username
        this.email = model.email
        this.id = model._id
        this.role = model.role
        this.cart = model.cart
        this.isActivated = model.isActivated
    }
}