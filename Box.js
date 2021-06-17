class Box
{
	constructor(x,y,w,h)
	{
		var options={
			restitution:0,
			friction:0.3,
			density:0.5
			}
		this.w=w;
        this.h=h
		this.image=loadImage("images/stone.png");
		this.body=Bodies.rectangle(x, y, w,h, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			rectMode(CENTER)
			translate(pos.x, pos.y);
			rect(0,0,this.w, this.h)
			pop()
			
	}

}