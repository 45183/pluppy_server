const wishListService = require('../service/wishListService');

const { WISHLIST_MESSAGE } = require('../data/responseString');

exports.getItems = async (req, res) => {
  try {
    // const userId = req.session.passport.user;
    const { userId } = req.body;

    const items = await wishListService.getItems(userId);
    WISHLIST_MESSAGE.CONTROLLER('getItems');

    return res.status(200).json({
      message: '찜 아이템 가져오기 성공 ',
      items,
    });
  } catch (err) {
    WISHLIST_MESSAGE.CONTROLLER('getItems', err);
  }
};

exports.addItem = async (req, res) => {
  try {
    // const userId = req.session.passport.user;
    const { userId, productId } = req.body;

    if (!productId) {
      const err = ': productId 미입력';
      WISHLIST_MESSAGE.CONTROLLER('addItem', err);
      return res.status(400).json({
        message: 'productId 미입력',
      });
    }

    const item = await wishListService.addItem(userId, productId);
    WISHLIST_MESSAGE.CONTROLLER('addItem');

    return res.status(201).json({
      message: '찜에 아이템 추가 성공',
      item,
    });
  } catch (err) {
    WISHLIST_MESSAGE.CONTROLLER('addItem', err);
  }
};

exports.deleteItems = async (req, res) => {
  try {
    const { wishListIdList } = req.body;
    await wishListService.deleteItems(JSON.parse(wishListIdList));
    WISHLIST_MESSAGE.CONTROLLER('deleteItems');
    return res.status(200).json({
      message: '찜 아이템 삭제 성공',
    });
  } catch (err) {
    WISHLIST_MESSAGE.CONTROLLER('deleteItems', err);
    return res.status(500).json({ error: '서버 에러' });
  }
};

exports.moveToCart = async (req, res) => {
  try {
    // const userId = req.session.passport.user;
    const { userId, wishListIdArray } = req.body;

    await wishListService.moveToCart(userId, JSON.parse(wishListIdArray));

    WISHLIST_MESSAGE.CONTROLLER('moveToCart');
    return res.status(200).json({
      message: '선택된 상품 장바구니 이동 성공',
    });
  } catch (err) {
    WISHLIST_MESSAGE.CONTROLLER('moveToCart', err);
    return res.status(500).json({ error: '서버 에러' });
  }
};
