import React from 'react'
import { Form, Select } from 'antd';

// data
import nationality from './Nationality.json'

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

    function handleNationality(value: string)
    {
        setValue(value)
    }

    return (
        <Form.Item
            label={`Nationality`}
        >
            <Select onChange={handleNationality} value={value}>
                {
                    nationality.map((item, index) =>
                    {
                        return (
                            <Select.Option key={index} value={item}>{item}</Select.Option>
                        )
                    })
                }
            </Select>
        </Form.Item>
    );
}

export default Comp;
