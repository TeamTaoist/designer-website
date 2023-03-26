import styled from "styled-components";
import Bgimg from "../assets/images/blog-bg.jpg";
import RhtImg from "../assets/images/flow.png";

const Box = styled.div`
  margin: 100px auto 0;
  background: url(${Bgimg});
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  @media (max-width: 1279px) {
    flex-direction: column;
    margin: 0 auto;
  }
`
const LftBox = styled.div`
    width: 50%;
  @media (max-width: 1279px) {
    width: 100%;
    order: 2;
  }
`

const IntroBox = styled.div`
    color: #edbd55;
  font-size: 20px;
  padding:100px 40px;
  
  .tips{
    color: #ffffff;
    font-size: 40px;
    margin-top: 20px;
    font-family: "Lato-Light";
    text-transform: uppercase;

  }
  .content{
    margin-top: 40px;
    color: #797979;
    line-height: 2em;
  }
  @media (max-width: 1279px) {
    font-size: 16px;
    padding-top: 10px;
    .tips{
      font-size: 20px;
    }
  }
`

const RhtBox = styled.div`
    width: 50%;
  position: relative;
  
  img{
    width: 100%;
  }
  @media (max-width: 1279px) {
    width: 100%;
  }
`
export default function Tech(){
    return <Box id="Technology">
        <LftBox>
            <IntroBox>
                Our Technology
                <div className="tips">
                    decentralized storage & smart contract
                </div>
                <div className="content">
                    Designer is based on the decentralized storage project IPFS and the WASM smart contract platform Gear.

                    Anyone can access the web app and agreement files at anytime, without worry about losing them. The Gear Smart Contract provides the abilitiy to store and verify the co-sign information of the agreements, without any other SaaS dependencies, such as thegraph in Ethereum ecosystem, nor the subquery in Polkadot ecosystem.

                </div>
            </IntroBox>
        </LftBox>
        <RhtBox>
            <div className="hover-effect">
                <img src={RhtImg} alt=""/>
            </div>

        </RhtBox>
    </Box>
}