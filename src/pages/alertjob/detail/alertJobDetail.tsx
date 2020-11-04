import React, {Component} from "react";
import Taro from '@tarojs/taro'
import {Image, Text, View} from "@tarojs/components";
import './alertJobDetail.scss';
import {AtTimeline} from 'taro-ui'

import "taro-ui/dist/style/components/icon.scss";
import ServiceImpl from "../../../service/ServiceImpl";
import AlertHandlerJob from "../../../core/bean/AlertHandlerJob";
import {Constant} from "../../../common/Constant";
import ImageUtil from "../../../utils/ImageUtil";

export default class AlertJobDetail extends Component {

  async getStoreDetail(jobId) {

    let result = await ServiceImpl.getInstance().getStoreDetail(jobId)

    this.setState({
      alertHandlerJob: result['jobList'][0] as AlertHandlerJob,
      handleLine: this.state.alertHandlerJob.handleLine
    })

    let data = ImageUtil.getImageUrl(this.state.alertHandlerJob.alerterList && this.state.alertHandlerJob.alerterList[0].imageList[0])

    console.log(data.then((value => {
      console.log(value)
    })))

    data.then((value => {
      this.setState({
        image: value
      })
    }))


    console.log(this.state.alertHandlerJob)
  }

  showHandleLine() {

    // this.state.handleLine.addAll()

  }


  componentWillMount() {
    console.log(Taro.getCurrentInstance().router.params['jobId'])
    this.getStoreDetail(Taro.getCurrentInstance().router.params['jobId'])

    this.showHandleLine()
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

  state = {
    alertHandlerJob: AlertHandlerJob,
    handleLine: [],
    image: ""
  }

  render() {

    return (
      <View id='box'>
        <Image className='img_main'
               src={`${this.state.image}`}/>
        <Text className="title">报警门店:{this.state.alertHandlerJob.shop && this.state.alertHandlerJob.shop.name}</Text>
        <View className='line'/>
        <Text className="content">门店地址 {}</Text>
        <Text className="content">报警时间 {this.state.alertHandlerJob.createTime}</Text>
        <Text
          className="content">当前状态 {Constant.getCurrentStatusName(this.state.alertHandlerJob.status && this.state.alertHandlerJob.status.name)}</Text>
        <View className='space'/>
        <View className="box_1">
          <View className='title_pre'/>
          <Text className='title_1'>警情状态</Text>
        </View>

        <AtTimeline
          className='at_time_line'
          items={[
            {title: "智能报警", content: ['王蒙、秦邵华'], icon: 'check-circle', color: 'blue'},
            {title: '通知出警', content: ['秦邵华'], icon: 'check-circle', color: 'blue'},
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
