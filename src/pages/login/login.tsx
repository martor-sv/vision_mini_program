import React, {Component} from "react";
import {View} from "@tarojs/components";
import {AtButton, AtInput} from 'taro-ui'
import './login.scss'
import ServiceImpl from "../../service/ServiceImpl";
import Taro from "@tarojs/taro";
import {Constant} from "../../common/Constant";
import User from "../../core/bean/User";
import md5 from 'js-md5';


export default class Login extends Component {

  // 监听程序初始化，初始化完成时触发（全局只触发一次）
  componentWillMount() {
  }

  //页面初次渲染完成时触发，一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互
  componentDidMount() {

  }

  //程序启动，或从后台进入前台显示时触发
  componentDidShow() {

  }

  //程序从前台进入后台时触发
  componentDidHide() {

  }

  //页面卸载时触发，如 redirectTo 或 navigateBack 到其他页面时
  componentWillUnmount() {
  }

  state = {
    account: '',
    pwd: ''
  }

  async login() {
    let pww = md5.base64(this.state.pwd);
    console.log(pww)
    let pwd = encodeURI(pww).replace(/\+/g, "-");
    console.log(pwd)
    let result: any = await ServiceImpl.getInstance().login(
      this.state.account, pwd
    )
    Taro.setStorageSync(Constant.token, result['accessToken'])
    Taro.setStorageSync(Constant.refreshToken, result['refreshToken'])
    let user = result['user'] as User
    user.roleInGroupPojoList = result['roleInGroupList']
    Taro.setStorageSync(Constant.userInfo, result['user'] as User)
    console.log('登陆返回数据：', result)
    Taro.switchTab({
      url:'../alertjob/alertJob'
    })

  }

  handleAccountClick(value) {
    this.setState({
      account: value
    })
    console.log(this.state.account)
  }

  handlePwdClick(value) {
    this.setState({
      pwd: value
    })
    console.log(this.state.pwd)
  }

  render() {
    return (
      <View className='index'>
        <AtInput
          className={'input1'}
          name='value1'
          title='账号'
          type='text'
          placeholder='请输入账号'
          value={this.state.account}
          onChange={this.handleAccountClick.bind(this)}
        />

        <AtInput
          className={'input'}
          name='value2'
          title='密码'
          type='password'
          placeholder='请输入密码'
          value={this.state.pwd}
          onChange={this.handlePwdClick.bind(this)}
        />

        <AtButton className={'btn_login'} type='primary' onClick={this.login.bind(this)}>登陆</AtButton>
      </View>
    )
  }
}

