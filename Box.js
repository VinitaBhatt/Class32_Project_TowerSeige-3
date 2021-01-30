class Box{
    constructor(x,y,color){
        var options ={
            isStatic : false,
            restitution:0.5,
            friction : 0.5

        }

        this.body = Bodies.rectangle(x,y,40,40,options);
        this.width=40;
        this.height=40;
        this.color=color;
        this.visibility = 255;
        World.add(world,this.body);
    }

    display(){
        if(this.body.speed <3){
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(this.body.angle);
            rectMode(CENTER);
            fill(this.color);
            rect(0,0,this.width,this.height);
            pop();
        }else{
            push();   
            this.visibility -=5;   
            pop();
            World.remove(world,this.body);
        }
    }

    score(){
        if(this.visibility < 0 && this.visibility > -100){
            score++;
        }
    }
}