import React, {Component} from "react";
import {Image, Text, View} from "@tarojs/components";
import './alertJobDetail.css'

export default class AlertJobDetail extends Component {

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


  render() {
    return (
      <View id='box'>
        <Image className='img_main' src={'http://192.168.2.8/boss/uploads4/images/4635/46357740/v2_q7y2lx.png'}/>
        <Text className="title">报警门店:紫叶广场店</Text>
        <View className='line'/>
        <Text className="content">门店地址 紫星路588号1号楼</Text>
        <Text className="content">报警时间 2020/02/10 23:15:15</Text>
        <Text className="content">当前状态 处理中</Text>
        <View className='space'/>
        <View className="box_1">
          <View className='title_pre'/>
          <Text className='title_1'>警情状态</Text>
        </View>
      </View>
    )
  }
}
