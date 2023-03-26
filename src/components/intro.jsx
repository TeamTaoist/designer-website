import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from "swiper";
import QuoteImg from "../assets/images/quote.png";
import BgImg from "../assets/images/itemBg.png";
import 'swiper/css';
import "swiper/css/pagination";
import {useState} from "react";


const Box = styled.div`
  width: 80%;
  margin: 100px auto;
  
`
const IntroBox = styled.div`
    color: #edbd55;
  font-size: 20px;
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
const SwiperBox = styled.div`
  width: 100%;
  margin: 60px auto 0;
  .swiper {
    width: 100%;
    height: 250px;

    padding-bottom: 100px;
  }
  .swiper-wrapper{
    height: 100%;
  }
  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

  }
  
  .normal{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin: 0 5px;
    cursor: pointer;
    background: transparent;
    border: 2px solid #797979;
  }
  .active{
    background: #797979;
    border: 2px solid #797979;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin: 0 5px;
    cursor: pointer;
  }
  .symbol{
    position: absolute;
    top: -30px;
    left: calc( 50% - 30px);
    z-index: 99;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #edbd55 url(${BgImg});
    background-size: 100% 100%;
    border-radius: 60px;
    img{
      width: 30px;
    }
  }
  .item,.itemActive{
    padding: 65px 20px 45px;
    box-sizing: border-box;
    border-radius: 20px;
    position: relative;
    height: 100%;
    margin-top:60px;
    box-shadow: 0 0 20px #000;
  }
  .item{
    background: #202020;
    backdrop-filter: blur(200px);
  }
  .itemActive{
    background: #edbd55 url(${BgImg});
    background-size: 100% 100%;
    color: #000;
    .symbol{
      background: #202020;
    }
  }
 
`

const BgBox = styled.div`
    line-height: 1.5em;

`




export default function Intro(){

    const [list] = useState([
        {
            content:"Firstly, just create agreement with the help of Designer Web App, currently only PDF file supported, later we will have more file formats."
        },
        {
            content:"Secondly, add the co-signers' wallet addresses to the agreement, and submit the agreement to Designer smart contract which is deployed on Gear Network, currently we use the workshop nodes provided by Gear Technologies."
        },
        {
            content:"Thirdly, notify the co-signers through any communitcation tools as you wish. Or when they open the Designer Web App, they will see the agreements waiting for their signatures."
        },
        {
            content:"Fourthly, the co-signers sign the agreement using the Designer smart contract."
        },
        {
            content:"After all, the co-signers can view the agreements at anytime."
        }
    ]);

    const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

    return <Box>
        <IntroBox>
            Introduction
            <div className="tips">
                It's quite simple to use Designer.
            </div>
        </IntroBox>
        <SwiperBox>
            <Swiper
                spaceBetween={20}
                slidesPerView={flag?1:3}
                // pagination={{ clickable: true }}
                pagination={{
                    bulletClass: "normal",
                    bulletActiveClass:"active",

                    clickable: true
                }}
                centeredSlides={2}
                initialSlide={0}
                loop={true}
                modules={[Mousewheel, Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    list.map((item,index)=>(<SwiperSlide key={index}>
                        {({ isActive }) => (
                            <div className={isActive ? 'itemActive' : 'item'}>
                                <div className="symbol">
                                    <img src={QuoteImg} alt=""/>
                                </div>
                                <BgBox>{item.content}</BgBox>
                            </div>

                        )}

                    </SwiperSlide>))
                }


            </Swiper>
        </SwiperBox>

    </Box>
}