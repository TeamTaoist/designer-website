import styled from "styled-components";
import DemoImg from "../assets/images/team/wendy.png";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0;
`

const IntroBox = styled.div`
    color: #edbd55;
  font-size: 20px;
  padding:20px 40px;
  text-align: center;
  .tips{
    color: #ffffff;
    font-size: 40px;
    margin-top: 20px;
    font-family: "Lato-Light";
    text-transform: uppercase;

  }
`
const Content = styled.div`
  width: 80%;
  margin: 20px auto 0;
`
const UlBox = styled.ul`
  display: flex;
  justify-content: space-between;
    li{
      width: calc((100% - 100px)/3);
      margin-right: 50px;
      &:last-child{
        margin-right: 0;
      }
    }
  img{
    width: 100%;
  }
`
const NameBox = styled.div`
    margin-top: 20px;
    text-align: center;
  .nameTop{
    font-family: "black";
    margin-bottom: 10px;
    font-size: 24px;
    color: #fff;
  }
  .po{
    font-size: 16px;
  }
`

export default function Team(){
    return <Box id="Team">
        <IntroBox  className="wow animate__animated animate__bounceInLeft" data-wow-offset="400">
            Team
            <div className="tips">
                Our team of designer
            </div>
        </IntroBox>
        <Content>
            <UlBox>

                <li className="wow animate__animated animate__fadeInLeft" data-wow-offset="400">
                    <div>
                        <img src={DemoImg} alt=""/>
                    </div>
                    <NameBox>
                        <div className="nameTop">WendyChaung</div>
                        <div className="po">Front End Developer</div>
                    </NameBox>
                </li>
                <li className="wow animate__animated animate__fadeInLeft" data-wow-offset="400" data-wow-delay="0.2s">
                    <div>
                        <img src={DemoImg} alt=""/>
                    </div>
                    <NameBox>
                        <div className="nameTop">WendyChaung</div>
                        <div className="po">Front End Developer</div>
                    </NameBox>
                </li>
                <li className="wow animate__animated animate__fadeInLeft" data-wow-offset="400" data-wow-delay="0.4s">
                    <div>
                        <img src={DemoImg} alt=""/>
                    </div>
                    <NameBox>
                        <div className="nameTop">WendyChaung</div>
                        <div className="po">Front End Developer</div>
                    </NameBox>

                </li>

            </UlBox>
        </Content>
    </Box>
}