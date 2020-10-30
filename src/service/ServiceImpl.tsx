import Taro from "@tarojs/taro";
import BaseServiceImpl from "./BaseServiceImpl";
import {Service} from "./Service";
import UrlConfig from "../common/UrlConfig";
import GlobalUserInfo from "../common/GlobalUserInfo";



export default class ServiceImpl extends BaseServiceImpl implements Service {
  private static serviceImpl: ServiceImpl;

  private constructor() {
    super();
  }

  public static getInstance(): ServiceImpl {
    if (ServiceImpl.serviceImpl == null) {
      ServiceImpl.serviceImpl = new ServiceImpl();
    }
    return ServiceImpl.serviceImpl;
  }

  login() {
    return new Promise((resolve) => {
      const option: any = this.getOption();
      option.url = UrlConfig.login
      option.method = 'POST'
      option.data = {
        user: "gwl",
        pass: "h0DWADb7uqNnN-UbdG7BzA==",
        grantType: "password",
      }
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          resolve(res);
        }
      });
    })
  }

  getAlertJobList(){
    return new Promise((resolve) => {
      const option: any = this.getOption();
      option.url = UrlConfig.GET_WORKORDER_URL
      option.data = {
        scope: "current",
        groupId: GlobalUserInfo.getGroupId(),
        userId: GlobalUserInfo.getUserTd(),
        beginTime: "1970-01-01 00:00:00.000",
        endTime: "2500-01-01 00:00:00",
        page: 0,
        pageSize: 20,
        contains:"alert,event",
        status: "assigned,confirmed,arrived,handling,left,reviewing,completed,closed"
      }
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          resolve(res);
        }
      });
    })

  }

  getCostData(){
    return new Promise((resolve) => {
      const option: any = this.getOption();
      option.url = UrlConfig.GET_COST_DATA
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          resolve(res);
        }
      });
    })

  }

};


