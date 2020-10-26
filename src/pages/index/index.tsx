// @ts-ignore
import {AtDivider, AtGrid} from "taro-ui";
import React, {Component} from 'react'

import {Icon, Text, View} from '@tarojs/components'
// import "taro-ui/dist/style/components/button.scss" // 按需引入
// import "taro-ui/dist/style/components/tab-bar.scss";
// import "taro-ui/dist/style/components/badge.scss";

import "taro-ui/dist/style/components/card.scss";

import './index.scss'
import * as echarts from '../../components/ec-canvas/echarts'


var alertdata = [];

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height, devicePixelRatio: dpr
  })
  canvas.setChart(chart)

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '报警数据',
      data: alertdata,
      type: 'line',
      color: 'rgba(225, 130, 51, 1)',
      smooth: true
    }, {
      name: '已处置',
      data: [300, 902, 801, 734, 990, 430, 620, 850, 100],
      type: 'line',
      color: 'rgba(164, 200, 255, 1)',
      smooth: true
    }]
  };
  chart.setOption(option)
  return chart
}

function initTrendChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height, devicePixelRatio: dpr
  })
  canvas.setChart(chart)

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: "{value} km/h"
      }
    },
    series: [{
      name: '速度',
      data: alertdata,
      type: 'line',
      color: 'rgba(225, 130, 51, 1)',
      smooth: true
    }, {
      name: '用时',
      data: [30, 60, 20, 34, 40, 30, 62, 80, 10],
      type: 'line',
      color: 'rgba(164, 200, 255, 1)',
      smooth: true
    }]
  };
  chart.setOption(option)
  return chart
}

function initTimeChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height, devicePixelRatio: dpr
  })
  canvas.setChart(chart)

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00']
    },
    yAxis: {
      type: 'value',
    },
    series: [{
      data: [30, 60, 20, 34, 40, 30, 62, 80, 10],
      type: 'line',
      areaStyle: {},
      color: 'rgba(164, 200, 255, 1)',
      smooth: true
    }]
  };
  chart.setOption(option)
  return chart
}

export default class Index extends Component {

  componentWillMount() {
    alertdata = [30, 92, 81, 74, 90, 30, 60, 80, 10]

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
    ],
    ec: {
      onInit: initChart
    }
    , trend: {
      onInit: initTrendChart
    },
    time: {
      onInit: initTimeChart
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }


  render() {
    return (
      <View className='index'>

        <View className='header_date'>
          <Text className='header'>2020-01-01~2020-05-15</Text>
          <Text className='header'>5个门店</Text>
        </View>

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

        <Text className='express_title'>处置率</Text>
        <View className='disposal_rate'>
          <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={this.state.ec}/>
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
        </View>

        <AtGrid data={this.state.tempData} columnNum={3} mode="rect"/>

        <View>
          <Text className="express_title">趋势分析</Text>
        </View>

        <View className='disposal_rate'>
          <ec-canvas id='mychart-dom' canvas-id='mychart-area' ec={this.state.trend}/>
        </View>

        <View>
          <Text className="express_title">报警时段分析</Text>
        </View>

        <View className='disposal_rate'>
          <ec-canvas id='mychart-dom' canvas-id='mychart-area' ec={this.state.time}/>
        </View>

      </View>
    )
  }
}
