import React from 'react'
import { Form, Input } from 'antd';

function Comp()
{
    return (
        <Form.Item
            name={`Passport`}
            label={`Passport No`}
        // rules={[
        //   {
        //     required: true,
        //     message: 'Input something!',
        //   },
        // ]}
        >
            <Input defaultValue="0571" />
        </Form.Item>
    );
}

export default Comp;
