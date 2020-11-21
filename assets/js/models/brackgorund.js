class Background {

  constructor(ctx) {
    this.ctx = ctx;
    // positions
    this.x = 0;
    this.y = 0;
    this.h = this.ctx.canvas.height;
    this.w = this.ctx.canvas.width;
    this.vx = -2;



    this.bgImg = new Image();
    this.bgImg.src = 'assets/img/game-bg.png';
    this.bgImg.isReady = false;

    this.bgImg.onload = () => {
    
      this.bgImg.isReady = true;
    
    }


    // load and set ready

    
    this.footerImg = new Image();
    this.footerImg.src = 'assets/img/game-bg-footer.png';
    // load and set ready
    this.footerImg.isReady = false;
    this.footerImg.onload = () => {
      this.footerImg.isReady = true;
    }
    
  }




  draw() {
    if (this.bgImg.isReady && this.footerImg.isReady) {
      
      this.ctx.drawImage(
        this.bgImg,
        this.x,
        this.y,
        this.w,
        this.h
      );

      this.ctx.drawImage(
        this.bgImg,
        this.x + this.w,
        this.y,
        this.w,
        this.h
      );

      this.ctx.drawImage(
        this.footerImg,
        this.x,
        this.y,
        this.w,
        this.h
      );

      this.ctx.drawImage(
        this.footerImg,
        this.x + this.w,
        this.y,
        this.w,
        this.h
      );

      

      
    }
  }

  move() {
    // move the ground

    // check bounds
  }
}
