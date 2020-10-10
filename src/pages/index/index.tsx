// @ts-ignore
import React, {Component} from 'react'
import {Icon, Text, View} from '@tarojs/components'

// import "taro-ui/dist/style/components/button.scss" // 按需引入
// import "taro-ui/dist/style/components/tab-bar.scss";
// import "taro-ui/dist/style/components/badge.scss";
import "taro-ui/dist/style/components/card.scss";

import './index.scss'
import {AtDivider, AtGrid} from "taro-ui";

export default class Index extends Component {

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
    current: 0,
    listdata: [1, 2, 15, 12, 45, 44],
    tempData: [{
      value: '排名'
    }, {
      value: '门店'
    }, {
      value: '报警量'
    }, {
      value: '1'
    }, {
      value: 'xxxdain'
    }, {
      value: '12'
    }, {
      value: '2'
    }, {
      value: 'xxxdain'
    }, {
      value: '123'
    },


    ]
  }


  handleClick(value) {
    this.setState({
      current: value
    })
  }


  render() {
    return (
      <View className='index'>
        <Text className="time_title">较上期环比：前90天（2019-08-30-2019-11-27）</Text>

        <View className="box">

          <View className="box_1">
            <Text className='content_style'>智能报警</Text>
            <Text className='content_style'>123个</Text>
            <Text className='content_style_data1'>50%⬆</Text>
          </View>

          <View className="box_1">
            <Text className='content_style'>报警器</Text>
            <Text className='content_style'>12个</Text>
            <Text className='content_style_data2'>30%⬆</Text>
          </View>

          <View className="box_1">
            <Text className='content_style'>来电报警</Text>
            <Text className='content_style'>123个</Text>
            <Text className='content_style_data3'>50%⬆</Text>
          </View>

          <View className="box_1">
            <Text className='content_style'>已处置报警</Text>
            <Text className='content_style'>123个</Text>
            <Text className='content_style_data4'>-50%⬇</Text>
          </View>

        </View>

        <View className='disposal_rate'>
          处置率
        </View>

        <View className="express">
          <Text className="express_title">快报</Text>
          <Text className="data_info">数据说明</Text>
        </View>
        <AtDivider lineColor="#fafafa" height={1}/>

        <View className="express_data">

          <View className='box_2'>
            <Icon className="content_style" type="clear"/>
            <Text className="content_style">18KM</Text>
            <Text className="content_style">出警均里程</Text>
          </View>

          <View className='box_2'>
            <Icon className="content_style" type="download"/>
            <Text className="content_style">5.52h</Text>
            <Text className="content_style">出警均用时</Text>
          </View>

          <View className='box_2'>
            <Icon className="content_style" type="success"/>
            <Text className="content_style">3.2min</Text>
            <Text className="content_style">响应均用时</Text>
          </View>

          <View className='box_2'>
            <Icon className="content_style" type="info"/>
            <Text className="content_style">85个</Text>
            <Text className="content_style">均出警量</Text>
          </View>
        </View>

        <View>
          <Text className="express_title">门店报警排行榜</Text>
          <AtDivider lineColor="#fafafa" height={1}/>

        </View>

        <AtGrid data={this.state.tempData} columnNum={3} mode="rect"/>

      </View>
    )
  }
}
