import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react/index'
import { Button } from 'antd-mobile'

@withRouter @inject('appStore')@observer
class Login extends Component {
  componentDidMount() {
  	console.log("111",this.props)
    const isLogin = this.props.appStore.isLogin
    if (isLogin) {
      this.props.history.go(1) //当浏览器用后退按钮回到登录页时，判断登录页是否登录，是登录就重定向上个页面
    // this.props.appStore.toggleLogin(false) //也可以设置退出登录
    }
    this.initPage()
  }
  submit = (e)=> {
  	e.preventDefault()
    console.log("222",this.props)
    this.props.appStore.toggleLogin(true, {
      username: "admin"
    })
    const {from} = this.props.location.state || {
      from: {
        pathname: '/'
      }
    }
    this.props.history.push(from)

  }
  initPage(){
  	console.log("333")
  	this.props.appStore.initUsers()
  }
  render() {
    return (
      <div>
      	<Button onClick={this.submit}>登录</Button>
      </div>
    );
  }
}
export default Login