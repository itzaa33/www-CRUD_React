import React from 'react'
import { Form, Select } from 'antd';

const Comp= () =>
{
    return (
        <Form.Item
            label={`Title`}
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Select>
                <Select.Option value="jack">Mr</Select.Option>
                <Select.Option value="lucy">Ms</Select.Option>
            </Select>
        </Form.Item>
    );
}

export default Comp;
