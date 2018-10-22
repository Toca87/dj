import React from 'react'
import { Affix, Icon, Menu } from 'antd'
import { Link } from 'react-router-dom'

export const SiderMenu = ({defaultSelectedKey}) => (
  <Affix>
    <Menu
      theme="dark"
      defaultSelectedKeys={
        [defaultSelectedKey]
      }
      mode='inline'
    >
      <Menu.Item key='/'>
        <Link to='/'>
          <Icon type='home'/>
          <span>Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key='/dj/'>
        <Link to='/dj/'>
          <Icon type='youtube'/>
          <span>Dj</span>
        </Link>
      </Menu.Item>
    </Menu>
  </Affix>
)