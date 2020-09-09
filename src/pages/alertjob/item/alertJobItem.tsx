import React, {Component} from "react";

import Taro from "@tarojs/taro"
import {Image, Text, View} from "@tarojs/components";
import './alertJobItem.css'


export default class AlertJobItem extends Component {

  componentWillMount() {
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
    current: 0
  }

  props = {
    id: -1
  }

  handleClick() {
    // Taro.showToast({
    //   title: "测试------",
    //   icon: "none",
    // })

    Taro.navigateTo({
      url:"/pages/alertjob/detail/alertJobDetail",
      events:{
      },
      success:function (res) {

      }
    })
  }

  render() {
    return (
      <View className="box" onClick={this.handleClick.bind(this)}>

        <Text className="txt">出警通知</Text>
        <Text className="txtTitle">报警门店</Text>
        <Text className="shopTitle">紫叶广场店</Text>
        <View className="bd">
          <Text className="shopTitle_1">门店地址&nbsp;&nbsp;&nbsp;紫星路588号1号楼</Text>
          <Text className="title">报警时间&nbsp;&nbsp;&nbsp;2020/02/1023：15：15</Text>
        </View>
        <View className="main">
          <Text className="text">当前状态</Text>
          <Text className="txt_1">已完成</Text>
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
