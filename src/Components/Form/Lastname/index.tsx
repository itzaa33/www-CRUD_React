import React from 'react'
import { Form, Input } from 'antd';

const Comp = () =>
{
    return (
        <Form.Item
            name={`Last-name`}
            label={`Last name`}
            rules={[
                {
                    required: true,
                    message: 'Input something!',
                },
            ]}
        >
            <Input placeholder="placeholder" />
        </Form.Item>
    );
}

export default Comp;
