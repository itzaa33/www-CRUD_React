import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setAddUser } from '../../../redux/AddUser/action'
import { Select, Input, Row, Col, Form } from 'antd';

// image
import image from '../../../image/flag.png'

type Props = {
    error: boolean
}

const Comp: React.FC<Props> = (
    {
        error
    }
) =>
{
    const data = useSelector(setAddUser);
    const dispatch = useDispatch();

    function handlePhonenumber(value: string, index: number)
    {
        let array = data.payload.addUserReducer.phonenumber

        if (index === 1)
        {
            array[index] = value.replace(/[^0-9.]/g, '')
        }
        else
        {
            array[index] = value
        }

        dispatch(setAddUser(
            {
                ...data.payload.addUserReducer,
                phonenumber: array
            }
        ))
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
                        value={data.payload.addUserReducer.phonenumber[0]}
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
                    <Input value={data.payload.addUserReducer.phonenumber[1]} maxLength={9} onChange={e => handlePhonenumber(e.target.value, 1)} />
                </Col>
            </Row>
        </Form.Item>

    );
}

export default Comp;
