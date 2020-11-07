import React from 'react'
import { Form, Input, Row, Col } from 'antd';

type Props = {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
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

    function handleCitizenid(data: string, index: number)
    {
        setValue(item =>
        {
            let array = item
            array[index] = data.replace(/[^0-9.]/g, '')
            return [
                ...array
            ]
        })
    }

    return (
        <Form.Item
            label={`Citizen ID`}
            validateStatus={error ? 'error' : ''}
            help={error ? 'Citizen ID error' : ''}
        >
            <Row gutter={20} >
                <Col span={24}>
                    <Input value={value[0]} maxLength={1} style={{ width: '34px', marginRight: '10px' }} onChange={e => handleCitizenid(e.target.value, 0)} />
                    <Input value={value[1]} maxLength={4} style={{ width: '60px', marginRight: '10px' }} onChange={e => handleCitizenid(e.target.value, 1)} />
                    <Input value={value[2]} maxLength={5} style={{ width: '70px', marginRight: '10px' }} onChange={e => handleCitizenid(e.target.value, 2)} />
                    <Input value={value[3]} maxLength={2} style={{ width: '40px', marginRight: '10px' }} onChange={e => handleCitizenid(e.target.value, 3)} />
                    <Input value={value[4]} maxLength={1} style={{ width: '34px', marginRight: '10px' }} onChange={e => handleCitizenid(e.target.value, 4)} />

                </Col>
            </Row>
        </Form.Item>
    );
}

export default Comp;
