const wishListRepository = require('../repository/wishListRepository');
const cartRepository = require('../repository/cartRpository');
const { WISHLIST_MESSAGE } = require('../data/responseString');

exports.getItems = async (userId) => {
  try {
    const items = await wishListRepository.getItems(userId);

    WISHLIST_MESSAGE.SERVICE('getItems');
    return items;
  } catch (err) {
    WISHLIST_MESSAGE.SERVICE('getItems', err);
  }
};

exports.addItem = async (userId, productId) => {
  try {
    const item = await wishListRepository.addItem(userId, productId);

    WISHLIST_MESSAGE.SERVICE('addItem');
    return item;
  } catch (err) {
    WISHLIST_MESSAGE.SERVICE('addItem', err);
  }
};

exports.deleteItems = async (wishListIdList) => {
  try {
    await Promise.all(
      wishListIdList.map(async (wishListId) => {
        return await wishListRepository.deleteItems(wishListId);
      }),
    );

    WISHLIST_MESSAGE.SERVICE('deleteItems');
  } catch (err) {
    WISHLIST_MESSAGE.SERVICE('deleteItems', err);
  }
};

exports.moveToCart = async (userId, wishListIdArray) => {
  try {
    let productIdList = await Promise.all(
      wishListIdArray.map(async (wishListId) => {
        return await wishListRepository.getProductId(wishListId);
      }),
    );

    // wishList에서 선택된 상품 -> cartItem에 추가
    const amount = 1;
    const cartId = await cartRepository.getCartId(userId);

    await Promise.all(
      productIdList.map(async (productId) => {
        const cartItemId = await cartRepository.checkItemsOfUser(
          cartId,
          productId,
        );
        // 이미 cart에 존재하는 상품이라면
        if (cartItemId) {
          await cartRepository.addItem(cartItemId, amount);
          return;
        }
        // 새 상품 cart에 추가
        await cartRepository.addItem(null, amount, userId, productId, cartId);
      }),
    );

    // wishList에서 이동된 상품 삭제
    await exports.deleteItems(wishListIdArray);

    WISHLIST_MESSAGE.SERVICE('moveToCart');
    return productIdList;
  } catch (err) {
    WISHLIST_MESSAGE.SERVICE('moveToCart', err);
  }
};
