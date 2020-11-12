import Taro from '@tarojs/taro'
import {Component} from 'react'
import './app.scss'
import {Constant} from "./common/Constant";


class App extends Component {

  // async login() {
  //   let result: any = await ServiceImpl.getInstance().login()
  //   Taro.setStorageSync(Constant.token,result['accessToken'])
  //   Taro.setStorageSync(Constant.refreshToken,result['refreshToken'])
  //   let user = result['user'] as User
  //   user.roleInGroupPojoList = result['roleInGroupList']
  //   Taro.setStorageSync(Constant.userInfo,result['user'] as User)
  //   console.log('登陆返回数据：', result)
  // }


  componentDidMount() {

    console.log(Taro.getStorageSync(Constant.token))
    if (Taro.getStorageSync(Constant.token) != null || Taro.getStorageSync(Constant.token) != "") {
      Taro.switchTab({
        url: '../alertjob/alertJob'
      })
      // this.login()
    }

  }

  componentDidShow() {
    // Taro.login(
    //   {
    //     success: function (result) {
    //       console.log(result)
    //       if (result.code != null) {
    //         // 执行登陆操作
    //       } else {
    //
    //       }
    //     }
    //   }
    // )
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
