import React, { useState, useEffect } from 'react';
import { StyledPost, StyledBody } from './Styled'
import Fade from '@material-ui/core/Fade';

export default function Post({ post, index }) {
    const isFirst = index === 0;
    const [display, setDisplay] = useState(!isFirst);

    useEffect(() => {
        isFirst && setTimeout(() => setDisplay(true), 200)
    }, [isFirst])

    return (
        <Fade in={display} timeout={isFirst && 1500}>
            <StyledPost>
                <StyledBody>
                    <img className='avatar' src={`avatars/${post.userImg}.png`} alt="avatar" />
                    <div className='full-name'>{post.name}</div>
                    <div className='date'>{post.date}</div>
                    {post.body}
                </StyledBody>
            </StyledPost>
        </Fade>
    )
}