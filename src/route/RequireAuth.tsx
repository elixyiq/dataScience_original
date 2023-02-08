import React from 'react';
import { connect } from 'react-redux';

import {
  useLocation,
  Navigate,
} from "react-router-dom";

// 获取全局专题下的user,connect使用
const mapStateToProps = (state: any) => ({
  user: state.authReducer.user,
});

function RequireAuth({ user, children }: { user: any, children: JSX.Element }) {
  console.log('RequireAuth user', user);
  // 使用user
  let auth = user;
  let location = useLocation();

  // 未登录跳到登录页
  if (!auth.isLogin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

// 将全局状态下的user connect到组件之上
export default connect(mapStateToProps)(RequireAuth);
