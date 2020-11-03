import React from 'react'
import { Dropdown, Button, Menu } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';


function Copm()
{
    const menu = (
        <Menu >
            <Menu.Item key="1" icon={<UserOutlined />}>
                1st menu item
          </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                2nd menu item
          </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                3rd menu item
          </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <Button>
                Button <DownOutlined />
            </Button>
        </Dropdown>
    );
}

export default Copm;
