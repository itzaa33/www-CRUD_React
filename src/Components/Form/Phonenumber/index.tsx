import React from 'react'
import { Select, Input, Row, Col, Form } from 'antd';

// image
import image from '../../../image/flag.png'

function Comp()
{

    return (
        <Form.Item
            label={`Mobile Phone`}
        // rules={[
        //   {
        //     required: true,
        //     message: 'Input something!',
        //   },
        // ]}
        >
            <Row gutter={10}>
                <Col span={4}>
                    <Select style={{ display: 'flex' }}>
                        <Select.Option value="+66" style={{ display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                <img style={{ width: '14px', height: '10px', margin: 'auto 4px' }} src={image} />
                                    +66
                                    </div>
                        </Select.Option>
                    </Select>
                </Col>
                <Col span={4}>
                    <Input />
                </Col>
            </Row>
        </Form.Item>

    );
}

export default Comp;
