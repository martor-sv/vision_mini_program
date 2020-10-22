// @ts-ignore
import React, {Component} from 'react'
import {View} from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import AlertJobItem from "./item/alertJobItem";

var alertdata = [1, 2, 3, 4, 5];

export default class AlertJob extends Component {


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

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    return (
      <View className='index'>
        {alertdata.map((value, index,) => {
          return <AlertJobItem id={122}/>
        })}
      </View>
    )
  }
}

