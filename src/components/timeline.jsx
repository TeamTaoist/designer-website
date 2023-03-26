import styled from "styled-components";

const Box = styled.div`
    background: #000;
  padding: 100px 0 100px;
`
const MainBox = styled.div`
  margin: 0 ;
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
const LineBox = styled.div`

  position: relative;
  min-height: 400px;
  width: 100%;
  overflow-x: auto;

  .timelines-years {
    position: absolute;
    top: 300px;
    left:360px;
    //padding: 0 0 0 200px;
    margin: 0;
    white-space: nowrap;
    border-top: 1px solid #282828;
    list-style: none;
    /* Fix display: inline-block spacing issue */;
    font-size: 0;
  }

  .timelines-years li {
    position: relative;
    top: -6px;
    display: inline-block;
    width: 200px;
    color: #868686;
    font-size: 11px;
    line-height: 11px;
    text-indent: -12px;
    span{
      background: #000;
      padding: 0 5px;
    }
  }

  /* Display last year */

  .timelines-years li:last-child {
    width: 100px;
  }

  /* Timeline - Events */

  .timeline-events {
    position: absolute;
    top: 170px;
    padding: 0;
    list-style: none;
    white-space: nowrap;
    /* Fix display: inline-block spacing issue */;
    font-size: 0;
  }

  .timeline-events h2,
  .timeline-events h3,
  .timeline-events h4 {
    margin: 0 0 1px 0;
    font-weight: normal;
    font-size: 11px;
  }

  .timeline-events h2 {
    color: #777;
    text-transform: uppercase;
  }

  .timeline-events h4 {
    color: #fff;
    font-style: italic;
  }

  .timeline-events li {
    position: relative;
    display: inline-block;
  }

  .timeline-events li:before {
    position: absolute;
    left: 0;
    bottom: -36px;
    height: 8px;
    border-radius: 8px;
    content: '';
  }
  

  .timeline-events li:nth-child(0) {
    bottom: -16px;
  }
  .timeline-events li:nth-child(1) {
    bottom: 0;
  }
  .timeline-events li:nth-child(2) {
    bottom: 16px;
  }
  .timeline-events li:nth-child(3) {
    bottom: 32px;
  }
  .timeline-events li:nth-child(4) {
    bottom: 48px;
  }
  .timeline-events li:nth-child(5) {
    bottom: 64px;
  }
  .timeline-events li:nth-child(1):before {
    background: linear-gradient(90deg,rgba(194,227,78,0), rgba(194,227,78,1));
    border-radius: 0 6px 6px 0;
  }

  .timeline-events li:nth-child(1) h3 {
    color: #C2E34E;
  }
  
  .timeline-events li:nth-child(2):before {
    background: #FF9704;
  }

  .timeline-events li:nth-child(2) h3 {
    color: #FF9704;
  }
  .timeline-events li:nth-child(3):before {
    background: #56C2F3;
  }

  .timeline-events li:nth-child(3) h3 {
    color: #56C2F3;
  }
  .timeline-events li:nth-child(4):before {
    background: #DD3D01;
  }

  .timeline-events li:nth-child(4) h3 {
    color: #DD3D01;
  }
  .timeline-events li:nth-child(5):before {
    background: linear-gradient(270deg,rgba(74,139,143,0), rgba(74,139,143,1));
    border-radius: 6px 0 0 6px;
  }

  .timeline-events li:nth-child(5) h3 {
    color: #4A8B8F;
  }
  
  .timeline-event-years-0,
  .timeline-event-years-0:before {
    width: 0;
  } 
  .timeline-event-years-1,
  .timeline-event-years-1:before {
    width: 100px;
  }
  .timeline-event-years-2,
  .timeline-event-years-2:before {
    width: 200px;
  }
  .timeline-event-years-3,
  .timeline-event-years-3:before {
    width: 300px;
  }
  .timeline-event-years-4,
  .timeline-event-years-4:before {
    width: 400px;
  }
  .timeline-event-years-5,
  .timeline-event-years-5:before {
    width: 500px;
  }
  .timeline-event-years-6,
  .timeline-event-years-6:before {
    width: 600px;
  }
  .timeline-event-years-7,
  .timeline-event-years-7:before {
    width: 700px;
  }
  .timeline-event-years-8,
  .timeline-event-years-8:before {
    width: 800px;
  }
  

  .timeline-event-years-0-5,
  .timeline-event-years-0-5:before {
    width: 50px;
  }
  .timeline-event-years-1-5,
  .timeline-event-years-1-5:before {
    width: 150px;
  }
  .timeline-event-years-2-5,
  .timeline-event-years-2-5:before {
    width: 250px;
  }
  .timeline-event-years-3-5,
  .timeline-event-years-3-5:before {
    width: 350px;
  }
  .timeline-event-years-4-5,
  .timeline-event-years-4-5:before {
    width: 450px;
  }
  .timeline-event-years-5-5,
  .timeline-event-years-5-5:before {
    width: 550px;
  }
  .timeline-event-years-6-5,
  .timeline-event-years-6-5:before {
    //width: 650px;
    width: 350px;
  }
  .timeline-event-years-7-5,
  .timeline-event-years-7-5:before {
    width: 750px;
  }
  .timeline-event-years-8-5,
  .timeline-event-years-8-5:before {
    width: 850px;
  }

  .timeline-event-legend {
    position: relative;
  }

  .timeline-event-legend span {
    position: absolute;
    bottom: -150px;
    left: 850px;
  }

  .timeline-event-legend h2,
  .timeline-event-legend h3,
  .timeline-event-legend h4 {
    display: inline;
    margin-right: 10px;
  }

  .timeline-event-legend i {
    position: absolute;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-bottom-color: #fff;
  }

  .timeline-event-legend i:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-top-color: #fff;
  }

  .timeline-event-legend > i {
    bottom: -32px;
    right: -12px;
  }

  .timeline-event-legend > i:after {
    left: -4px;
    bottom: -12px;
  }

  .timeline-event-legend span > i {
    top: -1px;
    left: -14px;
  }

  .timeline-event-legend span > i:after {
    left: -4px;
    bottom: -12px;
  }
