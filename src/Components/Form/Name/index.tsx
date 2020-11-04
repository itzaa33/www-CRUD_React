import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setAddUser } from '../../../redux/AddUser/action'
import { Form, Input } from 'antd';

const Comp = () =>
{
    // const data = useSelector(setAddUser);
    // const dispatch = useDispatch();

    // function handleName(e: React.ChangeEvent<HTMLInputElement>)
    // {

    //     dispatch(setAddUser(
    //         {
    //             ...data.payload.addUserReducer,
    //             name: e.target.value
    //         }
    //     ))
    // }

    return (
        <Form.Item
            label={`First name`}
            rules={[
                {
                    required: true,
                    // message: 'Input something!',
                },
            ]}
        >
            <Input placeholder="placeholder" />
        </Form.Item>
    );
}

export default Comp;
