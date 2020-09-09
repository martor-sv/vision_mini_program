import React, {Component} from "react";
import {Image, Text, View} from "@tarojs/components";
import './alertJobDetail.css';
import {AtTimeline} from 'taro-ui'

import "taro-ui/dist/style/components/timeline.scss";
import "taro-ui/dist/style/components/icon.scss";

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

  onChange() {
    // this.setState({
    //   current
    // })
  }

  render() {
    const items = [
      {'title': '步骤一', 'desc': '这里是额外的信息，最多两行'},
      {'title': '步骤二', 'desc': '这里是额外的信息，最多两行'},
      {'title': '步骤三', 'desc': '这里是额外的信息，最多两行'}
    ]

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

        <AtTimeline
          className='at_time_line'
          items={[
            {title: "智能报警", content: ['王蒙、秦邵华'], icon: 'check-circle', color: 'blue'},
            {title: '通知出警', content: ['秦邵华'],icon: 'check-circle', color: 'blue'},
            {title: '已接警', color: 'red'},
            {title: '到达现场', color: 'red'},
            {title: '出警结束', color: 'red'},
            {title: '结案确认', color: 'red'},
          ]}
          pending={true}
        >
        </AtTimeline>
      </View>
    )
  }
}
