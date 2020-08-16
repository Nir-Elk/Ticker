import React from 'react';
import { StyledContainer } from './Styled';
import titleImage from './assets/title.png';
import Posts from './Posts'

export default function App() {
  return (
      <StyledContainer>
        <img src={titleImage} alt="title_image"/>
        <Posts />
      </StyledContainer>
  )
}