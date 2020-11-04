import React, { useState } from 'react'
import Title from './Title'
import Name from './Name'
import Lastname from './Lastname'
import Birthday from './Birthday'
import Nationality from './Nationality'
import Citizenid from './Citizenid'
import Gender from './Gender'
import Phonenumber from './Phonenumber'
import Passport from './Passport'
import Expectedsalary from './Expectedsalary'

import
{
  Form,
  Row,
  Col,
  Button,
} from 'antd';


function Copm()
{

  function onFinish(e)
  {

  };

  return (
    <Form
      onFinish={onFinish}
      className="ant-advanced-search-form"
    >
      <Row gutter={30}>
        <Col span={5}>
          <Title />
        </Col>
        <Col span={8}>
          <Name />
        </Col>
        <Col span={8}>
          <Lastname />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={6}>
          <Birthday />
        </Col>
        <Col span={10}>
          <Nationality />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={24}>
          <Citizenid />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={24}>
          <Gender />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Phonenumber />
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={10}>
          <Passport />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={10}>
          <Expectedsalary />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Copm;
