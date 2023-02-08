import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './views/Login/Login';
import '../node_modules/@cv/eds-react/lib/assets/styles/themes/light.css';
import Layout from './views/Layout/Layout';
import OssInfoConfig from './views/RemoteSetting/OssInfoConfig/OssInfoConfig';
import RemoteControl from './views/RemoteControl/RemoteControl';
import Diagnose from './views/RemoteControl/Diagnose';
import FuturePlan from './views/RemoteControl/FuturePlan';
import RealtimeSpeed from './views/Statistics/RealtimeSpeed';
import HistorySpeed from './views/Statistics/HistorySpeed';
import XGBoost from './views/RemoteControl/XGBoost';
import DT from './views/RemoteControl/DT';
import RF from './views/RemoteControl/RF';
import Home from './views/Home/Home';
import routers from './route/routers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCrumbs } from './store/action';

// 获取action下的setCrumbs--设置面包屑
const mapDispatchToProps = (dispatch: any) => ({
  setCrumbs: bindActionCreators(setCrumbs, dispatch),
});

// 路由懒加载，预设防止后面项目复杂影响性能
const LazyEthAddressConfig = React.lazy(() => import("./views/Device/EthAddressConfig/EthAddressConfig"));

const App = (props: any) => {
  const location = useLocation();
  // 面包屑导航设置
  let crumbs: any = [];
  routers.forEach((item: any) => {
    if (item.children) {
      const target = item.children.find((unit: any) => unit.uri === location.pathname);
      if (target) {
        crumbs.push({title: item.title}, {title: target.title});
      }
    } else {
      if (item.uri === location.pathname) {
        crumbs.push({title: item.title});
      }
    }
  });
  props.setCrumbs(crumbs);

  return (
    <Routes >
      <Route >
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout />} >
          <Route path='/home'  element={<Home />} />
          {/*<Route path='/eth-address-config'  element={<EthAddressConfig />} />*/}
          <Route path='/oss-info-config'  element={<OssInfoConfig />} />
          <Route path='/remote-control'  element={<RemoteControl />} />
          <Route path='/Diagnose'  element={<Diagnose />} />
          <Route path='/FuturePlan'  element={<FuturePlan/>} />
          <Route path='/realtime-speed'  element={<RealtimeSpeed />} />
          <Route path='/history-speed'  element={<HistorySpeed />} />
          <Route path='/DT'  element={<DT />} />
          <Route path='/XGBoost'  element={<XGBoost />} />
          <Route path='/RF'  element={<RF />} />
          <Route
              path="/eth-address-config"
              element={
                <React.Suspense fallback={<>...</>}>
                  <LazyEthAddressConfig />
                </React.Suspense>
              }
          />
          <Route
              path="/eth-address-config2"
              element={
                <React.Suspense fallback={<>...</>}>
                  <LazyEthAddressConfig />
                </React.Suspense>
              }
          />

        </Route>
        <Route path='/*' element={<Navigate replace to='/login' />} />
      </Route>
    </Routes>
  );
};

export default connect(null, mapDispatchToProps)(App);
