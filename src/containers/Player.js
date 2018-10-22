import React from 'react'
import PropTypes from 'react-proptypes'
import { timeFormat, timeFormatDisabled } from '../Formaters'

import { Button, Slider, Popover, Row, Col } from 'antd'

export class Player extends React.Component {

  state = {
    isVisible: false,
    isPlaying: false,
    currentTime: 0,
    isDisabled: !this.props.songInfo,
  }

  onVolumeClick = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  onPlayPause = () => {
    this.setState({isPlaying: !this.state.isPlaying})
  }

  resetInterval = () => {
    console.debug("Resetting interval")
    clearInterval(this.interval)
    this.interval = setInterval(() => {
        this.state.currentTime < this.props.songInfo.duration ?
          this.setState({ currentTime: this.state.currentTime + 1 })
          :
          this.onFinish();
      }
      ,1000
    )
  }

  onFinish = () => {
    clearInterval(this.interval)
    this.props.onFinish()
  }

  onChange = (value) => {
    clearInterval(this.interval)
    this.setState({currentTime: value})
  }

  onAfterChange = (value) => {
    this.setState(
      {currentTime: value},
      () => {
        this.resetInterval()
      }
    )
    this.props.onSeek(value)
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if(this.props.songInfo) {
      if (!prevProps.songInfo)
        this.setState({
          isDisabled: false,
          currentTime: this.props.songInfo.currentTime(),
          isPlaying: this.props.songInfo.isPlaying(),
        })
    }
    else {
      if (prevProps.songInfo) {
        this.setState({ isDisabled: true })
      }
    }

    if(this.state.isPlaying) {
      if(!prevState.isPlaying) {
        this.resetInterval()
      }
    }
    else
      if(prevState.isPlaying)
        clearInterval(this.interval)
  }

  componentDidMount() {
    if(this.props.songInfo) {
      this.setState({
        currentTime: this.props.songInfo.currentTime(),
        isPlaying: this.props.songInfo.isPlaying(),
      })
      if(this.props.songInfo.isPlaying)
        this.resetInterval()
    }
  }

  render() {

    const {
      onPlay,
      onPause,
      onBackward,
      onForward,
      onVolume,
      songInfo,
    } = this.props

    return (
      <>
        <Row>
          <Col span={20}>
            {
              this.state.isDisabled ?
              ''
              :
              songInfo.title
            }
          </Col>
          <Col style={{textAlign:'right'}}>
            {
              this.state.isDisabled ?
                '-' + timeFormatDisabled
                :
                '-' + timeFormat(this.props.songInfo.duration - this.state.currentTime)
            }
          </Col>
        </Row>
        <Slider
          min={0}
          max={
            this.props.songInfo ?
              this.props.songInfo.duration
              :
              0
          }
          value={this.state.currentTime}
          marks={
            this.state.isDisabled ?
            {
              0: timeFormatDisabled,
              100: timeFormatDisabled,
            }
            :
            {
            0:timeFormat(0),
            [songInfo.duration]: timeFormat(songInfo.duration),
            ...songInfo.marks
            }
          }
          onAfterChange={this.onAfterChange}
          onChange={this.onChange}
          disabled={this.state.isDisabled}
          tipFormatter={timeFormat}
        />
        <Row>
          <Col span={20}>
            <Row>
              <Col span={8}>
                <Button
                  htmlType='button'
                  type='primary'
                  icon='step-backward'
                  onClick={onBackward}
                  disabled={this.state.isDisabled}
                />
              </Col>
              <Col span={8}>
                <Button
                  htmlType='button'
                  type='primary'
                  icon={ this.state.isPlaying ? 'pause-circle' : 'play-circle' }
                  onClick={(event) => {
                    this.onPlayPause();
                    this.state.isPlaying ? onPause(event) : onPlay(event);
                  }}
                  disabled={this.state.isDisabled}
                />
              </Col>
              <Col span={8}>
                <Button
                  htmlType='button'
                  type='primary'
                  icon='step-forward'
                  onClick={onForward}
                  disabled={this.state.isDisabled}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Popover
              title="Volume"
              content={
                <Slider
                  min={0}
                  max={100}
                  onAfterChange={onVolume}
                />
              }
              trigger='click'
              visible={this.state.isVisible}
            >
              <Button
                htmlType='button'
                type='primary'
                icon='sound'
                onClick={this.onVolumeClick}
                disabled={this.state.isDisabled}
              />
            </Popover>
          </Col>
        </Row>
      </>
    )
  }
}

Player.propTypes = {
  songInfo: PropTypes.object,
  onPlay: PropTypes.func.isRequired, // (event)=>{...}
  onPause: PropTypes.func.isRequired, // (event)=>{...}
  onBackward: PropTypes.func.isRequired, // (event)=>{...}
  onForward: PropTypes.func.isRequired, // (event)=>{...}
  onFinish: PropTypes.func.isRequired, // (event)=>{...}
  onVolume: PropTypes.func.isRequired, // (volume)=>{...}
  onSeek: PropTypes.func.isRequired, // (seek)=>{...}
}