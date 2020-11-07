import React, { useEffect, useState } from 'react'
import isEquals from 'fast-deep-equal';
import { useDispatch, useSelector } from "react-redux";
import { setAddUser } from '../../../redux/ListsUser/action'
import * as ListsUser from '../../../redux/ListsUser/type'
import { updateUser } from '../../../utils/localStorageLists'
import Title from '../../ElementsForm/Title'
import Name from '../../ElementsForm/Name'
import Lastname from '../../ElementsForm/Lastname'
import Birthday from '../../ElementsForm/Birthday'
import Nationality from '../../ElementsForm/Nationality'
import Citizenid from '../../ElementsForm/Citizenid'
import Gender from '../../ElementsForm/Gender'
import Phonenumber from '../../ElementsForm/Phonenumber'
import Passport from '../../ElementsForm/Passport'
import Expectedsalary from '../../ElementsForm/Expectedsalary'
import
{
    checkLength,
    checkBrithday,
    checkCitizenid,
    checkPassport,
    checkPhonenumber
} from '../../../utils/form'

import 
{
    Modal,
    Row,
    Col,
    Button,
} from 'antd';

type Props = {
    idUser: string;
    setIdUser: React.Dispatch<React.SetStateAction<string>>;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Comp: React.FC<Props> = (
    {
        idUser,
        setIdUser,
        visible,
        setVisible,
    }
) =>
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
    const [errorLastName, setErrorLastName] = useState<boolean>(false)
    const [errorBirthday, setErrorBirthday] = useState<boolean>(false)
    const [errorCitizenid, setErrorCitizenid] = useState<boolean>(false)
    const [errorPhonenumber, setErrorPhonenumber] = useState<boolean>(false)
    const [errorPassport, setErrorPassport] = useState<boolean>(false)

    const data = useSelector<ListsUser.TypeRedux>(setAddUser);
    const dispatch = useDispatch();

    function onSave()
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
                id: idUser,
                title: title,
                name: name,
                lastname: lastname,
                birthday: birthday,
                nationality: nationality,
                citizenid: citizenid.join('-'),
                gender: gender,
                phonenumber: phonenumber.join('-'),
                passport: passport,
                expectedsalary: expectedsalary,
            }

            // add
            dispatch(setAddUser(updateUser(obj, data.payload)))

            setVisible(false)
            // clear
            setIdUser('')
        }
    }

    function onCancel()
    {
        setVisible(false)
    }

    useEffect(() =>
    {
        if (idUser.length > 0)
        {
            const user = data.payload.find(item => item.id === idUser)

            setTitle(user.title)
            setName(user.name)
            setLastname(user.lastname)
            setBirthday(user.birthday)
            setNationality(user.nationality)
            setCitizenid(user.citizenid.split('-'))
            setGender(user.gender)
            setPhonenumber(user.phonenumber.split('-'))
            setPassport(user.passport)
            setExpectedsalary(user.expectedsalary)
        }
    }, [idUser])

    return (
        <Modal
            title="Edit User"
            visible={visible}
            onOk={onSave}
            onCancel={onCancel}
            width={1000}
        >
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
                <Citizenid
                    value={citizenid}
                    setValue={setCitizenid}
                    error={errorCitizenid}
                />
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
            </div>
        </Modal>
    );
}

export default React.memo(Comp, isEquals);

