import React from 'react'
import isEquals from 'fast-deep-equal';
import { Form, DatePicker } from 'antd';
import { setMoment } from '../../../utils/moment'

type Props = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  error: boolean
}

const Comp: React.FC<Props> = (
  {
    value,
    setValue,
    error
  }
) =>
{

  function handleBirthday(e)
  {
    if (!!e)
    {
      setValue(e.valueOf())
    }
    else
    {
      setValue(Date.now())
    }

  }

  return (
    <Form.Item
      label={`Birthday`}
      validateStatus={error ? 'error' : ''}
      help={error ? 'Birthday error' : ''}
    >
      <DatePicker
        value={setMoment(value)}
        onChange={handleBirthday}
        format={'MM/DD/YY'}
      />
    </Form.Item>
  );
}

export default React.memo(Comp, isEquals);

