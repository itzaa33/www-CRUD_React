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
            label={`Passport No`}
            validateStatus={error ? 'error' : ''}
            help={error ? 'Passport error' : ''}
        >
            <Input value={value} onChange={e => setValue(e.target.value)} maxLength={9} />
        </Form.Item>
    );
}

export default Comp;
