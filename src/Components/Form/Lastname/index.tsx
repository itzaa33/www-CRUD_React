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

    function handleLastName(e: React.ChangeEvent<HTMLInputElement>)
    {
        dispatch(setAddUser(
            {
                ...data.payload.addUserReducer,
                lastname: e.target.value
            }
        ))
    }

    return (
        <Form.Item
            label={`Last name`}
            validateStatus={error ? 'error' : ''}
            help={error ? 'Last name error' : ''}
        >
            <Input placeholder="placeholder" value={data.payload.addUserReducer.lastname} onChange={handleLastName} />
        </Form.Item>
    );
}

export default Comp;
