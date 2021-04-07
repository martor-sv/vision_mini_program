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
import IdName from "../../../core/bean/IdName";
import User from "../../../core/bean/User";

export default class AlertJobDetail extends Component {

  async getStoreDetail(jobId) {

    let result = await ServiceImpl.getInstance().getStoreDetail(jobId)

    this.setState({
      alertHandlerJob: result['jobList'][0],
    })

    console.log(this.state.alertHandlerJob.assets.name)

    let data = ImageUtil.getImageUrl(this.state.alertHandlerJob.alerterList && this.state.alertHandlerJob.alerterList[0].imageList[0])


    data.then((value => {
      this.setState({
        image: value
      })
    }))
    console.log(this.state.alertHandlerJob)
    this.showHandleLine()
  }

  showHandleLine() {

    // Array<AlertHandleJobEvent>

    //已接警的名单
    let assignJobNames = ''
    //已到达的名单
    let arriveJobNames = ''
    //出警结束的名单
    let completeJobNames = ''
    //工单结束的名单
    let closeJobNames = ''


    this.state.alertHandlerJob.handleLine.map((value, index) => {
      switch (value.action) {
        case Constant.EVENT_ACTION_CONFIRM: {
          assignJobNames += "" + value.handler.name
          break
        }
        case Constant.EVENT_ACTION_CONFIRMARRIVED: {
          arriveJobNames += "" + value.handler.name
          break
        }
        case Constant.EVENT_ACTION_COMPLETEJOB: {
          completeJobNames += "" + value.handler.name
          break
        }
        case Constant.EVENT_ACTION_CLOSEJOB: {
          closeJobNames += "" + value.handler.name
          break
        }
      }
    })


    if (this.state.alertHandlerJob && this.state.alertHandlerJob.handleLine) {
      console.log(this.state.alertHandlerJob.handleLine)
      this.state.alertHandlerJob.handleLine.map((value, index) => {
        switch (value.action) {
          case Constant.EVENT_ACTION_ASSIGNED: {
            this.state.handleLine.push({
              title: "智能报警  " + value.reportTime.substring(0, 19),
              content: [this._getObjectName(value.objectList)],
              icon: 'check-circle',
              color: 'blue'
            },)
            this.state.handleLine.push({
              title: "通知出警  " + value.reportTime.substring(0, 19),
              content: [this._getObjectName(value.objectList)],
              icon: 'check-circle',
              color: 'blue'
            },)
            break
          }
          case Constant.EVENT_ACTION_CONFIRM: {
            this.state.handleLine.push({
              title: "已接警 " + value.reportTime.substring(0, 19),
              content: [assignJobNames],
              icon: 'check-circle',
              color: 'blue'
            },)
            break
          }
          case Constant.EVENT_ACTION_CONFIRMARRIVED: {
            this.state.handleLine.push({
              title: "到达现场  " + value.reportTime.substring(0, 19),
              content: [arriveJobNames],
              icon: 'check-circle',
              color: 'blue'
            },)
            break
          }
          case Constant.EVENT_ACTION_COMPLETEJOB: {
            this.state.handleLine.push({
              title: "出警结束  " + value.reportTime.substring(0, 19),
              content: [completeJobNames],
              icon: 'check-circle',
              color: 'blue'
            },)
            break
          }
          case Constant.EVENT_ACTION_CLOSEJOB: {
            this.state.handleLine.push({
              title: "结案确认  " + value.reportTime.substring(0, 19),
              content: [closeJobNames],
              icon: 'check-circle',
              color: 'blue'
            },)
            break
          }

        }

        console.log(value.reportTime)
      })
    }

    // for (let lineStatus in this.state.alertHandlerJob.handleLine){
    //   console.log(lineStatus.reportTime)
    // }
  }


  _getObjectName(objectList: Array<IdName>): String {
    let names = ""
    objectList.map((value, index) => {
      names += " " + value.name
    })
    return names
  }

  _getAcceptJobNames(guardList: Array<User>): String {
    let names = ""
    guardList.map((value, index) => {
      names += " " + value.name
    })
    return names
  }

  componentWillMount() {
    console.log(Taro.getCurrentInstance().router.params['jobId'])
    this.getStoreDetail(Taro.getCurrentInstance().router.params['jobId'])

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
    alertHandlerJob: AlertHandlerJob,
    handleLine: [],
    image: ""
  }

  render() {

    return (
      <View id='box'>
        <Image className='img_main'
               src={`${this.state.image}`}/>
        <Text className="title">报警门店:{this.state.alertHandlerJob?.assets?.name}</Text>
        <View className='line'/>
        <Text className="content">门店地址 {this.state.alertHandlerJob?.landmarkList?.[0]?.addr}</Text>
        <Text className="content">报警时间 {this.state.alertHandlerJob?.createTime}</Text>
        <Text
          className="content">当前状态 {Constant.getCurrentStatusName(this.state.alertHandlerJob && this.state.alertHandlerJob?.status?.name)}</Text>
        <View className='space'/>
        <View className="box_1">
          <View className='title_pre'/>
          <Text className='title_1'>警情状态</Text>
        </View>

        <AtTimeline
          className='at_time_line'
          items={
            this.state.handleLine
          }
          pending={true}
        >
        </AtTimeline>
      </View>
    )
  }
}
