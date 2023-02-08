import React, { useState, useEffect } from 'react';
import { Input, Button, Row, Col, Form, notification, FormField, Icon } from '@cv/eds-react/lib/components';
import ReactECharts from 'echarts-for-react';
import { getHistorySpeedService } from '../../store/service';

const HistorySpeed: React.FC = () => {

  // 设置初始echart的options
  const initOpt = {
    legend: {
      data: ['History Speed']
    },
    xAxis: {
      type: 'category',
      data: [  // 展示在图上的time数据
        "2021-11-16T23:22:00Z",
        "2021-11-16T23:24:00Z",
        "2021-11-16T23:26:00Z",
        "2021-11-16T23:28:00Z",
        "2021-11-16T23:30:00Z",
        "2021-11-16T23:32:00Z",
        "2021-11-16T23:34:00Z",
        "2021-11-16T23:36:00Z",
        "2021-11-16T23:38:00Z",
        "2021-11-16T23:40:00Z",
        "2021-11-16T23:42:00Z",
        "2021-11-16T23:44:00Z",
        "2021-11-16T23:46:00Z",
        "2021-11-16T23:48:00Z",
        "2021-11-16T23:50:00Z",
        "2021-11-16T23:52:00Z",
        "2021-11-16T23:54:00Z",
        "2021-11-16T23:56:00Z",
        "2021-11-16T23:58:00Z",
        "2021-11-17T00:00:00Z",
        "2021-11-17T00:02:00Z",
        "2021-11-17T00:04:00Z",
        "2021-11-17T00:06:00Z",
        "2021-11-17T00:08:00Z",
        "2021-11-17T00:10:00Z",
        "2021-11-17T00:12:00Z",
        "2021-11-17T00:14:00Z",
        "2021-11-17T00:16:00Z",
        "2021-11-17T00:18:00Z",
        "2021-11-17T00:20:00Z",
        "2021-11-17T00:22:00Z",
        "2021-11-17T00:24:00Z",
        "2021-11-17T00:26:00Z",
        "2021-11-17T00:28:00Z",
        "2021-11-17T00:30:00Z",
        "2021-11-17T00:32:00Z",
        "2021-11-17T00:34:00Z",
        "2021-11-17T00:36:00Z",
        "2021-11-17T00:38:00Z",
      ]
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'axis',
    },
    series: [
      {
        name: 'History Speed',
        // 展示在图上的speed数据
        data: [150, 230, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      }
    ]
  };
  console.log(initOpt.xAxis.data.length);
  console.log(initOpt.series[0].data.length);
  const [option, setOption] = useState(initOpt);

  useEffect(() => {
    // 发起获取历史速度请求
    getHistorySpeedService()
        .then(response => {
          if (response.status === 200) {
            // 请求成功设置echart的option数据
            setOption({
              ...initOpt,
              xAxis: {
                type: 'category',
                data: response.data.timeList,
              },
              series: [
                {
                  name: 'History Speed',
                  data: response.data.valueList,
                  type: 'line',
                }
              ]
            })
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
          // 错误处理，请求出现错误重置echart的option数据
          console.log(err);
          // simulation
          setOption({...initOpt});
        })
  }, []);

  return (
      <div className='add-form'>
        <ReactECharts option={option}/>
      </div>
  )
};

export default HistorySpeed;
