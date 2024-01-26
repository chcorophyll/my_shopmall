import requests from "./ajax";
import mockRequests from "./mcokAjax";


export const reqgetCategoryList = () =>requests.get(`/product/getBaseCategoryList`);

export const reqgetBannerList = () =>mockRequests.get(`/banner`);

export const reqgetFloorList = () =>mockRequests.get(`/floor`);

export const reqgetSearchInfo = (params) =>requests({url: "/list", method: "post", data: params});

