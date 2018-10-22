import React from 'react'
import PropTypes from 'prop-types'

import { timeFormat } from '../../Formaters'

import { Row, Col, Button, Popconfirm } from 'antd'

export const Music = ({songInfo, onAdd}) => (
  <Row
    align='middle'
    type='flex'
  >
    <Col span={20}>
      <h1>{songInfo.title}</h1>
      <h2>{songInfo.description}</h2>
      <h3>{timeFormat(songInfo.duration)}|{songInfo.visualizations}</h3>
    </Col>
    <Col>
      <Button
        type='primary'
        icon='plus-circle'
        onClick={(event) => {
            event.stopPropagation();
            onAdd(songInfo.uuid);
          }
        }
        htmlType='button'
      />
    </Col>
  </Row>
)

Music.propTypes = {
  songInfo: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export const MusicLite = ({songInfo, onSkipTo}) => (
  <Row
    align='middle'
    type='flex'
  >
    <Col span={18}>
      <Row>{songInfo.title}</Row>
      <Row>{timeFormat(songInfo.duration)}</Row>
    </Col>
    <Col>
      <Popconfirm
        title={
          <span>
            Are you sure you want to skip to <strong>{songInfo.title}</strong>?
          </span>
        }
        onConfirm={
          (event) => {
            event.stopPropagation()
            onSkipTo(songInfo.uuid)
          }
        }
        okText="Yes"
        cancelText="No"
      >
        <Button
          htmlType='button'
          type='primary'
          icon='play-circle'
        />
      </Popconfirm>
    </Col>
  </Row>
)

MusicLite.propTypes = {
  songInfo: PropTypes.object.isRequired,
  onSkipTo: PropTypes.func.isRequired,
}