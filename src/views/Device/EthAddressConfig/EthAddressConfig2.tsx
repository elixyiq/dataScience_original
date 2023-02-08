import React, { useState } from 'react';
import { Table, Button, Icon, Row, Col, notification, Form, FormField } from '@cv/eds-react/lib/components';
import IPut from 'iput';
import { setETHAddress2 } from '../../../store/service';

const EthAddressConfig2 = () => {

  const [showConfig, setShowConfig] = useState(false); // 设置控制表格显示的flag
  const [IPAddress, setIPAddress] = useState('111.111.111.111'); // 设置初始ip address
  const [netmask, setNetmask] = useState('111.111.111.111');  // 设置初始net mask
  const [dataSource, setDataSource] = useState([]); // 设置表格数据

  // 应用表单方法
  const apply = (err: any, fields: any) => {
    console.log(err, fields);
    // 表单校验不通过
    if (!!Object.keys(err).length) {
      return;
    }
    // 表单校验通过后发送请求
    setShowConfig(true);
    setETHAddress2(fields)
        .then(response => {
          if (response.status === 200) {
            setDataSource(response.data.data);
          } else {
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
          console.log(err);
        })
  };

  // 表格列信息
  const columns = [
    {
      key: 'IP address',
      title: 'IP address',
      width: 0.2,
    },
    { key: 'Netmask', title: 'Netmask', width: 0.2 },
    { key: 'status', title: 'status', width: 0.2 },
  ];

  
  function submitBtn() {
    //  epreventDefault();
    // console.log('You clicked submit.');
    alert("procceed");
  }
  
  return (
      <div style={{width: 800, height:300, overflow:'auto'}}>
        <Row>
          <Col span={4}>
            <Form
                {
                  ...{
                    title: '',
                    footer: ([
                        <div style={{width: 260, marginTop: 30}}>
                          <Button color="primary" key="submit" onClick={submitBtn}>
                            Submit
                          </Button>
                        </div>
                    ]),
                    onFormSubmit: apply
                  }
                }
            >
              <Row>
                <Col className="column" span={12}>
                  <FormField
                      label="IP address"
                      name="IPAddress"
                      value={IPAddress}
                      rules={[{ type: 'required', message: '' }]}
                  >
                    <IPut defaultValue={IPAddress}/>
                  </FormField>
                  <FormField
                      label="Netmask"
                      name="netmask"
                      value={netmask}
                      rules={[{ type: 'required', message: '' }]}
                  >
                    <IPut defaultValue={netmask}/>
                  </FormField>
                </Col>
              </Row>
            </Form>
          </Col>
          {
            showConfig
                ? (
                    <Col span={4}>
                      <div>Current IP info</div>
                      <Table
                          columns={columns}
                          dataSource={dataSource}
                      />
                    </Col>
                )
                : ''
          }

        </Row>
      </div>
  )
};

export default EthAddressConfig2;
