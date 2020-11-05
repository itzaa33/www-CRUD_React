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

    function handlePassport(e: React.ChangeEvent<HTMLInputElement>)
    {

        dispatch(setAddUser(
            {
                ...data.payload.addUserReducer,
                passport: e.target.value
            }
        ))
    }

    return (
        <Form.Item
            label={`Passport No`}
            validateStatus={error ? 'error' : ''}
            help={error ? 'Passport error' : ''}
        >
            <Input value={data.payload.addUserReducer.passport} onChange={handlePassport} maxLength={9} />
        </Form.Item>
    );
}

export default Comp;
