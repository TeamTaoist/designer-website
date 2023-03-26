import styled from "styled-components";
import LogoImg from "../assets/images/logo.png";
import ReactRotatingText from "react-rotating-text";
import TopImg from "../assets/images/topNav.svg";
import SideBar from "./sideBar";
import {useState} from "react";

const FirstLine = styled.div`
    display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`

const RhtBox = styled.div`
    border: 2px solid #fff;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
  font-family: "bold";
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  box-sizing: border-box;
  cursor: pointer;

  position: absolute;
  right: 20px;
  top: 20px;
  @media (max-width: 1279px) {
    font-size:12px;
    padding: 10px;
  }
`
const Lft = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  img{
    cursor: pointer;
  }
`
const MidBox = styled.div`
    text-align: center;
    .logo{
      height: 80px;
    }
  @media (max-width: 1279px) {
    .logo{
      height: 40px;
    }
  }
  
`
const Tips = styled.div`
    margin-top: 40px;
  color: #Fff;
  font-family: "Lato-Regular";
  
`
const Ltitle = styled.div`
  font-family: "Lato-Regular";
  font-size: 50px;
  //text-transform: uppercase;
  margin-top: 20px;
  color: #Fff;
  @media (max-width: 1279px) {
    font-size: 36px;
  }
`

export default function HeaderTop(){

    const [show,setShow] = useState(false);

    const handleShow = () =>{
        setShow(true);
    }

    const handleCLose = () =>{
        setShow(false);
    }

    return <FirstLine>
        {
            show &&<SideBar handleCLose={handleCLose}/>
        }

        <Lft>
            <img src={TopImg} alt="" onClick={()=>handleShow()}/>
        </Lft>
        <MidBox>
            <div>
                <img src={LogoImg} alt="" className="logo"/>
            </div>
            <Tips>Designer is a decentralized coordinate tool for DAO.</Tips>
            <Ltitle><ReactRotatingText items={['Based on blockchain', 'Smart contract', 'Decentralized storage']} /></Ltitle>

        </MidBox>
        <RhtBox>Launch App</RhtBox>
    </FirstLine>
}