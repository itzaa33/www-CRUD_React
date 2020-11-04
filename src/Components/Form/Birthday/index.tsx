import React from 'react'
import { Form, DatePicker } from 'antd';


const Comp = () =>
{
  return (
    <Form.Item
      name={`Birthday`}
      label={`Birthday`}
      rules={[
        {
          required: true,
          // message: 'Input something!',
        },
      ]}
    >
      <DatePicker />
    </Form.Item>
  );
}

export default Comp;
