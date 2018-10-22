import React from 'react'

import Layout87 from '../components/Layout'
import { timeFormat } from '../Formaters'
import { Affix, Button, Divider, Input, Popover, Layout } from 'antd'
import { Music, MusicLite } from '../components/Music'
import { Player } from '../containers/Player'
import uuid from 'uuid/v4'

const { Header, Content, Footer } = Layout

// const post = (command) => {
//   console.debug("Player POST Command:", command);
// }

const DjPage = () => (
  <Layout87
    defaultSelectedKey='/dj/'
  />
)

export default DjPage