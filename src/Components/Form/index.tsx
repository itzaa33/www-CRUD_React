import React from 'react'
import Dropdow from './Dropdow'
import Idcard from './CitizenId'
import Gender from './Gender'
import { Form, Row, Col, Input, DatePicker } from 'antd';


function Copm()
{
  return (
    <Form
      className="ant-advanced-search-form"
    >
      <Row gutter={24}>
        <Col span={4}>
          <Form.Item
            name={`field`}
            label={`Field`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Dropdow />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name={`field`}
            label={`Field`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name={`field`}
            label={`Field`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={6}>
          <Form.Item
            name={`field`}
            label={`Field`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name={`field`}
            label={`Field`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Dropdow />
          </Form.Item>
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Form.Item
          name={`field`}
          label={`Field`}
          rules={[
            {
              required: true,
              message: 'Input something!',
            },
          ]}
        >
          <Idcard />
        </Form.Item>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Form.Item
          name={`field`}
          label={`Field`}
          rules={[
            {
              required: true,
              message: 'Input something!',
            },
          ]}
        >
          <Gender />
        </Form.Item>
      </Row>
    </Form>
  );
}

export default Copm;
