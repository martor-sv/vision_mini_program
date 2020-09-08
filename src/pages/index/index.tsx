import React, {Component} from 'react'
import {Text, View} from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  state = {
    current: 0
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    return (
      <View className='index'>
            <Text> 123213</Text>
      </View>
    )
  }
}
