import requests from "./ajax";
import mockRequests from "./mcokAjax";


export const reqgetCategoryList = () =>requests.get(`/product/getBaseCategoryList`);

export const reqgetBannerList = () =>mockRequests.get(`/banner`);

export const reqgetFloorList = () =>mockRequests.get(`/floor`);

export const reqgetSearchInfo = (params) =>requests({url: "/list", method: "post", data: params});

export const reqgetGoodsInfo = (skuId) =>requests({url: `/item/${skuId}`, method: "get",});

export const reqAddOrUpdateShopCart = (skuId, skuNum) =>requests({url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post",});

export const reqgetCartList = () =>requests({url:'/cart/cartList ',method:'get'});

export const reqdeleteCartById = (skuId) =>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});

export const requpdateCheckedById = (skuId,isChecked) =>requests({url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get",});

export const reqgetCode = (phone) =>requests({url: `/user/passport/sendCode/${phone}`, method: "get",});

export const reqregisterUser = (data) =>requests({url: '/user/passport/register', data, method: "post",});

export const reqloginUser = (data) =>requests({url: '/user/passport/login', data, method: "post",});

export const reqgetUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});

export const reqlogoutUser = () =>requests({url: '/user/passport/logout', method: "get",});

export const reqgetAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});

export const reqgetOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'});

export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});
