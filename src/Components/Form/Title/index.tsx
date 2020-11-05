import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setAddUser } from '../../../redux/AddUser/action'
import { Form, Select } from 'antd';

const Comp = () =>
{
    const data = useSelector(setAddUser);
    const dispatch = useDispatch();

    function handleTitle(value: string)
    {
        dispatch(setAddUser(
            {
                ...data.payload.addUserReducer,
                title: value
            }
        ))
    }

    return (
        <Form.Item
            label={`Title`}
        >
            <Select onChange={handleTitle} value={data.payload.addUserReducer.title}>
                <Select.Option value="Mr">Mr</Select.Option>
                <Select.Option value="Ms">Ms</Select.Option>
            </Select>
        </Form.Item>
    );
}

export default Comp;
