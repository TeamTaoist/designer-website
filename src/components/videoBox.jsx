import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import videojs from "video.js";
import VideoDemo from "../assets/images/video.mp4";
import 'video.js/dist/video-js.css';
import CloseImg from "../assets/images/close-circle.svg";

const Mask = styled.div`
  position: fixed;
    width: 100vw;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 9999;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Box = styled.div`
    background: #000;
  padding: 20px;
 width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 1279px) {
    width: 100vw;
    height: 100vh;
    padding: 0;
  }
`

const VideoBoxBg = styled.div`
  width: 100%;
  video{
    background: #000;
    width: 100%;
  }
`

const CloseBox = styled.div`
    position: absolute;
  right: 40px;
  top: 10px;
  z-index: 999;
  cursor: pointer;
  img{
    width: 40px;
  }

  @media (max-width: 1279px) {
    right: 10px;
    top: 10px;
    img{
      margin: 0!important;
    }
  }
`


const VideoPlugin = (props) => {
    const videoNode = useRef(null);
    const [player, setPlayer] = useState(null);
    useEffect(() => {
        if (videoNode.current) {
            const _player = videojs(videoNode.current, props);
            setPlayer(_player);
            return () => {
                if (player !== null) {
                    player.dispose();
                }
            };
        }
    }, []);

    return (
        <VideoBoxBg data-vjs-player>
            <video ref={videoNode} className="video-js" />
        </VideoBoxBg>
    );
};

export default function VideoBox(props){

    const { closeModal } = props;
    const play = {
        fill: true,
        fluid: true,
        autoplay: true,
        controls: true,
        preload: "metadata",
        sources: [
            {

                src: VideoDemo,
                type: "video/mp4"
            }
        ]
    };

    const handleClose = () =>{
        closeModal();
    }

    return <Mask>
        <Box>
            <CloseBox onClick={()=>handleClose()}>
                <img src={CloseImg} alt=""/>
            </CloseBox>
            <VideoPlugin {...play} />
        </Box>
    </Mask>
}