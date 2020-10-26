import Taro from '@tarojs/taro'
import { Component } from 'react'
import './app.scss'
import {Constant} from "./common/Constant";


class App extends Component {

  componentDidMount () {
    Taro.setStorageSync(Constant.token,"eyJhbGciOiJIUzI1NiIsInR5cCI6IlRWIn0.eyJ1aWQiOiJmNzAwZWM4NS0wZTZkLTQzMmYtOGZlNi1mMDhhYWE0OGVmNDciLCJuYW1lIjoi546L6Zu3IiwibmJmIjoiMjAyMC0xMC0yMyAxNTo0OToxMy4xODgiLCJpYXQiOiIyMDIwLTEwLTIzIDE1OjQ5OjEzLjE4OCJ9.ZTLN7qdEEqVdxgIKI22RyGwUUSyQw_DwPAEGunJEERA")
  }

  componentDidShow () {
    Taro.login(
      {
        success:function (result) {
          console.log(result)
          if (result.code!=null){
            // 执行登陆操作
          }else {

          }
        }
      }
    )
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
