import requests from "./ajax";

export const reqgetCategoryList = () =>requests.get(`/product/getBaseCategoryList`);
