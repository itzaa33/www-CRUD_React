import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setAddUser, resetAddUser } from '../../redux/AddUser/action'
import * as Type from '../../redux/AddUser'
import Title from './Title'
import Name from './Name'
import Lastname from './Lastname'
import Birthday from './Birthday'
import Nationality from './Nationality'
import Citizenid from './Citizenid'
import Gender from './Gender'
import Phonenumber from './Phonenumber'
import Passport from './Passport'
import Expectedsalary from './Expectedsalary'
import
{
  checkLength,
  checkBrithday,
  checkCitizenid,
  checkPassport,
  checkPhonenumber
} from '../../utils/form'

import
{
  Form,
  Row,
  Col,
  Button,
} from 'antd';


function Copm()
{
  const [errorName, setErrorName] = useState<boolean>(false)
  const [errorLastName, setErrorLastName] = useState<boolean>(false)
  const [errorBirthday, setErrorBirthday] = useState<boolean>(false)
  const [errorCitizenid, setCitizenid] = useState<boolean>(false)
  const [errorPhonenumber, setErrorPhonenumber] = useState<boolean>(false)
  const [errorPassport, setErrorPassport] = useState<boolean>(false)

  const data = useSelector<Type.Action>(setAddUser);
  const dispack = useDispatch()

  const {
    name,
    lastname,
    birthday,
    citizenid,
    phonenumber,
    passport,
  } = data.payload.addUserReducer

  function eiei()
  {
    dispack(resetAddUser())
  }

  function onSubmit()
  {
    setErrorName(checkLength(name, 0))
    setErrorLastName(checkLength(lastname, 0))
    setErrorBirthday(checkBrithday(birthday))
    setCitizenid(checkCitizenid(citizenid))
    setErrorPhonenumber(checkPhonenumber(phonenumber))
    setErrorPassport(checkPassport(passport))

    if (!errorName && !errorLastName && !errorBirthday && !errorCitizenid && !errorPhonenumber && !errorPassport)
    {
      console.log(true)
    }
  };

  return (
    <Form
      className="ant-advanced-search-form"
    >
      <Row gutter={30}>
        <Col span={5}>
          <Title />
        </Col>
        <Col span={8}>
          <Name error={errorName} />
        </Col>
        <Col span={8}>
          <Lastname error={errorLastName} />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={6}>
          <Birthday error={errorBirthday} />
        </Col>
        <Col span={10}>
          <Nationality />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={24}>
          <Citizenid error={errorCitizenid} />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={24}>
          <Gender />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Phonenumber error={errorPhonenumber} />
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={10}>
          <Passport error={errorPassport} />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={10}>
          <Expectedsalary />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" onClick={onSubmit}>
            Search
          </Button>
        </Col>
      </Row>
      <Button type="primary" onClick={eiei}>
        eiei
          </Button>
    </Form>
  );
}

export default Copm;
