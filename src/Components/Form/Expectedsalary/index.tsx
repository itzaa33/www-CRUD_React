import React from 'react'
import { Form, Input } from 'antd';

function Comp()
{
    return (
        <Form.Item
            name={`ExpectedSalary`}
            label={`Expected Salary`}
            rules={[
                {
                  required: true,
                },
              ]}
        >
            <Input />
        </Form.Item>
    );
}

export default Comp;
