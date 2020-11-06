import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { setAddUser } from '../../redux/ListsUser/action'
import { addUser } from '../../utils/localStorageLists'
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
  const [title, setTitle] = useState<string>('Mr')
  const [name, setName] = useState<string>('')
  const [lastname, setLastname] = useState<string>('')
  const [birthday, setBirthday] = useState<number>(Date.now())
  const [nationality, setNationality] = useState<string>('Thai')
  const [citizenid, setCitizenid] = useState<string[]>(['', '', '', '', '', ''])
  const [gender, setGender] = useState<string>('Male')
  const [phonenumber, setPhonenumber] = useState<string[]>(['+66', ''])
  const [passport, setPassport] = useState<string>('')
  const [expectedsalary, setExpectedsalary] = useState<string>('')

  const [errorName, setErrorName] = useState<boolean>(false)
  const [errorLastName, setErrorLastName] = useState<boolean>(null)
  const [errorBirthday, setErrorBirthday] = useState<boolean>(false)
  const [errorCitizenid, setErrorCitizenid] = useState<boolean>(false)
  const [errorPhonenumber, setErrorPhonenumber] = useState<boolean>(false)
  const [errorPassport, setErrorPassport] = useState<boolean>(false)

  const data = useSelector(setAddUser);
  const dispatch = useDispatch();

  // function eiei()
  // {
  //   let obj = {
  //     id: uuidv4(),
  //     title: 'title',
  //     name: 'name',
  //     lastname: 'lastname',
  //     birthday: birthday,
  //     nationality: 'nationality',
  //     citizenid: 'citizenid',
  //     gender: 'gender',
  //     phonenumber: 'phonenumber',
  //     passport: 'passport',
  //     expectedsalary: 'expectedsalary',
  //   }
  //   dispatch(setAddUser(addUser(obj, data.payload)))
  //   // localStorage.removeItem('stroe')
  // }

  function onSubmit()
  {
    const errname = checkLength(name, 0)
    const errlastname = checkLength(lastname, 0)
    const errbirthday = checkBrithday(birthday)
    const errcitizenid = checkCitizenid(citizenid)
    const errphonenumber = checkPhonenumber(phonenumber)
    const errpassport = checkPassport(passport)

    setErrorName(errname)
    setErrorLastName(errlastname)
    setErrorBirthday(errbirthday)
    setErrorCitizenid(errcitizenid)
    setErrorPhonenumber(errphonenumber)
    setErrorPassport(errpassport)

    if (!errname && !errlastname && !errbirthday && !errcitizenid && !errphonenumber && !errpassport)
    {
      let obj = {
        id: uuidv4(),
        title: title,
        name: name,
        lastname: lastname,
        birthday: birthday,
        nationality: nationality,
        citizenid: citizenid.join(''),
        gender: gender,
        phonenumber: phonenumber.join(''),
        passport: passport,
        expectedsalary: expectedsalary,
      }

      // add
      dispatch(setAddUser(addUser(obj, data.payload)))

      // reset
      setTitle('Mr')
      setName('')
      setLastname('')
      setBirthday(Date.now())
      setNationality('Thai')
      setCitizenid(['', '', '', '', '', ''])
      setGender('Male')
      setPhonenumber(['+66', ''])
      setPassport('')
      setExpectedsalary('')

    }
  };
  console.log(!errorName, !errorLastName, !errorCitizenid, !errorBirthday, !errorPhonenumber, !errorPassport, 'eiei')
  return (
    <div
      className="ant-advanced-search-form"
    >
      <Row gutter={30}>
        <Col span={5}>
          <Title
            value={title}
            setValue={setTitle}
          />
        </Col>
        <Col span={8}>
          <Name
            value={name}
            setValue={setName}
            error={errorName}
          />
        </Col>
        <Col span={8}>
          <Lastname
            value={lastname}
            setValue={setLastname}
            error={errorLastName}
          />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={6}>
          <Birthday
            value={birthday}
            setValue={setBirthday}
            error={errorBirthday}
          />
        </Col>
        <Col span={10}>
          <Nationality
            value={nationality}
            setValue={setNationality}
          />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={24}>
          <Citizenid
            value={citizenid}
            setValue={setCitizenid}
            error={errorCitizenid}
          />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={24}>
          <Gender
            value={gender}
            setValue={setGender}
          />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Phonenumber
        value={phonenumber}
        setValue={setPhonenumber}
        error={errorPhonenumber}
      />
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={10}>
          <Passport
            value={passport}
            setValue={setPassport}
            error={errorPassport}
          />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row gutter={24}>
        <Col span={10}>
          <Expectedsalary
            value={expectedsalary}
            setValue={setExpectedsalary}
          />
        </Col>
      </Row>
      {/* ----------------------------------------------------- */}
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" onClick={()=>{onSubmit()}}>
            Search
          </Button>
        </Col>
      </Row>
      {/* <Button type="primary" onClick={eiei}>
        eiei
          </Button> */}
    </div>
  );
}

export default Copm;
