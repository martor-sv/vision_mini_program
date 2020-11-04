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
    return new Promise((resolve,reject) => {
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
          reject(res);
        }
      });
    })
  }

  getAlertJobList(){
    return new Promise((resolve,reject) => {
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
          reject(res);
        }
      });
    })

  }

  getStoreDetail(jobId){
    return new Promise((resolve,reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.GET_WORKORDER_URL
      option.data = {
        jobId:jobId,
        beginTime: "1970-01-01 00:00:00.000",
        endTime: "2500-01-01 00:00:00",
        page: 0,
        pageSize: 20,
        contains:"alert,event",
      }
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res);
        }
      });
    })

  }

  getCostData(){
    return new Promise((resolve,reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.GET_COST_DATA
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res);
        }
      });
    })
  }

  getImageData(id){
    return new Promise((resolve,reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.GET_IMAGE_DATA+id
      option.responseType='arraybuffer'
      // option.success((res)=>{
      //   const arraybuffer= new Uint8Array(res)
      //   let base64=
      //   resolve(base64)
      // })
      Taro.request(option).then((res) => {

        if (res.statusCode < 300) {
          console.log(res.data)
          let base64="data:image/jpeg;base64,"+Taro.arrayBufferToBase64(res.data)
          resolve(base64);
        } else {
          reject(res);
        }
      });
    })
  }

};