`

export default function Timeline(){
    return <Box id="Roadmap">
        <MainBox  className="wow animate__animated animate__bounceInLeft" data-wow-offset="600">
            <IntroBox>
                <div className="tips">
                    Roadmap
                </div>
            </IntroBox>
            <LineBox>
                <ul className="timeline-events">
                    <li className="timeline-event-years-6-5 timeline-event-legend">
		<span>
			<i></i>
			<h2>Start</h2>
			<h3>AAA</h3>
			<h4>Visual</h4>
		</span>
                        <i></i>
                    </li>
                    <li className="timeline-event-years-2">
                        <h2>2023 Q1</h2>
                        <h3>111</h3>
                        <h4> Designer</h4>
                    </li>
                    <li className="timeline-event-years-2">
                        <h2>2023 Q2 - Q3</h2>
                        <h3>222</h3>
                        <h4>Creative</h4>
                    </li>
                    <li className="timeline-event-years-3">
                        <h2>2023 Q2 - Q3</h2>
                        <h3>333</h3>
                        <h4>Creative</h4>
                    </li>
                    <li className="timeline-event-years-7">
                        <h2>2023 Q2 - Q3</h2>
                        <h3>444</h3>
                        <h4>Interactive</h4>
                    </li>
                </ul>
                <ul className="timelines-years">
                    <li><span>2023 Q1</span></li>
                    <li><span>2023 Q2</span></li>
                    <li><span>2023 Q3</span></li>
                    <li><span>2023 Q4</span></li>
                    <li><span>2024 Q1</span></li>
                    <li><span>2024 Q2</span></li>
                    <li><span>2024 Q3</span></li>
                    <li><span>2024 Q4</span></li>
                    <li><span>2025 Q1</span></li>
                    <li><span>2025 Q2</span></li>
                </ul>

            </LineBox>
        </MainBox>
    </Box>
}