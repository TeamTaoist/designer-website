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
  @media (max-width: 1279px) {
    font-size: 16px;
    .tips{
      font-size: 20px;
    }
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

  @media (max-width: 1279px) {
    flex-wrap: wrap;
    li{
      width: 90%;
      margin: 0 auto 40px;
      &:last-child{
        margin-right: auto;
      }
    }
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
  @media (max-width: 1279px) {
    .nameTop{
      font-size: 16px;
    }
    .po{
      font-size: 12px;
    }
  }
`

export default function Team(){

    const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);


    return <Box id="Team">
        <IntroBox  className="wow animate__animated animate__bounceInLeft" data-wow-offset={flag?"0":"400"}>
            Team
            <div className="tips">
                Our team of designer
            </div>
        </IntroBox>
        <Content>
            <UlBox>

                <li className="wow animate__animated animate__fadeInLeft" data-wow-offset={flag?"0":"400"}>
                    <div>
                        <img src={DemoImg} alt=""/>
                    </div>
                    <NameBox>
                        <div className="nameTop">WendyChaung</div>
                        <div className="po">Front End Developer</div>
                    </NameBox>
                </li>
                <li className="wow animate__animated animate__fadeInLeft" data-wow-offset={flag?"0":"400"} data-wow-delay="0.2s">
                    <div>
                        <img src={DemoImg} alt=""/>
                    </div>
                    <NameBox>
                        <div className="nameTop">WendyChaung</div>
                        <div className="po">Front End Developer</div>
                    </NameBox>
                </li>
                <li className="wow animate__animated animate__fadeInLeft" data-wow-offset={flag?"0":"400"} data-wow-delay="0.4s">
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