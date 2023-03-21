import {useEffect} from "react";

export default function Banner(){
    useEffect(()=>{
        initAnimate()
    },[])

    const initAnimate = () =>{
        let canvas = document.querySelector('.stage'),
            // inputField = document.querySelector('.userCharacter'),
            width = canvas.width,
            height = canvas.height,
            linearRows = 30,
            gutter = 8,
            dotColour = '#ff0',
            repaintColour = 'rgba(0,0,0, 0.2)',
            matteLookup = [],
            maxSpeed = .1,
            maxSize = 8,
            systemSize = 1500,
            matteCharacter = '',
            running = false,
            ctx = canvas.getContext('2d');

        function createTextMatte(){
            // clear the screen
            ctx.clearRect(0, 0, width, height);
            /* Draw something to use as matte
            And make it red, as we use that pixel colour value */
            ctx.fillStyle = '#f00';
            ctx.font = 650 +'px Titillium Web';
            ctx.textAlign = 'center';
            ctx.fillText(matteCharacter, width * .5, height - 32);
            // Capture and store all alpha values to array
            gatherPixelData();
            // clear the matte
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);
            // start the animation
            if(!running){
                running = true;
                animate();
            }
        }
        function gatherPixelData(){
            matteLookup.length = 0;
            var imageData = ctx.getImageData(0, 0, width, height),
                pixelData = imageData.data;
            for (let loop = width * height, i = 0; i < loop * 4; i += 4){
                matteLookup.push((Math.round(pixelData[i])) / 255);
            }
        }

        let ParticleSystem = function(num){
            this.numParticles = num;
            this.allParticles = [];
            this.colour = dotColour;
            this.x = width * .5;
            this.y = height * .5;
            this.generate();
        }
        ParticleSystem.prototype.generate = function(){
            for(let i=0; i<this.numParticles; i++){
                let vo = {};
                vo.colour = this.colour;
                vo.radius = maxSize;
                vo.speed = Math.random() * maxSpeed * 2 - maxSpeed;
                // vo.parent = this;
                this.allParticles.push(new Particle(vo));
            }
        }
        ParticleSystem.prototype.update = function(){
            for(let i=0; i<this.allParticles.length; i++){
                this.allParticles[i].update();
            }
        }
        ParticleSystem.prototype.scatter = function(){
            for(let i=0; i<this.allParticles.length; i++){
                this.allParticles[i].setPosition();
            }
        }

        let Particle = function(vo){
            this.colour = vo.colour;
            this.locked = false;
            this.parent = vo.parent;
            this.radius = vo.radius;
            this.speed = vo.speed;
            this.setPosition();
        }
        Particle.prototype.setPosition = function(){
            this.x = Math.random() * width;
            this.y = Math.round(Math.random() * linearRows) * Math.round(((height - gutter) / linearRows)) + (gutter * .5);
            this.locked = (reportMatte(Math.round(this.x), Math.round(this.y)) === 0) ? false : true;
        }
        Particle.prototype.update = function(){
            // If outside matte, pick a new position, otherwise, just step
            if(reportMatte(Math.round(this.x), Math.round(this.y)) === 0){
                this.speed *= -1;
                this.setPosition();
                if(!this.locked){
                    this.setPosition();
                }
            }
            this.x += this.speed;
        }

        function reportMatte(x,y){
            let redValue = matteLookup[ (y * width) + x ];
            return redValue === undefined ? 0 : redValue ;
        }

        function update(){
            system.update();
        }
        function draw(){
            ctx.fillStyle = repaintColour;
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = system.colour;
            for(let i=0; i<system.numParticles; i++){
                let p = system.allParticles[i];
                ctx.fillRect(p.x, p.y, p.radius, p.radius);
            }
        }
        function animate(){
            update();
            draw();
            requestAnimationFrame(animate);
        }
        // setMatteCharacter();
        let system = new ParticleSystem(systemSize);

        function setupEvents(){
            matteCharacter = "♥";
            // setMatteCharacter();
            createTextMatte();
            system.scatter();
        }
        // function setMatteCharacter(){
        //     inputField.value = matteCharacter;
        // }
        document.fonts.ready.then(function () {
            // document.querySelector('.loadFont').style.display = 'none';
            setupEvents();
            createTextMatte();
        });
    }
    return <div>
        <canvas class="stage" width="500px" height="500px" />
    {/*<p class="loadFont">loading font...</p>*/}
    {/*<input class="userCharacter" type="text"></input>*/}
    </div>
}