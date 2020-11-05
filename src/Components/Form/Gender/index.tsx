import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setAddUser } from '../../../redux/AddUser/action'
import { Radio, Form } from 'antd';

function Comp()
{
    const data = useSelector(setAddUser);
    const dispatch = useDispatch();

    function handleGender(value: string)
    {
        dispatch(setAddUser(
            {
                ...data.payload.addUserReducer,
                gender: value
            }
        ))
    }

    return (
        <Form.Item
            label={`Gender`}
        >
            <Radio.Group value={data.payload.addUserReducer.gender} onChange={(e) => handleGender(e.target.value)}>
                <Radio value={'Male'}>Male</Radio>
                <Radio value={'Female'}>Female</Radio>
                <Radio value={'Unisex'}>Unisex</Radio>
            </Radio.Group>
        </Form.Item>
    );
}

export default Comp;
