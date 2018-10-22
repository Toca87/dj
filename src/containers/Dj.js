import React from 'react'

import { Affix, Button, Divider, Input, Popover, Layout } from 'antd'

import uuid from 'uuid/v4'
import { timeFormat } from '../Formaters'
import { Music, MusicLite } from '../components/Music'
import { Player } from '../containers/Player'

const { Header, Content, Footer } = Layout

export class Dj extends React.Component {
  state = {
    isLoading: false,
    searchString: "",
    musicList: [],
    queue: [],
    currentSong: null,
  }

  onSearch = () => {
    // TODO: Remove me. For mocking only
    // TODO: fetch data and store it in state.musicList
    const currentSong = songList[0];
    currentSong.currentTime = () => (10);
    currentSong.isPlaying = () => (false);
    this.setState({
      musicList: songList,
      currentSong: currentSong,
      queue: songList,
    })

    // const serverPath = new URL('http://127.0.0.1:5002/') // TODO: Make server path come from gatsby-config or environment new URL('http://127.0.0.1:5002/')
    // console.debug("serverPath:", serverPath)
    // const endpoint = new URL('search/', serverPath)
    // const encodedSearch = encodeURI(this.state.searchString)
    // console.debug("encodedSearch:", encodedSearch)
    // const url = new URL(encodedSearch, endpoint)
    // console.debug("GET:", url)
    // fetch(
    //   url.href,
    //   {
    //     method: 'GET',
    //     mode: 'cors',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // )
    //   .then((resolve, reject) => {
    //       if(resolve)
    //         console.debug("Resolve:", resolve)
    //       else
    //         console.debug("Reject:", reject)
    //     }
    //   )
  }

  onVolume = (volume) => {
    console.debug("Volume:", volume)
    // TODO: FINISH ME!
  }

  onSeek = (seek) => {
    console.debug("Seek:", seek, "(", timeFormat(seek), ")")
    // TODO: FINISH ME!
  }

  onPlay = () => {
    console.debug("Play!");
    // TODO: FINISH ME!
  }

  onPause = () => {
    console.debug("Pause!");
    // TODO: FINISH ME!
  }

  onBackward = () => {
    console.debug("Backward!");
    // TODO: FINISH ME!
  }

  onForward = () => {
    console.debug("Forward!");
    // TODO: FINISH ME!
  }

  onFinish = () => {
    console.debug("Song Finished!");
    // TODO: FINISH ME!
  }

  onAdd = (songUUID) => {
    console.debug(
      "Add Song:",
      songUUID,
      "(",
      this.state.musicList.find(
        (songInfo) => (
          songInfo.uuid === songUUID
        )
      ).title,
      ")"
    )
    // TODO: FINISH ME!
  }

  onSkipTo = (songUUID) => {
    console.debug(
      "Skip To Song:",
      songUUID,
      "(",
      this.state.queue.find(
        (songInfo) => (
          songInfo.uuid === songUUID
        )
      ).title,
      ")"
    )
    // TODO: FINISH ME!
  }

  componentDidMount() {
    // TODO: Fetch current playing song and set it to state.currentSong
  }

  render() {
    console.debug("Search String:", this.state.searchString)
    console.debug("Music List:", this.state.musicList)
    console.debug(
      "Current Song:",
      this.state.currentSong ?
        this.state.currentSong.uuid
        :
        'No Song In Queue',
      "(",
      this.state.currentSong ?
        this.state.currentSong.title
        :
        '',
      ")",
    )
    return(
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Affix>
          <Header
            style={{
              display:'flex',
              flexDirection:'row',
              flexWrap:'nowrap',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            <Popover
              title="Queue"
              content={
                this.state.queue.map(
                  (songInfo) => (
                    <MusicLite
                      key={songInfo.uuid}
                      songInfo={songInfo}
                      onSkipTo={this.onSkipTo}
                    />
                  )
                )
              }
            >
              <Button
                htmlType='button'
                type='primary'
                icon='ordered-list'
              />
            </Popover>
            <Input.Search
              enterButton
              onSearch={this.onSearch}
              onChange={(event) => (
                this.setState({searchString:event.target.value}))
              }
              disabled={this.state.isLoading}
            />
          </Header>
        </Affix>
        <Content>
          {
            this.state.musicList.map((songInfo) => {
              return(
                <div key={songInfo.uuid}>
                  <Music
                    songInfo={songInfo}
                    onAdd={this.onAdd}
                  />
                  <Divider/>
                </div>
              )
            })
          }
        </Content>
        <Affix
          offsetBottom={0}
        >
          <Footer
            style={{
              borderTop:'solid',
              borderTopWidth:1
            }}
          >
            <Player
              songInfo={this.state.currentSong}
              onVolume={this.onVolume}
              onPlay={this.onPlay}
              onPause={this.onPause}
              onBackward={this.onBackward}
              onForward={this.onForward}
              onFinish={this.onFinish}
              onSeek={this.onSeek}
            />
          </Footer>
        </Affix>
      </Layout>
    )
  }
}


const songList = [
  {
    visualizations: "10M",
    duration: 185,
    title: "Papercut",
    description: "Linking Park Will Never Die!",
    marks: { // extra marks
      42:'Drop',
      142:'Chorus'
    },
    uuid: uuid(),
  },
  {
    visualizations: "1",
    duration: 60*60*3,
    title: "Oh Hell No",
    description: "Don't add me to the play list",
    uuid: uuid(),
  },
  {
    visualizations: "10M",
    duration: 185,
    title: "Papercut",
    description: "Linking Park Will Never Die!",
    uuid: uuid(),
  },
  {
    visualizations: "1",
    duration: 60*60*3,
    title: "Oh Hell No",
    description: "Don't add me to the play list",
    uuid: uuid(),
  },
  {
    visualizations: "10M",
    duration: 185,
    title: "Papercut",
    description: "Linking Park Will Never Die!",
    uuid: uuid(),
  },
  {
    visualizations: "1",
    duration: 60*60*3,
    title: "Oh Hell No",
    description: "Don't add me to the play list",
    uuid: uuid(),
  },
  {
    visualizations: "10M",
    duration: 185,
    title: "Papercut",
    description: "Linking Park Will Never Die!",
    uuid: uuid(),
  },
  {
    visualizations: "1",
    duration: 60*60*3,
    title: "Oh Hell No",
    description: "Don't add me to the play list",
    uuid: uuid(),
  },
  {
    visualizations: "10M",
    duration: 185,
    title: "Papercut",
    description: "Linking Park Will Never Die!",
    uuid: uuid(),
  },
  {
    visualizations: "1",
    duration: 60*60*3,
    title: "Oh Hell No",
    description: "Don't add me to the play list",
    uuid: uuid(),
  },
  {
    visualizations: "10M",
    duration: 185,
    title: "Papercut",
    description: "Linking Park Will Never Die!",
    uuid: uuid(),
  },
  {
    visualizations: "1",
    duration: 60*60*3,
    title: "Oh Hell No",
    description: "Don't add me to the play list",
    uuid: uuid(),
  },
]
