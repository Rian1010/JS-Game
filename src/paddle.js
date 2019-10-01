export {Paddle};

class Paddle {
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;

        this.width = 150;

        //Moves blue line up 20px from 800
        this.height = 20;


        this.maxSpeed = 7;
        this.speed = 0;


        this.position = {
            //Centers the blue square between 0 and 600
            //Due to the top-left ending up to be there, this.width / 2
            x: gameWidth / 2 - this.width /2,

            //Moves the blue line down 10px
            y: gameHeight - this.height - 10,
        }

    }


    moveLeft() {
        this.speed = -this.maxSpeed;
    }


    moveRight() {
        this.speed = this.maxSpeed;
    }


    draw(ctx) {
        ctx.fillStyle='0ff';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if(!deltaTime) return;


        this.position.x += this.speed;


        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth)
            this.position.x = this.gameWidth - this.width;
    }
}