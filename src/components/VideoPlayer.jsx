import React from 'react'

const VideoPlayer = ({url}) => {
  return (
    <>
        <video controls autoPlay src={url} className='overlayVideo'></video>
    </>
  )
}

export default VideoPlayer
