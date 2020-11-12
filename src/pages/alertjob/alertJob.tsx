import React, {Component} from 'react'
import {View} from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import AlertJobItem from "./item/alertJobItem";
import AlertHandlerJob from "../../core/bean/AlertHandlerJob";
import ServiceImpl from "../../service/ServiceImpl";
import Taro from "@tarojs/taro";
import {Constant} from "../../common/Constant";


export default class AlertJob extends Component {

  async getAlertJobList() {
    let alertJob: any = await ServiceImpl.getInstance().getAlertJobList()
    console.log(alertJob)
    this.setState({
      alertData: alertJob['jobList'] as Array<AlertHandlerJob>
    })
  }

  // 监听程序初始化，初始化完成时触发（全局只触发一次）
  componentWillMount() {
    if (Taro.getStorageSync(Constant.token) == null || Taro.getStorageSync(Constant.token) == "") {
      Taro.redirectTo({
        url:'../login/login'
      })
      return
    }

    this.getAlertJobList()
    // Taro.startPullDownRefresh()
  }

  //页面初次渲染完成时触发，一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互
  componentDidMount() {

  }

  //程序启动，或从后台进入前台显示时触发
  componentDidShow() {

  }

  //程序从前台进入后台时触发
  componentDidHide() {

  }

  //页面卸载时触发，如 redirectTo 或 navigateBack 到其他页面时
  componentWillUnmount() {
  }

  state = {
    current: 0,
    alertData: []
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    return (
      <View className='index'>
        {this.state.alertData.map((value, index,) => {
          return <AlertJobItem alertHandlerJob={value}/>
        })}
      </View>
    )
  }
}

