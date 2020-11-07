import React from 'react'
import { Select, Input, Row, Col, Form } from 'antd';

// image
import image from '../../../image/flag.png'

type Props = {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
    error: boolean;
}

const Comp: React.FC<Props> = (
    {
        value,
        setValue,
        error
    }
) =>
{
    function handlePhonenumber(data: string, index: number)
    {
        if (index === 1)
        {
            setValue(item =>
            {
                let array = item
                array[index] = data.replace(/[^0-9.]/g, '')
                console.log(array[index],'=',data)
                return [
                    ...array
                ]
            })
        }
        else
        {
            setValue(item =>
            {
                let array = item
                array[index] = data

                return [
                    ...array
                ]
            })
        }
    }

    return (
        <Form.Item
            label={`Mobile Phone`}
            validateStatus={error ? 'error' : ''}
            help={error ? 'Mobile Phone error' : ''}
        >
            <Row gutter={10}>
                <Col span={4}>
                    <Select
                        style={{ display: 'flex' }}
                        value={value[0]}
                        onChange={(e) => handlePhonenumber(e.toString(), 0)}
                    >
                        <Select.Option value="+66" style={{ display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                <img style={{ width: '14px', height: '10px', margin: 'auto 4px' }} src={image} />
                                    +66
                            </div>
                        </Select.Option>
                    </Select>
                </Col>
                <Col span={4}>
                    <Input value={value[1]} maxLength={9} onChange={e => handlePhonenumber(e.target.value, 1)} />
                </Col>
            </Row>
        </Form.Item>

    );
}

export default Comp;
