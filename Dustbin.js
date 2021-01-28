class Dustbin{
    constructor(x,y,width,height){
        var options={
           isStatic:true
        }

        this.height=height;
        this.width=width;

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);


    }

      display(){
          var pos=this.body.position
          push();
          translate(pos.x,pos.y)
          rectMode(CENTER)
          rect(0,0,this.width,this.height)
          strokeWeight(4)
          fill("purple")
          pop()
      }




}