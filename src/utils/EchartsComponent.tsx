import React, { useState } from 'react';
import { Input, Button, Row, Col, Form, notification, FormField, Icon } from '@cv/eds-react/lib/components';
import ReactECharts from 'echarts-for-react';
import { getRealtimeSpeedService } from '../store/service';

const HistoryChart = () => {

  // 设置初始echart的options
  const initOpt = {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: -20,
          length: 8,
          lineStyle: {
            color: '#a2c31d',
            width: 2
          }
        },
        splitLine: {
          distance: -20,
          length: 20,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'auto',
          distance: 20,
          fontSize: 10
        },
        detail: {
          valueAnimation: true,
          formatter: '{value} kb/s',
          color: 'auto'
        },
        data: [ // 此为最终展示在图形上的数据，在请求成功后进行设置
          {
            value: 30
          }
        ],
        max: 200
      }
    ]
  };
  const [option, setOption] = useState(initOpt);
  const [timer, setTimer] = useState<any>(null);

  const getRealtimeSpeed = () => {
    // 发起获取实时速度请求
    getRealtimeSpeedService()
        .then(response => {
          if (response.status === 200) {
            // 请求成功设置echart的option数据
            console.log(response.data.data);
            setOption({
              series: [
                {
                  ...initOpt.series[0],
                  data: [
                    {
                      value: response.data.data.speed
                    }
                  ]
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
          setOption({
            series: [
              {
                ...initOpt.series[0],
                data: [
                  {
                    value:  +(Math.random() * 200).toFixed(2)
                  }
                ]
              }
            ]
          })
        });
  };


    

  // 开始轮询速度方法
  const startPollSpeed = () => {
    const timer = setInterval(() => {
      getRealtimeSpeed()
    }, 3000);
    setTimer(timer);
  };

  // 停止轮询速度方法，清楚定时器即可
  const stopPollSpeed = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const option1 = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
    }

  return (
      <div className='' style={{width: 400}}>
        <ReactECharts option={option}/>
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <ReactECharts option={option1}/>
        </div>
      </div>
  )
};

export default HistoryChart;
