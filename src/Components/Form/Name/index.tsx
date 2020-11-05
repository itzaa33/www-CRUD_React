import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setAddUser } from '../../../redux/AddUser/action'
import { Form, Input } from 'antd';

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

    function handleName(e: React.ChangeEvent<HTMLInputElement>)
    {

        dispatch(setAddUser(
            {
                ...data.payload.addUserReducer,
                name: e.target.value
            }
        ))
    }

    return (
        <Form.Item
            label={`First name`}
            validateStatus={error ? 'error' : ''}
            help={error ? 'First name error' : ''}
        >
            <Input placeholder="placeholder" value={data.payload.addUserReducer.name} onChange={handleName} />
        </Form.Item>
    );
}

export default Comp;
