import React from 'react'
import isEquals from 'fast-deep-equal';
import { Form, Input } from 'antd';

type Props = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    error: boolean
}

const Comp: React.FC<Props> = (
    {
        value,
        setValue,
        error
    }
) =>
{

    return (
        <Form.Item
            label={`Last name`}
            validateStatus={error ? 'error' : ''}
            help={error ? 'Last name error' : ''}
        >
            <Input value={value} onChange={e => setValue(e.target.value)} />
        </Form.Item>
    );
}

export default React.memo(Comp, isEquals);
