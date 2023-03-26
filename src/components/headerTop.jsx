import styled from "styled-components";
import LogoImg from "../assets/images/logo.png";
import ReactRotatingText from "react-rotating-text";
import TopImg from "../assets/images/topNav.svg";
import SideBar from "./sideBar";
import {useState} from "react";

const FirstLine = styled.div`
    display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 20px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`

const RhtBox = styled.div`
    border: 2px solid #fff;
  border-radius: 50px;
  padding: 10px 0;
  font-size: 16px;
  font-family: "bold";
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  width:150px;
  white-space: nowrap;
  box-sizing: border-box;
  margin-right: 20px;
  cursor: pointer;
`
const Lft = styled.div`
    width: 150px;
  padding-left: 20px;
  img{
    cursor: pointer;
  }
`
const MidBox = styled.div`
    text-align: center;
    .logo{
      height: 80px;
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