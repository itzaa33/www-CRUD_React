import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setAddUser } from '../../../redux/AddUser/action'
import { Form, Input } from 'antd';

function Comp()
{
    const data = useSelector(setAddUser);
    const dispatch = useDispatch();

    function handleExpectedsalary(e: React.ChangeEvent<HTMLInputElement>)
    {

        dispatch(setAddUser(
            {
                ...data.payload.addUserReducer,
                expectedsalary: e.target.value.replace(/[^0-9.]/g, '')
            }
        ))
    }

    return (
        <Form.Item
            label={`Expected Salary`}
        >
            <Input value={data.payload.addUserReducer.expectedsalary} onChange={handleExpectedsalary} />
        </Form.Item>
    );
}

export default Comp;
