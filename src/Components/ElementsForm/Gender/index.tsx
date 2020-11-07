import React from 'react'
import isEquals from 'fast-deep-equal';
import { Radio, Form } from 'antd';

type Props = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Comp: React.FC<Props> = (
    {
        value,
        setValue,
    }
) =>
{
    return (
        <Form.Item
            label={`Gender`}
        >
            <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
                <Radio value={'Male'}>Male</Radio>
                <Radio value={'Female'}>Female</Radio>
                <Radio value={'Unisex'}>Unisex</Radio>
            </Radio.Group>
        </Form.Item>
    );
}

export default React.memo(Comp, isEquals);
