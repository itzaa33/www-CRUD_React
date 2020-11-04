import React from 'react'
import { Form, Select } from 'antd';

function Comp()
{
    return (
        <Form.Item
            name={`Nationality`}
            label={`Nationality`}
        // rules={[
        //   {
        //     required: true,
        //     message: 'Input something!',
        //   },
        // ]}
        >
            <Select>
                <Select.Option value="jack">Mr</Select.Option>
                <Select.Option value="lucy">Ms</Select.Option>
            </Select>
        </Form.Item>
    );
}

export default Comp;
