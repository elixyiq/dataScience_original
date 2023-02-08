import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setLoading, signIn } from '../../store/action';
import { Input, Button, Row, Col, Form, notification, FormField, Icon } from '@cv/eds-react/lib/components';
import './Index.scss';
import { Loading } from '@cv/eds-react/lib/components/loading';

// 获取全局状态下的loading
const mapStateToProps = (state: any) => ({
  loading: state.authReducer.loading,
});

// 获取action下的 setLoading signIn方法
const mapDispatchToProps = (dispatch: any) => ({
  signIn: bindActionCreators(signIn, dispatch),
  setLoading: bindActionCreators(setLoading, dispatch),
});

const Login = (props: any) => {
  let navigate = useNavigate();

  const [welcome, setWelcome] = useState(false);

  // 登录方法
  const signIn = (err: any, fields: any) => {
    // 账号密码验证
    if (fields.username !== 'Yiqun' ) {
      return  notification.notice({
        title: (
            <>
              <Icon type="triangle-warning" /> Error
            </>
        ),
        description: 'Please use \'Yiqun\' as username and password to login for now',
      }, {
        duration: 5000
      });
    }
    // 验证成功模拟登录
    props.setLoading(true);
    setTimeout(() => {
      setWelcome(true);
    }, 1000);
    setTimeout(() => {
      props.signIn({isLogin: true});
      navigate('/home');
    }, 2000);
  };

  return (
      <div className='signin'>
        <div className='watermark'>
          <i className='icon icon-econ'></i>
          <div className='product'>Ericsson Data Science</div>
        </div>

        <div className='welcome hidden'>
          <div className='message'>Welcome</div>
          <div className='username'>Lars Magnus</div>
          <div className='loading'></div>
        </div>

        <div className='error hidden'>Invalid username and/or password.</div>
        <div className='sign-in-form'>
          {
            !props.loading
              ? (
                  <>
                    <Form
                        {
                          ...{
                            title: '',
                            footer: ([
                              // <Row>
                              //   <Col className="column" span={4}>
                                  <Button color="primary" key="submit">
                                    Sign in
                                  </Button>
                                // </Col>
                              // </Row>
                            ]),
                            onFormSubmit: signIn
                          }
                        }
                    >
                      {/*<Row>*/}
                      {/*  <Col className="column" span={4}>*/}
                          <FormField
                              label="Username"
                              name="username"
                              rules={[{ type: 'required', message: '' }]}
                          >
                            <Input />
                          </FormField>
                          <FormField
                              label="Password"
                              name="password"
                              rules={[{ type: 'required', message: '' }]}
                          >
                            <Input type={'password'} />
                          </FormField>
                      <input type='checkbox' name='remember' id='remember'/>
                      <label style={{marginBottom: 32}}>Remember me</label>
                        {/*</Col>*/}
                      {/*</Row>*/}
                    </Form>
                    {/*<div className='field validate'>*/}
                    {/*  <label>Username</label>*/}
                    {/*  <input type='email' name='username' id='username' placeholder='' required/>*/}
                    {/*  <div className='hint'></div>*/}
                    {/*</div>*/}

                    {/*<div className='field validate'>*/}
                    {/*  <label>Password</label>*/}
                    {/*  <input type='password' name='password' id='password' placeholder=' ' required/>*/}
                    {/*  <div className='hint'></div>*/}
                    {/*</div>*/}

                    {/*<input type='checkbox' name='remember' id='remember'/>*/}
                    {/*<label style={{marginBottom: 32}}>Remember me</label>*/}

                    {/*<button style={{marginBottom: 32}} className='btn big primary' onClick={signIn}>Sign in</button>*/}

                    <div className='help'>
                      <a href='#' className='subtle-link'>Having trouble signing in?</a>
                    </div>
                  </>
                )
              : (
                  <>
                    {
                      !welcome
                          ? <span className='loading-text'>Loading...</span>
                          : (
                              <div className='welcome'>
                                <span className='welcome-text'>Welcome</span>
                                <span className='welcome-user'>Yiqun</span>
                              </div>
                          )
                    }
                    <Loading />
                  </>
                )
          }
        </div>

        <div className='footer'>
          © Ericsson AB 2013-2018 - All Rights Reserved. <br />
          No part of this software may be reproduced in any form without the written permission of the copyright holder.
        </div>

      </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
