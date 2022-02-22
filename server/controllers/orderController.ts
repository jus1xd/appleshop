import OrderService from "../service/orderService";

class orderController {
  async create(req, res) {
    try {
      const order = await OrderService.create(req.body);
      res.status(200).json(order);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const order = await OrderService.getAll();
      return res.json(order);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getOne(req, res) {
    try {
      const order = await OrderService.getOne(req.params.id);
      return res.json(order);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const updatedOrder = await OrderService.update(req.body);
      return res.json(updatedOrder);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const order = await OrderService.delete(req.params.id);
      return res.json(order);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new orderController();
