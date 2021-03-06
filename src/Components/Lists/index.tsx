import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setAddUser } from '../../redux/ListsUser/action'
import * as ListsUser from '../../redux/ListsUser/type'
import { deleteUser } from '../../utils/localStorageLists'
import Modal from './Modal'

import
{
    Table,
    Button,
} from 'antd';

export type TypeLists = {
    key: number;
    id: string;
    name: string;
    gender: string;
    phonenumber: string;
    nationality: string;
}

const Comp = () =>
{
    const [lists, setList] = useState<TypeLists[]>([])
    const [selectedRowKeys, setSelectedRowKeys] = useState<TypeLists[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const [idEdit, setIdEdit] = useState<string>('')

    const data = useSelector<ListsUser.TypeRedux>(setAddUser);
    const dispatch = useDispatch();

    const columns = [
        {
            title: 'NAME',
            dataIndex: 'name',
        },
        {
            title: 'GENDER',
            dataIndex: 'gender',
        },
        {
            title: 'MOBILE PHONE',
            dataIndex: 'phonenumber',
        },
        {
            title: 'NATIONALITY',
            dataIndex: 'nationality',
        },
        {
            title: 'ACTION',
            dataIndex: '',
            render: (text) => (
                <div>
                    <a onClick={() => onEdit(text)} style={{ margin: '0 4px' }}>Edit</a>
                    <a onClick={() => onDelete(text)} style={{ margin: '0 4px' }}>Delete</a>
                </div>
            ),
        },
    ];

    function onEdit(user: TypeLists)
    {
        setIdEdit(user.id)
        setModal(true)
    }

    function onDelete(user: TypeLists)
    {
        const array = deleteUser([user], data.payload)
        dispatch(setAddUser(array))
    }

    function onDeleteAll()
    {
        setLoading(true)

        setTimeout(() =>
        {
            const array = deleteUser(selectedRowKeys, data.payload)
            dispatch(setAddUser(array))

            setSelectedRowKeys([])
            setLoading(false)
        }, 1000);
    };


    const rowSelection = {
        onChange: (selectedRowKeys: number[], selectedRows: TypeLists[]) =>
        {
            setSelectedRowKeys(selectedRows)
        },
    };

    useEffect(() =>
    {
        if (!!data?.payload && data.payload.length > 0)
        {
            const array = data.payload.map((item, index) =>
            {
                return {
                    key: index,
                    id: item.id,
                    name: `${item.name} ${item.lastname}`,
                    gender: item.gender,
                    phonenumber: item.phonenumber.replace('-',''),
                    nationality: item.nationality,
                }
            })

            setList(array)
        }

    }, [data])

    const hasSelected = selectedRowKeys.length > 0;

    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={onDeleteAll} disabled={!hasSelected} loading={loading}>
                    Delete all
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={lists}
                pagination={{ pageSize: 5 }}
            />
            <Modal
                idUser={idEdit}
                setIdUser={setIdEdit}
                visible={modal}
                setVisible={setModal}
            />
        </div>
    );
}

export default Comp;
