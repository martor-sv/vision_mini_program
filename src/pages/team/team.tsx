import * as Taro from '@tarojs/taro'
import * as React from 'react'
import {Component} from 'react'
import {Text, View} from '@tarojs/components'

import './team.scss'
import {Constant} from "../../common/Constant";
import ServiceImpl from "../../service/ServiceImpl";

export default class Team extends Component {


  async login() {
    let result: any = await ServiceImpl.getInstance().login()
    console.log('登陆返回数据：', result)
  }


  componentWillMount() {
    this.login()
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
        <Text>{
          Taro.getStorageSync(Constant.token)
        }</Text>

      </View>
    )
  }
}
