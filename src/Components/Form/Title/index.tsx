import React from 'react'
import isEquals from 'fast-deep-equal';
import { Form, Select } from 'antd';

type Props = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Comp: React.FC<Props> = (
    {
        value,
        setValue
    }
) =>
{

    return (
        <Form.Item
            label={`Title`}
        >
            <Select onChange={e => setValue(e)} value={value}>
                <Select.Option value="Mr">Mr</Select.Option>
                <Select.Option value="Ms">Ms</Select.Option>
            </Select>
        </Form.Item>
    );
}

export default React.memo(Comp, isEquals);

