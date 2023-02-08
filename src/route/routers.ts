// 配置所有页面路由，展示在页面左侧导航栏
const routers = [
  // {
  //   title: 'AMC Device',// 路由标题
  //   icon: 'icon-mobile-devices', // 路由icon图标
  //   children: [                  // 子路由，可有可无
  //     {
  //       title: 'LAN1 address config',// 路由标题
  //       uri: '/eth-address-config',// 路由url
  //       icon: 'icon-ping-ip',// 路由icon图标
  //     },
  //     {
  //       title: 'LAN2 address config',// 路由标题
  //       uri: '/eth-address-config2',// 路由url
  //       icon: 'icon-ping-ip',// 路由icon图标
  //     },
  //   ]
  // },
  {
    title: 'Algorithms knowledge',// 路由标题
    icon: 'icon-mobile-devices', // 路由icon图标
    children: [                  // 子路由，可有可无
      {
        title: 'Decision Tree',// 路由标题
        uri: '/dt',// 路由url
        icon: 'icon-ping-ip',// 路由icon图标
      },
      {
        title: 'Random Forrest',// 路由标题
        uri: '/rf',// 路由url
        icon: 'icon-ping-ip',// 路由icon图标
      },
      {
        title: 'XGBoost',// 路由标题
        uri: '/xgb',// 路由url
        icon: 'icon-ping-ip',// 路由icon图标
      },
    ]
  },

  // {
  //   title: 'Remote Storage setting',
  //   icon: 'icon-settings',
  //   children: [
  //     {
  //       title: 'Ali OSS config',
  //       uri: '/oss-info-config',
  //       icon: 'icon-cloud',
  //     },
  //   ]
  // },
  // {
  //   title: 'Statistics',
  //   icon: 'icon-layers',
  //   children: [
  //     {
  //       title: 'Realtime Speed',
  //       uri: '/realtime-speed',
  //       icon: 'icon-dashboard',
  //     },
  //     {
  //       title: 'History Speed',
  //       uri: '/history-speed',
  //       icon: 'icon-graph-plot',
  //     },
  //   ]
  // },
  // {
  //   title: 'Remote control',
  //   uri: '/remote-control',
  //   icon: 'icon-dial',
  // },
  {
    title: 'Diagnosing Hardware',
    uri: '/Diagnose',
    icon: 'icon-dial',
  },
  {
    title: 'Future Plan',
    uri: '/FuturePlan',
    icon: 'icon-graph-plot',
  }

];

export default routers;
