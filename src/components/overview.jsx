import styled from "styled-components";

const Box = styled.div`
  width: 80%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
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
  margin-top: 20px;
  color: #797979;
  line-height: 2em;
`

export default function Overview(){
    return <Box className="wow animate__animated animate__zoomIn" data-wow-offset="500">
        <IntroBox>
            Overview
            <div className="tips">
                Development overview
            </div>
        </IntroBox>
        <Content>Digital agreement is not a new thing. For a long time, digital agreements are supported by centralized services, like hellosign, docusign. By using those services, we are facing their censorship requirements, and we may lose our treasures if these services providers are broke. Based on blockchain, smart contract and decentralized storage, we can build decentralized digital agreement platforms or tools. In the past years, there are several other tools saying they are based on decentralized technologies. Is it real? No, they are cheating. They are using decentralized technologies, but they don't let you know, there are also centralized SaaS/APIs used too. You will lose your treasures again, and you will facing censorship.
            <br/><br/>
            Designer is a pure decentralized digital agreement tool for DAO, because it's not rely on centralized technologies.Designer uses Gear Smart Contracts which is a new way, and IPFS as decentralized storage layer. The front end uses React + gear-js + polkadot-js/extention.</Content>
    </Box>
}