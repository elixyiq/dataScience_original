import React from 'react';
import { Button, notification, Icon } from '@cv/eds-react/lib/components';
import { systemStart, systemStop } from '../../store/service';

const RemoteControl = () => {

  // shutDown方法
  const shutDown = () => {
    // 请求调用
    systemStop({})
        .then(response => {
          if (response.status === 200) {
            // 请求成功
            // setDataSource(response.data.data);
          } else {
            // 请求失败发送通知
            notification.notice({
              title: (
                  <>
                    <Icon type="triangle-warning" /> Error
                  </>
              ),
              description: response.data.msg,
            }, {
              duration: 5000
            });
          }
        })
        .catch(err => {
          // 错误处理
          console.log(err);
        })
  };

  // restart方法
  const restart = () => {
    // 发起restart请求
    systemStart({})
        .then(response => {
          if (response.status === 200) {
            // 请求成功
            // setDataSource(response.data.data);
          } else {
            // 请求失败发送通知
            notification.notice({
              title: (
                  <>
                    <Icon type="triangle-warning" /> Error
                  </>
              ),
              description: response.data.msg,
            }, {
              duration: 5000
            });
          }
        })
        .catch(err => {
          // 错误处理
          console.log(err);
        })
  };

  return (
      <>
        <div style={{margin: '40px auto'}}>
          <Button style={{width: 160, textAlign: 'left'}} color='' onClick={shutDown}>
            <Icon className='icon-info-solid'/>
            System Shutdown
          </Button>
        </div>
        <div style={{margin: '40px auto'}}>
          <Button style={{width: 160, textAlign: 'left'}} onClick={restart}>
            <Icon className='icon-reload'/>
            System Restart
          </Button>
        </div>
      </>
  )
};

export default RemoteControl;
