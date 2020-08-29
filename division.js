class Division{
    constructor(x,y,width){
        var options={
            isStatic:true
    }
this.body=Bodies.rectangle(x,y,width,200,options);
this.width=width;
this.height=200;
World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x,pos.y,this.width,this.height);
}
}