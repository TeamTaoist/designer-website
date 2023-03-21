import styled from "styled-components";
import GlobalStyle from "./utils/GlobalStyle";
import HeaderTop from "./components/headerTop";
import Second from "./components/Second";
import BgImg from "./assets/images/banner-bg.jpg";
import Adv from "./components/adv";
import Intro from "./components/intro";
import MidBg from "./components/midBg";
import Tech from "./components/tech";
import Overview from "./components/overview";
import Footer from "./components/footer";
import {useEffect} from "react";
import { WOW } from 'wowjs';
import "animate.css";
// import Banner from "./components/banner";

const Box = styled.div`
    .inner{
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

`
const First = styled.div`
    width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${BgImg}) no-repeat;
  background-size: 100% 100%;
  position: relative;
`


function App() {
    useEffect(() => {
        new WOW().init();
    }, []);
  return (
      <div>
          <Box>
              <First>
                  <HeaderTop />
                  <Second />
              </First>

              <Adv />
              <MidBg />
              <Overview />
              <Tech />
              <Intro />
              <Footer />
          </Box>
          <GlobalStyle />
      </div>

  );
}

export default App;
