import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Dj } from '../pages/dj'
import { SiderMenu } from '../containers/SiderMenu'

const { Sider, Content } = Layout

const Layout87 = ({defaultSelectedKey, children}) => (
  <Router>
    <Layout
      style={{ minHeight: '100vh' }}
    >
      <Sider
        collapsible
      >
        <SiderMenu
          defaultSelectedKey={defaultSelectedKey}
        />
      </Sider>
      <Content>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              Toca87
            </div>
          )}
        />
        <Route
          path="/Dj/"
          component={Dj}
        />
        {children}
      </Content>
    </Layout>
  </Router>
)

export default Layout87