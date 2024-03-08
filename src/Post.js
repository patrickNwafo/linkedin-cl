import React, { forwardRef } from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className='post__header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <h2>{message}</h2>
      </div>

      <div className="post__button">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color='gray' />
        <InputOption Icon={ChatOutlined} title="Comment" color='gray' />
        <InputOption Icon={ShareOutlined} title="Share" color='gray' />
        <InputOption Icon={SendOutlined} title="Send" color='gray' />
      </div>
    </div>
  )
})

export default Post