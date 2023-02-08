import { RSA_PKCS1_PSS_PADDING } from 'constants'
import React, {Component} from 'react'
import {Card} from 'antd'
import { render } from '@testing-library/react';
import * as echarts from 'echarts'


export default class SourceCount extends Component {
    componentDidMount(){
        this.initChart();
    }

    initChart = () => {
        let myChart = echarts.init(document.getElementById('sourceCount') as HTMLElement); 
        myChart.setOption ({
            tooltip: {},
            xAxis: {
                data: ['aa', 'bb', 'cc', 'd']
            },
            yAxis: {},
            series : [{
                name:"销量",
                type: 'bar',
                data: [100, 120,133,150]
            }]

        });

    }

    render() {
        return (
            <Card title='test'>
                <div id = 'sourceCount' style = {{height: '300px'}}/>
            </Card>
        )
    }
}