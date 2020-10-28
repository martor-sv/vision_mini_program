import * as React from "react";
import {Component} from "react";

import * as Taro from "@tarojs/taro"
import {Text, View} from "@tarojs/components";
import './alertJobItem.css'
import AlertHandlerJob from "../../../core/bean/AlertHandlerJob";


export default class AlertJobItem extends Component {
  address = ""

  componentWillMount() {
    this.address = this.props.alertHandlerJob.bind(this).shop.landmarkList.length > 0 ? this.props.alertHandlerJob.bind(this).shop.landmarkList[0].addr : ""
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  state = {
    current: 0,

  }

  props = {
    alertHandlerJob: AlertHandlerJob
  }

  handleClick() {
    // Taro.showToast({
    //   title: "测试------",
    //   icon: "none",
    // })

    Taro.navigateTo({
      url: "/pages/alertjob/detail/alertJobDetail",
      events: {},
      success: function (res) {

      }
    })
  }

  render() {
    return (
      <View className="box" onClick={this.handleClick.bind(this)}>
        <Text className="txt">出警通知</Text>
        <Text className="txtTitle">报警门店</Text>
        <Text className="shopTitle">{this.props.alertHandlerJob.bind(this).shop.name}</Text>
        <View className="bd">
          <Text className="shopTitle_1">门店地址&nbsp;&nbsp;&nbsp;{this.address}</Text>
          <Text className="title">报警时间&nbsp;&nbsp;&nbsp;{this.props.alertHandlerJob.bind(this).createTime}</Text>
        </View>
        <View className="main">
          <Text className="text">当前状态</Text>
          <Text className="txt_1">已完成{this.props.alertHandlerJob.bind(this).maxGuard}</Text>
        </View>
        <View className="line"/>

        <View className="ft">
          <Text className="word_1">查看详情</Text>
          <Text className="text_1">{">"}</Text>
        </View>
      </View>
    )
  }
}
