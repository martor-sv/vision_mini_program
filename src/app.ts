import { Component } from 'react'
import  Taro from  "@tarojs/taro"

import './app.scss'

class App extends Component {

  componentDidMount () {}

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
