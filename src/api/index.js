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

