import styled from "styled-components";
import AboutImg from "../assets/images/about-img.png";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  padding: 100px 0;
  position: relative;
`

const Btn = styled.div`
  cursor: pointer;
  position: absolute;
    height: 80px;
    width: 80px;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
    z-index: 1;
    border-radius: 50px;
    line-height: 77px;
    text-align: center;
    color: #ffffff;
    background: #024d9290;
    display: inline-block;
    -webkit-border-radius: 50px;
    -webkit-box-shadow: 0 0 0 0 #08297c;
    box-shadow: 0 0 0 0 #0c6082;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  
  &:hover {
    -o-animation: ripple 1.3s infinite;
    -webkit-animation: ripple 1.3s infinite;
    animation: ripple-button 1.3s infinite;
  }

  &.slider-play-button {
    margin: 10px;
    -webkit-transform: translate(0%,0%);
    -ms-transform: translate(0%,0%);
    -o-transform: translate(0%,0%);
    transform: translate(0%,0%);
  }

  & i {
    font-size: 20px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    transition: .5s ease;
    position: absolute;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    font-style: normal;
    transform: translate(-50%,-50%);
  }

  &:hover i {
    color: #ffffff;
  }
  @-webkit-keyframes ripple-button {
    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(0, 159, 153, 0);
      box-shadow: 0 0 0 20px rgba(0, 159, 153, 0);
    }
    to {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 159, 153, 0);
      box-shadow: 0 0 0 0 rgba(0, 159, 153, 0);
    }
  }

  @keyframes ripple-button {
    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(0, 159, 153, 0);
      box-shadow: 0 0 0 20px rgba(0, 159, 153, 0);
    }
    to {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 159, 153, 0);
      box-shadow: 0 0 0 0 rgba(0, 159, 153, 0);
    }
  }
`
export default function MidBg(){
    return <Box>
        <div className="wow animate__animated animate__bounceInLeft" data-wow-offset="400">
            <Btn>
                <i>▶</i>
            </Btn>
            <img src={AboutImg} alt=""/>
        </div>

    </Box>
}