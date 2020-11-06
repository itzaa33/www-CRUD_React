import React from 'react'
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
            label={`First name`}
            validateStatus={error ? 'error' : ''}
            help={error ? 'First name error' : ''}
        >
            <Input value={value} onChange={e => setValue(e.target.value)} />
        </Form.Item>
    );
}

export default Comp;
