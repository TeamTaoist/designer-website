import styled from "styled-components";
import CloseImg from "../assets/images/close.svg";
import TwitterImg from "../assets/images/twitter16.svg";
import GithubImg from "../assets/images/github-mark-white.svg";

const Mask = styled.div`
  position: fixed;
    width: 100vw;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 9999;
  background: rgba(0,0,0,0.5);
`

const Box = styled.div`
  position:relative;
  height: 100%;
  width: 40vw;

  background: #2d2d2d;
  box-sizing: border-box;
  padding: 56px 80px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1279px) {
    width: 100vw;
  }
`

const CloseBox = styled.div`
  position: absolute;
  top: 30px;
  right: 15px;
  cursor: pointer;
  img{
    width: 24px;
  }
`
const NavUl = styled.ul`
  flex-grow: 1;
    li{
      padding: 15px 0;
      font-family: "Lato-Light";
      line-height: 38px;
      font-size: 30px;
      cursor: pointer;
      span{
        font-family: "Lato-Light";
        color: #ffffff;
        padding-left: 10px;
      }
    }
  @media (max-width: 1279px) {
   li{
     font-size: 24px;
   }
  }
`

const BtmBox = styled.div`
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

export default function SideBar(props){

    const {handleCLose} = props;

    const toGo = (selector) =>{
        if(selector){
            document.querySelector(selector).scrollIntoView({
                behavior:"smooth"
            });
            setTimeout(()=>{
                handleCLose();
            },1000)
        }else{
            handleCLose();
        }


    }
    return <Mask>
        <Box className="animate__animated animate__fadeInLeft">
            <CloseBox>
                <img src={CloseImg} alt="" onClick={()=>handleCLose()}/>
            </CloseBox>
            <NavUl>
                <li onClick={()=>toGo()}>01.<span>Home</span></li>
                <li onClick={()=>toGo("#videoInner")}>02.<span>video</span></li>
                <li onClick={()=>toGo("#overview")}>03.<span>Overview</span></li>
                <li onClick={()=>toGo("#Technology")}>04.<span>Technology</span></li>
                <li onClick={()=>toGo("#Team")}>05.<span>Team</span></li>
                <li onClick={()=>toGo("#Roadmap")}>06.<span>Roadmap</span></li>
            </NavUl>
            <BtmBox>
                <UlBox>
                    <li> <a href="https://twitter.com/Designer__team" target="_blank" rel="noreferrer">
                        <img src={TwitterImg} alt=""/>
                    </a></li>
                    <li><a href="https://github.com/TeamTaoist/Designer" target="_blank" rel="noreferrer">
                        <img src={GithubImg} alt=""/>
                    </a></li>
                </UlBox>
            </BtmBox>
        </Box>
    </Mask>
}