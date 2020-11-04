import React from 'react'
import { Form, Input, Row, Col } from 'antd';


function Comp()
{

    return (
        <Form.Item
            label={`Citizen ID`}>
            <Row gutter={8}>
                <Col span={2}>
                    <Input defaultValue="0571" />
                </Col>
                <Col span={4}>
                    <Input defaultValue="26888888" />
                </Col>
                <Col span={4}>
                    <Input defaultValue="26888888" />
                </Col>
                <Col span={4}>
                    <Input defaultValue="26888888" />
                </Col>
                <Col span={2}>
                    <Input defaultValue="26888888" />
                </Col>
            </Row>
        </Form.Item>
    );
}

export default Comp;
