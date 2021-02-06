class Bob {
constructor(x,y,radius){

    var option ={
       isStatic: false,
       restitution: 0.8,
        friction: 1.0,
        density: 1.2

    }
    this.x=x;
    this.y=y;
    this.radius= radius
    this.body= Bodies.circle(x,y,radius,option)
   
   
    World.add(world,this.body);
}

display(){
var pos= this.body.position
push()

strokeWeight(4);
stroke("yellow");
fill(3000);
translate (pos.x,pos.y);
ellipseMode(RADIUS);
ellipse(0,0,this.body.radius,this.radius);
pop()
}


}