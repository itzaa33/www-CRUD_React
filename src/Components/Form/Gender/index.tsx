import React from 'react'
import { Radio, Form } from 'antd';

function Comp()
{
    return (
        <Form.Item
            name={`Gender`}
            label={`Gender`}
        // rules={[
        //   {
        //     required: true,
        //     message: 'Input something!',
        //   },
        // ]}
        >
            <Radio.Group>
                <Radio value={'Male'}>Male</Radio>
                <Radio value={'Female'}>Female</Radio>
                <Radio value={'Unisex'}>Unisex</Radio>
            </Radio.Group>
        </Form.Item>
    );
}

export default Comp;
