import React, { useState } from 'react';
import { Input, Button, Row, Col, Form, notification, FormField, Icon } from '@cv/eds-react/lib/components';
import ReactECharts from 'echarts-for-react';
import { getRealtimeSpeedService } from '../../store/service';
import HistoryChart from '../../utils/EchartsComponent';
import SourceCount from '../../utils/CardChart';
import { data } from 'jquery';
import Item from 'antd/lib/list/Item';



interface item {
  value: [number, number];
}
let aval = 10
// let data0 = [ [new Date().getTime(),100],  [new Date().getTime()+1000,400],
// [new Date().getTime()+2000,20],[new Date().getTime()+3000,620],[new Date().getTime()+4000,320]]
let data0: item[] = [];

function returnItem ( a: number ,x:number ) : item{
  let time = new Date().getTime()/10
  
  return{
    value: [time * 10+ 100*a,x]
  }
}
function getItem ( x:number ) : item{

  return{
    value: [ new Date().getTime(),x]
  }
}

const RealtimeSpeed = () => {
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
  // let data1  = [ [new Date().getTime(),100],  [new Date().getTime()+1000,400],
  // [new Date().getTime()+2000,20],[new Date().getTime()+3000,620],[new Date().getTime()+4000,320]]
  // let data1 = data0
  let data1 : item[] = []
  aval += 10
  //let item1 = returnItem(0, Math.random()*200)
  for ( let i = 0; i < data0.length;  i++) {
    data1.push(data0[i]);
  }
  // data1.push(item1)
  //data1.push(returnItem(1, Math.random()*200))
  // data1.push(returnItem(2, Math.random()*200))



  // let data1  = [ [new Date().getTime(),100],  [new Date().getTime()+1000,200],
  // [new Date().getTime()+2000,240]]
 
  let new_item : item;

  const getRealtimeSpeed = () => {
    // 发起获取实时速度请求
    getRealtimeSpeedService()
        .then(response => {
          if (response.status === 200) {
            // 请求成功设置echart的option数据
            //data1.push([new Date().getTime()+3000,response.data.data.speed])
            new_item = getItem(response.data.data)
            data1.push(new_item)
            data0 = data1
            if (data0.length > 10) {
              data0.shift()
            }
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
          } 
          
          
          else {
            // 请求失败发送通知
            // notification.notice({
            //   title: (
            //       <>
            //         <Icon type="triangle-warning" /> Error
            //       </>
            //   ),
            //   description: response.data.msg,
            // }, {
            //   duration: 5000
            // });
          }
        })

        .catch(err => {
          // 错误处理，请求出现错误重置echart的option数据
          let fakespeed = +(Math.random() * 200).toFixed(2)
          // data1.push([new Date().getTime(),fakespeed])
          // simulation
          new_item = getItem(fakespeed)
          data1.push(new_item)
          data0 = data1
          if (data0.length > 10) {
            data0.shift()
          }

          setOption({
            series: [
              {
                ...initOpt.series[0],
                data: [
                  {
                    value:  fakespeed
                  }
                ]
              }
            ]
          })
        });
  };


  for (let i = 0; i < data1.length; i++){
    console.log(data1[i]["value"])
  }
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
    // title: {
    //   text: ''
    // },
    tooltip: {},
    xAxis: {
      type: 'time',
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        showSymbol: false,
        data: data1
      }
    ]
    }
  let sum = 0;
  let max = 0
  let min = 0
  for (let i = 0; i < data1.length;i++){
    max = data1[i]["value"][1] > max ? data1[i]["value"][1] : max
    sum += data1[i]["value"][1]
  }
  let avg =(sum/(data1.length)).toFixed(2)

  return (
      <div className='' style={{width: 800, height:500, overflow:'auto'}}>
         {/* <div style={{ 
            }}><SourceCount>asdsdd</SourceCount></div> */}
        <ReactECharts option={option}/>
        <div style={{
          display: 'display-outside',
          justifyContent: 'center'
        }}>


          <Button onClick={startPollSpeed}>Start</Button>
          <Button onClick={stopPollSpeed}>Stop</Button>
          <h2>Speed Statistic</h2>
          <h3>Average Speed: {avg}       Top Speed: {max} </h3>
          <ReactECharts option={option1}/>
          
        </div>
       
          
      </div>
  )
};

export default RealtimeSpeed;
