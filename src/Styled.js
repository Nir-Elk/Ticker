import styled from 'styled-components';
import bgImage from './assets/bg.png'
import postBgImage from './assets/post_bg.png'


export const StyledContainer = styled.div`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    min-height:501px;
    width:520px;
    margin: auto;
    padding-top: 15px;
`;

export const StyledPost = styled.div`
    background-image: url(${postBgImage});
    background-repeat: no-repeat;
    min-height:141px;
    width:520px;
    margin-top: 10px;
`;

export const StyledBody = styled.div`
    padding: 20px;

    .full-name {
        font-size: 28px;
    }
    .date {
        color: red;
        font-size: 10px;
    }
    .avatar{
        float: right;
        border: 1px solid red;
        margin-left: 7px;
        box-shadow: 0px 0px 10px red;
    }
`