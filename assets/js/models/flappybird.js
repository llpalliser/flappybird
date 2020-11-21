class FlappyBird {

    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.jumpImpulse = 10;
        this.vy = 3;

        this.sprite = new Image();
        this.sprite.src = 'assets/img/bird.png';
        // sprite setup
        this.sprite.isReady = false;
        this.sprite.horizontalFrames = 3;
        this.sprite.verticalFrames = 1;
        this.sprite.horizontalFrameIndex = 0;
        this.sprite.verticalFrameIndex = 0;
        this.sprite.drawCount = 0;
        this.sprite.onload = () => {
            this.sprite.isReady = true;
            this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames);
            this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames);
            this.width = this.sprite.frameWidth;
            this.height = this.sprite.frameHeight;
        }


        this.drawCount = 0;
        this.movements = {
            up: false,
            down: false
        }
    }

    onKeyEvent(event) {
        // iteration 2: configure frame animation

        const state = event.type === 'keyup';
        if (event.keyCode === KEY_UP) {
            this.movements.up = state;
        } else {
            this.movements.down;
        }
    }

    draw() {
        if (this.sprite.isReady) {
            // draw sprite
            this.ctx.drawImage(
                this.sprite,
                this.sprite.frameWidth * this.sprite.horizontalFrameIndex,
                this.sprite.frameHeight * this.sprite.verticalFrameIndex,
                this.sprite.frameWidth,
                this.sprite.frameHeight,
                this.x,
                this.y,
                this.width,
                this.height
            )
            this.drawCount++;
            // animate sprite
        }
    }

    animate() {
        // iteration 2: configure frame animation
        this.animateFrame();
    }

    animateFrame(initVerticalFrame, initHorizontalFrame, segments, frequency) {
        // iteration 2: animate the sprite
    }

    move() {
        // iteration 2: move the y
        if (this.movements.up) {
            this.y -= this.jumpImpulse;
        }
    }

    collides(element) {
        // iteration 3: check collisions (true|false)
    }

}