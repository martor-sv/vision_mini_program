export default {
  pages: [
    'pages/alertjob/alertJob',
    'pages/login/login',
    'pages/index/index',
    'pages/team/team',
    'pages/alertjob/detail/alertJobDetail',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#1890FF',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [
      {
        text: '工单',
        pagePath: 'pages/alertjob/alertJob',
        // iconPath: 'assets/images/love.png',
        // selectedIconPath: 'assets/images/selected-love.png',
      },
      {
        text: '首页',
        // pagePath: 'pages/index/index',
        pagePath: 'pages/index/index',
        // iconPath: 'assets/images/music.png',
        // selectedIconPath: 'assets/images/selected-music.png',
      },
      {
        text: '团队',
        pagePath: 'pages/team/team',
        // iconPath: 'assets/images/me.png',
        // selectedIconPath: 'assets/images/selected-me.png',
      }
    ]
  },
}
