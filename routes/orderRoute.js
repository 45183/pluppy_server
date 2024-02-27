const express = require('express');
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");
const OrderItem = require('../models/orderItem');
const CartItem = require('../models/cartItem');
const authService = require('../service/authService');
const orderController = require('../controller/orderController');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { userId, products, totalPrice, payment } = req.body;
        const orderItems = await Promise.all(products.map(async (product) => {
            const orderItem = await OrderItem.create({
                userId,
                productId: product.productId,
                amount: product.amount,
                price: product.price,
                totalPrice,
                payment
            });
            return orderItem;
        }));

        await Promise.all(products.map(async (product) => {
            await CartItem.destroy({ where: { productId: product.productId, userId: userId } });
        }));
        
        res.status(201).json(orderItems);
    } catch (error) {
        console.error("주문 생성 도중 오류가 발생했습니다.", error);
        res.status(500).json({ error: "주문 생성 도중 오류가 발생했습니다." });
    }
});

router.post('/order', async (req, res) => {
    try {
        const orderData2 = req.body;
        const newOrder = await OrderItem.create(orderData2);
        res.status(201).json(newOrder); // 성공적으로 저장된 주문 정보를 응답
      } catch (error) {
        console.error("주문을 저장하는 도중 오류가 발생했습니다.", error);
        res.status(500).json({ message: "주문을 저장하는 도중 오류가 발생했습니다." });
      }
});

router.get('/:userId', authService.isLoggedIn, orderController.findUserOrder);

router.use((req, res, next) => {
    next('Not found error!');
});

router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData(resTEXT.RESPONSE_TEXT.FAIL, err));
});

module.exports = router;