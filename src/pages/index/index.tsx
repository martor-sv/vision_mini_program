import React, {Component} from 'react'
import {Text, View} from '@tarojs/components'

// import "taro-ui/dist/style/components/button.scss" // 按需引入
// import "taro-ui/dist/style/components/tab-bar.scss";
// import "taro-ui/dist/style/components/badge.scss";
import "taro-ui/dist/style/components/card.scss";
import './index.scss'
import {AtCard} from "taro-ui";

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
    listdata: [1, 2, 15, 12, 45, 44]
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }


  render() {
    return (
      <View className='index'>
        {
          this.state.listdata.map((item, index) => {
            return <AtCard className={'card'} title={"出警通知"} onClick={function () {

            }}>
              <Text className={'a'}>{item.valueOf()}</Text>
            </AtCard>
          })
        }


        {/*<AtButton onClick={function () {*/}
        {/*  Taro.getSetting({*/}
        {/*    success: function (result) {*/}
        {/*      if (!result.authSetting['scope.userInfo']) {*/}
        {/*        Taro.authorize({*/}
        {/*          scope: 'scope.userInfo',*/}
        {/*          success: function () {*/}
        {/*            Taro.getUserInfo({*/}
        {/*              success: function (res) {*/}
        {/*                var userInfo = res.userInfo*/}
        {/*                console.log(userInfo.nickName)*/}

        {/*                console.log(userInfo)*/}
        {/*              }*/}
        {/*            })*/}
        {/*          }*/}
        {/*        })*/}
        {/*      } else {*/}
        {/*        Taro.getUserInfo({*/}
        {/*          success: function (res) {*/}
        {/*            var userInfo = res.userInfo*/}
        {/*            console.log(userInfo.nickName)*/}

        {/*            console.log(userInfo)*/}
        {/*          }*/}
        {/*        })*/}
        {/*      }*/}
        {/*    }*/}
        {/*  })*/}

        {/*}}>*/}
        {/*  授权登陆*/}
        {/*</AtButton>*/}

      </View>
    )
  }
}
