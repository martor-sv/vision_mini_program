import React, {Component} from "react";

import {View,Text,Image} from "@tarojs/components";
import './alertJobItem.css'



export default class AlertJobItem extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  state = {
    current: 0
  }

  props = {
    id : -1
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    return (
        <View className="box">
          <Image
            className="dot"
            src={
              'http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F4f00c6fe36b75adb1fbbe27370a21a35.png'
            }
          />
          <Text className="txt">出警通知</Text>

          <Text className="txtTitle">报警门店</Text>
          <Text className="shopTitle">紫叶广场店</Text>
          <View className="bd">
            <Text className="shopTitle_1">门店地址报警时间</Text>
            <View className="wrap">
              <Text className="title">紫星路588号1号楼</Text>
              <Text className="word">2020/02/1023：15：15</Text>
            </View>
          </View>
          <View className="main">
            <Text className="text">当前状态</Text>
            <Text className="txt_1">已完成</Text>
          </View>
          <View className="ft">
            <Image
              className="dot_1"
              src={
                'http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Fa45ba5a0e61ddda93aabf590f3ce8aa6.png'
              }
            />
            <Text className="word_1">查看详情</Text>
            <Text className="text_1">{">"}</Text>
          </View>
        </View>
    )
  }
}
