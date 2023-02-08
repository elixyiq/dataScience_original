import React from 'react';
import { Input, Button, Row, Col, Form, notification, FormField, Icon } from '@cv/eds-react/lib/components';
import { setAliOSS } from '../../../store/service';

const OssInfoConfig = () => {

  // saveConfig方法, 保存表单内容
  const saveConfig = (err: any, fields: any) => {
    console.log(err, fields);
    // 校验表单是否填写完毕
    if (!!Object.keys(err).length) {
      return;
    }
    // 校验成功，发起请求
    setAliOSS(fields)
        .then(response => {
          if (response.status === 200) {
            // 请求成功处理
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
      <div className='add-form'style={{width: 500, height:400, overflow:'auto'}} >
        <Form
            {
              ...{
                title: '',
                footer: ([
                      <Row>
                        <Col className="column" span={4}>
                          <Button  style={{marginTop: 30}} color="primary" key="submit">
                            Submit
                          </Button>
                        </Col>
                      </Row>
                ]),
                onFormSubmit: saveConfig
              }
            }
        >
          <Row>
            <Col className="column" span={4}>
                <FormField
                    label="AccessKey ID"
                    name="accessKeyId"
                    rules={[{ type: 'required', message: '' }]}
                >
                  <Input />
                </FormField>
                <FormField
                    label="AccessKey Secret"
                    name="accessKeySecret"
                    rules={[{ type: 'required', message: '' }]}
                >
                  <Input type={'password'} />
                </FormField>
                <FormField
                    label="Endpoint"
                    name="endpoint"
                    rules={[{ type: 'required', message: '' }]}
                >
                  <Input />
                </FormField>
                <FormField
                    label="Bucket name"
                    name="bucketName"
                    rules={[{ type: 'required', message: '' }]}
                >
                  <Input />
                </FormField>
            </Col>
          </Row>
        </Form>
      </div>
  )
};

export default OssInfoConfig;
