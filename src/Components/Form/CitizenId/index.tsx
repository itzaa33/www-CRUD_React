import React from 'react'
import { Input, Row, Col } from 'antd';


function Copm()
{

    return (

        <Input.Group size="large">
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
        </Input.Group>
    );
}

export default Copm;
