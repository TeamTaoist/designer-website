import styled from "styled-components";

const Box = styled.ul`
    display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  margin: 50px auto 100px;
  flex-wrap: wrap;
  li{
    width: calc( (100% - 75px) / 4);
    margin-right: 25px;
    cursor: pointer;
    border-radius: 15px;
    box-sizing: border-box;
    padding: 45px 25px;
    &:last-child{
      margin-right: 0;
    }
    &:hover{
      background: #2d2d2d;
    }
  }
 
  .num{
    font-size: 48px;
    padding-bottom: 8px;
    display: inline-block;
  }
  .top:hover{
    .num{
      transform: rotateY(360deg);
      transition: all 1.2s;
    }

  }
  .title{
    color: #fff;
    font-family: "Lato-Light";
    font-size: 26px;
  }
  .tips{
    font-size: 12px;
    margin-top: 20px;
  }
  @media (max-width: 1279px) {
    width: 100%;
    margin: 0;
    li{
      width: 90%;
      margin: 40px auto;
      &:last-child{
        margin-right: auto;
      }
    }
  }
`
export default function Adv(){


    return <Box>
        <li className="wow animate__animated animate__fadeInLeft" data-wow-offset="250">

            <div className="top">
                <div className="num">01.</div>
                <div className="title">Upload Contract</div>
                <div className="tips">Upload all the contract in .pdf format</div>
            </div>
        </li>
        <li className="wow animate__animated animate__fadeInUp" data-wow-offset="250">
            <div className="top">
                <div className="num">02.</div>
                <div className="title">Manage recipients</div>
                <div className="tips">Enter details of all the recipients</div>
            </div>

        </li>
        <li className="wow animate__animated animate__fadeInDown" data-wow-offset="250">
            <div className="top">
                <div className="num">03.</div>
                <div className="title">Prepare documents</div>
                <div className="tips">Assign the signatures and files in the document</div>
            </div>
        </li>
        <li className="wow animate__animated animate__fadeInRight" data-wow-offset="250">
            <div className="top">
                <div className="num">04.</div>
                <div className="title">Review and send</div>
                <div className="tips">Do the final review and send the documents</div>
            </div>

        </li>
    </Box>
}