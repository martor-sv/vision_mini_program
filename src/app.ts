import * as Taro from '@tarojs/taro'
import {Component} from 'react'
import './app.scss'
import User from "./core/bean/User";


class App extends Component {

  componentDidMount() {
    let user = new User();
    user.createTime = "122"
    user.pass = '321'



  }

  componentDidShow() {
    Taro.login(
      {
        success: function (result) {
          console.log(result)
          if (result.code != null) {
            // 执行登陆操作
          } else {

          }
        }
      }
    )
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
