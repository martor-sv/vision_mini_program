// @ts-ignore
import React, {Component} from 'react'
import {View} from '@tarojs/components'
import * as echarts from '../../components/ec-canvas/echarts'

import './team.scss'


var alertdata = ['11', '22'];

function initChart(canvas, width, height,dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
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
      data:  ['10-01', '10-02', '10-03', '10-04', '10-05']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '报警数据',
      // data: [820, 932, 901, 934, 1290, 1330, 1320, 1450, 1600],
      data:alertdata,
      type: 'line',
      stack: '总量',
      smooth: true
    }]
  };


  chart.setOption(option)
  return chart
}


export default class Team extends Component {

  state = {
    ec: {
      onInit: initChart
    }
  }


  componentWillMount() {
    alertdata = ['500','1000','300']
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
      <View className='echarts'>
        <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={this.state.ec}/>
      </View>
    )
  }
}
