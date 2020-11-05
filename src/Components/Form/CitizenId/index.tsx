import React from 'react'
import { Form, Input, Row } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { setAddUser } from '../../../redux/AddUser/action'

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

    function handleCitizenid(value: string, index: number)
    {
        let array = data.payload.addUserReducer.citizenid
        array[index] = value.replace(/[^0-9.]/g, '')

        dispatch(setAddUser(
            {
                ...data.payload.addUserReducer,
                citizenid: array
            }
        ))
    }

    return (
        <Form.Item
            label={`Citizen ID`}
            validateStatus={error ? 'error' : ''}
            help={error ? 'Citizen ID error' : ''}
        >
            <Row gutter={20} >
                <Input value={data.payload.addUserReducer.citizenid[0]} maxLength={1} style={{ width: '34px', marginRight: '10px' }} onChange={e => handleCitizenid(e.target.value, 0)} />
                <Input value={data.payload.addUserReducer.citizenid[1]} maxLength={4} style={{ width: '60px', marginRight: '10px' }} onChange={e => handleCitizenid(e.target.value, 1)} />
                <Input value={data.payload.addUserReducer.citizenid[2]} maxLength={5} style={{ width: '70px', marginRight: '10px' }} onChange={e => handleCitizenid(e.target.value, 2)} />
                <Input value={data.payload.addUserReducer.citizenid[3]} maxLength={2} style={{ width: '40px', marginRight: '10px' }} onChange={e => handleCitizenid(e.target.value, 3)} />
                <Input value={data.payload.addUserReducer.citizenid[4]} maxLength={1} style={{ width: '34px', marginRight: '10px' }} onChange={e => handleCitizenid(e.target.value, 4)} />
            </Row>
        </Form.Item>
    );
}

export default Comp;
