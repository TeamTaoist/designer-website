import styled from "styled-components";
import TwitterImg from "../assets/images/twitter16.svg";
import GithubImg from "../assets/images/github-mark-white.svg";

const Box = styled.div`
    width: 80%;
  margin: 0 auto;
  padding: 50px 0;
`
const UlBox = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  li{
    margin: 0 20px;
    a{
      color: #ffffff;
      padding-right: 10px;
    }
    img{
      width: 35px;
      opacity: 0.6;
    }
    &:hover{
      img{
        opacity: 1;
      }
    }
  }
`
export default function Footer(){
    return <Box>
        <UlBox>
            <li> <a href="https://twitter.com/Designer__team" target="_blank" rel="noreferrer">
                <img src={TwitterImg} alt=""/>
            </a></li>
            <li><a href="https://github.com/TeamTaoist/Designer" target="_blank" rel="noreferrer">
                <img src={GithubImg} alt=""/>
            </a></li>
        </UlBox>
    </Box>
}