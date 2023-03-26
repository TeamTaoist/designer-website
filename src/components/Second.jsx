import styled from "styled-components";
import { App } from "../utils/initAnimate";
import * as THREE from "three";
import {useEffect} from "react";

const Box = styled.div`
    width: 100vw;
  height: 100vh;
`
export default function Second(){
    const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    const distortion_uniforms = {
        uDistortionX: new THREE.Uniform(new THREE.Vector2(flag?20:80, 3)),
        uDistortionY: new THREE.Uniform(new THREE.Vector2(-40, 2.5))
    };

    const distortion_vertex = `
#define PI 3.14159265358979
  uniform vec2 uDistortionX;
  uniform vec2 uDistortionY;

    float nsin(float val){
    return sin(val) * 0.5+0.5;
    }
  vec3 getDistortion(float progress){
        progress = clamp(progress, 0.,1.);
        float xAmp = uDistortionX.r;
        float xFreq = uDistortionX.g;
        float yAmp = uDistortionY.r;
        float yFreq = uDistortionY.g;
        return vec3( 
            xAmp * nsin(progress* PI * xFreq   - PI / 2. ) ,
            yAmp * nsin(progress * PI *yFreq - PI / 2.  ) ,
            0.
        );
    }
`;

    const myCustomDistortion = {
        uniforms: distortion_uniforms,
        getDistortion: distortion_vertex
    };

    const options = {
        length: 400,
        width: 20,
        roadWidth: 10,
        islandWidth: 2,
        nPairs: 50,
        roadSections: 3,
        distortion: myCustomDistortion
    };

    useEffect(()=>{
        const container = document.getElementById("appBox");
        const myApp = new App(container, options);
        myApp.loadAssets().then(myApp.init);

        if (module && module.hot) {
            // module.hot.accept((a, b) => {
            //   // For some reason having this function here makes dat gui work correctly
            //   // when using hot module replacement
            // });
            module.hot.dispose(() => {
                if (myApp) myApp.dispose();
            });
        }
    },[])
    return <Box>
        <div id="appBox" />
    </Box>
}