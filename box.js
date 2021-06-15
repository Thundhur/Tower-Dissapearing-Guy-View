class box {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.angle = angle;
        this.image = loadImage("block.png");
        this.a = 255;

      }
    
      display(){

        var angle = this.body.angle;
        if(this.body.speed<3){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
  
          image(this.image, 0, 0, this.width, this.height);
          pop();
        } else {
          push();
          if(this.a === 0){
          secretScore = secretScore + 1;
          superSecretScore = superSecretScore + 1;

          }
          this.a = this.a - 5;
          tint(255, this.a); 
          image(this.image, this.body.position.x, this.body.position.y,40,40);
          World.remove(world,this.body);
          
          pop();
      }}
    }
    
  
    