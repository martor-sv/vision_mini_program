import React, {Component} from 'react'
import Taro from '@tarojs/taro'
import {ScrollView, View,Text} from '@tarojs/components'

import './team.scss'
import {Constant} from "../../common/Constant";

export default class Team extends Component {


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
    datalist: [
      {'teamName': 'ceshi1', 'timeAvg': '112'},
      {'teamName': 'ceshi1', 'timeAvg': '112'},
      {'teamName': 'ceshi1', 'timeAvg': '113'},
    ]
  }

  onScrollToUpper() {
  }

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e) {
    console.log(e.detail)
  }


  render() {
    const scrollTop = 0
    const Threshold = 20
    return (
      <ScrollView
        className='scrollview'
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        refresherEnabled={true}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
        onScroll={this.onScroll}
      >
        <View className='echarts'>
          <View className='txTeam'>
            <Text>排名</Text>
            <Text>团队</Text>
            <Text>响应均用时</Text>
          </View>

          <View>
            {
              this.state.datalist.map((value, index, array) => {
                return <View className='txTeam'>
                  <Text>{index + 1}</Text>
                  <Text>{value['teamName']}</Text>
                  <Text>{value['timeAvg'] + "s"}</Text>
                </View>
              })
            }
          </View>
          <Text>{
            Taro.getStorageSync(Constant.token)
          }</Text>


        </View>
      </ScrollView>

    )
  }
}
