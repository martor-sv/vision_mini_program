// @ts-ignore
import React, {Component} from 'react'
import {Text, View} from '@tarojs/components'

import './team.scss'
import {AtGrid} from "taro-ui";

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

  render() {
    return (
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

      </View>
    )
  }
}
