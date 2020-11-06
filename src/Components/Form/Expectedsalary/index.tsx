import React from 'react'
import { Form, Input } from 'antd';

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

    function handleExpectedsalary(e: React.ChangeEvent<HTMLInputElement>)
    {
        setValue(e.target.value.replace(/[^0-9.]/g, ''))
    }

    return (
        <Form.Item
            label={`Expected Salary`}
        >
            <Input value={value} onChange={handleExpectedsalary} />
        </Form.Item>
    );
}

export default Comp;
