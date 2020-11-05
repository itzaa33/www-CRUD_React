import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setAddUser } from '../../../redux/AddUser/action'
import { Form, Select } from 'antd';

// data
import nationality from './Nationality.json'

function Comp()
{
    const data = useSelector(setAddUser);
    const dispatch = useDispatch();

    function handleNationality(value: string)
    {
        dispatch(setAddUser(
            {
                ...data.payload.addUserReducer,
                nationality: value
            }
        ))
    }

    return (
        <Form.Item
            label={`Nationality`}
        >
            <Select onChange={handleNationality} value={data.payload.addUserReducer.nationality}>
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
