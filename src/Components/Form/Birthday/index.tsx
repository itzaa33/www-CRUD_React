import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setAddUser } from '../../../redux/AddUser/action'
import { Form, DatePicker } from 'antd';
import { setMoment, formatMoment } from '../../../utils/moment'
import moment from 'moment'

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

  function handleBirthday(e)
  {
    if (!!e)
    {

      dispatch(setAddUser(
        {
          ...data.payload.addUserReducer,
          birthday: formatMoment(e)
        }
      ))
    }
    else
    {
      dispatch(setAddUser(
        {
          ...data.payload.addUserReducer,
          birthday: moment().format('MM/DD/YY')
        }
      ))
    }

  }

  return (
    <Form.Item
      label={`Birthday`}
      validateStatus={error ? 'error' : ''}
      help={error ? 'Birthday error' : ''}
    >
      <DatePicker
        value={setMoment(data.payload.addUserReducer.birthday)}
        onChange={handleBirthday}
        format={'MM/DD/YY'}
      />
    </Form.Item>
  );
}

export default Comp;
