import Taro from "@tarojs/taro";
import BaseServiceImpl from "./BaseServiceImpl";
import UrlConfig from "../common/UrlConfig";
import GlobalUserInfo from "../common/GlobalUserInfo";
import {Constant} from "../common/Constant";

export default class ServiceImpl extends BaseServiceImpl {
  private static serviceImpl: ServiceImpl;

  private constructor() {
    super();
  }

  public static getInstance(): ServiceImpl {
    if (ServiceImpl.serviceImpl == null) {
      ServiceImpl.serviceImpl = new ServiceImpl();
    }
    const interceptor =function (chain) {
      const requestParams = chain.requestParams
      const { method, data, url } = requestParams
      console.log(`http ${method || 'GET'} --> ${url} data: `, data)
      return chain.proceed(requestParams)
        .then(res => {
          if (res.statusCode == 422){
            Taro.clearStorage()
            Taro.redirectTo({
              url:'../login/login'
            })
          }
          return res
        })
    }
    Taro.addInterceptor(interceptor)
    return ServiceImpl.serviceImpl;
  }

  login(user:String,pass:String) {
    return new Promise((resolve,reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.login
      option.method = 'POST'
      option.data = {
        user: user,
        pass: pass,
        grantType: "password",
      }
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res);
        }
      });
    }).catch(error => console.log('caught', error))
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

  getDeviceCount(){
    return new Promise((resolve,reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.GET_DEVICE_COUNT
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res);
        }
      });
    })
  }

  getAlertCount(){
    return new Promise((resolve,reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.GET_ALERT_COUNT
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res);
        }
      });
    })

  }
};


