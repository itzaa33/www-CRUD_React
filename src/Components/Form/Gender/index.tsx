import React from 'react'
import { Radio } from 'antd';

function Copm()
{
    return (
        <Radio.Group >
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
        </Radio.Group>
    );
}

export default Copm;
