import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import Tree from '../../components/tree/Tree';
import routers from '../../route/routers';
import { Layout as EDSLayout } from '@eds/vanilla/common/scripts/Layout';
import { Breadcrumb } from '@cv/eds-react/lib/components';
import RequireAuth from '../../route/RequireAuth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoading, setTheme, signOut } from '../../store/action';
import './Index.scss';
import bgImage from '../../asserts/bg.jpg';

// 获取全局状态下的theme 和crumbs
const mapStateToProps = (state: any) => ({
  theme: state.authReducer.theme,
  crumbs: state.authReducer.crumbs,
});

// 获取action下的setTheme setLoading signOut方法
const mapDispatchToProps = (dispatch: any) => ({
  setTheme: bindActionCreators(setTheme, dispatch),
  setLoading: bindActionCreators(setLoading, dispatch),
  signOut: bindActionCreators(signOut, dispatch),
});

const Layout = (props: any) => {
  console.log('props.crumbs', props.crumbs);
  const location = useLocation();
  let navigate = useNavigate();
  // 设置初始面包屑导航
  const [crumbs, setCrumbs] = useState([{
    title: 'Home',
  }]);

  // 切换主题
  const switchTheme = () => {
    if (props.theme === 'light') {
      //document.body.className = 'dark';
      //props.setTheme('dark')
      document.body.className = 'light';
      props.setTheme('light')
    } else {
      document.body.className = 'light';
      props.setTheme('light')
    }
  };

  // 登出
  const signOut = () => {
    props.setLoading(false);
    props.signOut({isLogin: false});
    navigate('/login');
  };

  // 初始化应用EDS 布局
  useEffect(() => {
    const body = window.document.querySelector('body') as HTMLElement;
    const layout = new EDSLayout(body);
    layout.init();
  }, []);

  return (
      <>
        <header className='sysbar'>
          <div className='items-container'>
            <div className='item'>
              <Link to='/home'>
                <i className='icon icon-econ'></i>
                <span className='product'>Ericsson Faulty Hardware Detector</span>
              </Link>
              <span className='acronym'>EPN</span>
            </div>
          </div>
          <div className='items-container'>
            <div className='item hover settings-trigger'>
              <i className='icon icon-profile'></i>
              <span>Username</span>
            </div>
          </div>
        </header>

        <main>
          <aside className='syspanel hidden'>

            <div className='settings'>
              <div className='syspanel-top'>
                <span className='syspanel-title'></span>
                <i className='syspanel-close icon icon-cross'></i>
              </div>
              <div className='row'>
                <div className='column sm-12 container'>

                  <div className='profile'>
                    <i className='icon icon-profile'></i>
                    <div className='username'>Username</div>
                  </div>

                  <div className='content'>
                    <div className='title'>My settings</div>
                    <div className='item'>
                      <div className='left'>Switch theme</div>
                      <div className='right'>
                        <label className='switch'>
                          <input type='checkbox' onClick={switchTheme}/>
                          <i className='ball'></i>
                          <span data-enabled='Dark' data-disabled='Light'></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='bottom'>
                    <button type='button' className='btn big'  onClick={signOut}>
                      <i className='icon icon-log-out'></i> Sign out
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='notification-log'>
              <div className='syspanel-top'>
                <span className='syspanel-title'>Notifications</span>
                <i className='syspanel-close icon icon-cross'></i>
              </div>
              <div className='notification-log-container'>
                <div className='notification-log-empty'>No new notifications.</div>
              </div>
            </div>
          </aside>

          <div className='app' id='app'>
            <nav className='appbar'>
              <div className='actions-left'>
                <div className='item'>
                  <i className='navigation-toggle closed'></i>
                </div>
                <div className='menu-anchor open-menu'>Menu</div>
                <div className='title open-menu'>
                  { <Breadcrumb dataSource={props.crumbs}/> }
                </div>
              </div>
              <div className='actions-right'></div>
            </nav>

            <div className='appbody'>
              <div className='appnav'>
                <Tree tree={routers} />
              </div>
              <div className='appcontent_with-bg'>
                <RequireAuth>
                  <Outlet />
                </RequireAuth>
                
              </div>

            </div>
          </div>
        </main>
        <footer>
        <div className='footer'>
                  © Ericsson AB 2013-2022 - All Rights Reserved. <br />
                  No part of this software may be reproduced in any form without the written permission of the copyright holder.
                </div>
        </footer>
      </>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
