//拦截请求 给axios服务
import Mock from "mockjs";
import homeApi from "./mockData/homeApi";
import storeApi from "./mockData/storeApi";
Mock.mock("/home/getHomeData", homeApi.getHomeData)
Mock.mock("/home/getStoreData", storeApi.getStoreData)