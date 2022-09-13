import React from 'react'
import '../resourses/default-layout.css'
import { Menu, Dropdown, Button, Space } from "antd";
import {useNavigate} from 'react-router-dom'
function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("cache-user"))
  const navigate = useNavigate()
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <li onClick={()=>{
              localStorage.removeItem('cache-user')
              navigate("/login");
            }}>Logout</li>
          ),
        }
        
      ]}
    />
  );
  
  return (
    <div className='layout'>
        <div className="header  d-flex justify-content-between align-items-center">
            <div><h1 className="logo">CA$HIFY</h1></div>
            <div className='username'>
            <Dropdown overlay={menu} placement="bottomLeft">
            <button className='primary'>{user.name}</button>
          </Dropdown>
            </div>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
  )
}

export default DefaultLayout