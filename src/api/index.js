import requests from "./ajax";
import mockRequests from "./mcokAjax";


export const reqgetCategoryList = () =>requests.get(`/product/getBaseCategoryList`);

export const reqgetBannerList = () =>mockRequests.get(`/banner`);
