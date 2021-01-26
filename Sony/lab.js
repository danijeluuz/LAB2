let sony;
let sonyComp = [];
let bubble;
let bubbles = [];
let status = 0;
console.log("stauts 0");

		function preload() {
			
			sony = loadImage('img/xperia.png');
			for (let i =0; i < 34; i++){
				sonyComp[i] = loadImage('img/Sony' + i + '.png');
			}
		}

		function setup(){
			createCanvas(windowWidth, windowHeight);
			let x = (width/2-60);
			let y = (height/2-110);
			for(let i = 0; i < 45; i++){
				let x = random(width);
				let y = random(height);
				let r = random(90, 210);
				let sonyComponents = random(sonyComp);
				let xperia = sony;
				let b = new Bubble(x, y, r, sonyComponents, xperia);
				bubbles.push(b);
			}
		}

		function mousePressed() {
			for(let i = 0; i < bubbles.length; i++){
				bubbles[i].clicked(mouseX, mouseY);
			}
			
			status = 1;
			console.log("status 1");
			
		}

		function draw(){
			background(mouseX/6);
			image(sony, (width/2-60) , (height/2-110));
			if(status == 1){
				console.log("status if");
				for(let i = 0; i < bubbles.length; i++){
					bubbles[i].move();
					bubbles[i].show();
					//status = 0;
				}
			}
			
		}

		class Bubble{
			constructor(x,y,r, img, img2){
				this.x = x;
				this.y = y;
				this.r = r;
				this.sonyComponents = img;
				this.xperia = img2;
			}

			clicked(px, py){
				if(px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r){
					translate(-60,-110);
					this.sonyComponents = random(sonyComp);
				}
			}

			move(){
				this.x = this.x + random(mouseX/400, -mouseX/400);
				this.y = this.y + random(-mouseY/400, mouseY/400);

			}
		

			show(){	
				image(this.sonyComponents, this.x, this.y);
				image(sony, (width/2-60) , (height/2-110));	
					
			}

		
	
		}

		function windowResized() {
			resizeCanvas(windowWidth, windowHeight);
		  }

