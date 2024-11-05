import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

const Header = () => {
    const items = [
        {
        label: <Link to={"/"}>Home</Link>,
        key: 'Home',
        
        },
        {
            label: <Link to={"/table"}>Table</Link>,
            key: 'Table',
            icon: <MailOutlined />,
            },
        {
        label: 'Setting',
        key: 'setting',
        icon: <SettingOutlined />,
        children: [
         {
        label:  <Link to={"/login"}>Login</Link>,
        key: 'setting:1',
        },
        {
        label:  <Link to={"/register"}>Register</Link>,
        key: 'setting:2',
        },
        ],
        },
       
        
       ];

 const [current, setCurrent] = useState('mail');
 const onClick = (e) => {
 console.log('click ', e);
 setCurrent(e.key);
 };
 return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;