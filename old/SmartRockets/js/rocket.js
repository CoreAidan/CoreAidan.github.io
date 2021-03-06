function Rocket(dna) {
    this.pos = createVector(width/2, height-10);
    this.vel = createVector();
    this.acc = createVector();
    this.completed = false;
    this.crashed = false;

    //this.img = loadImage("assets/rocket.png");

    if(dna){
        this.dna = dna;
    }else{
        this.dna = new DNA();
    }
    
    this.fitness = 0;

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.calcFitness = function(){
        var d = dist(this.pos.x, this.pos.y, target.x, target.y);
        this.fitness = map(d, 0, width, width, 0);

        if(this.completed){
            this.fitness *= 10;
        }

        if(this.crashed){
            this.fitness /= 6;
        }
    }

    this.update = function() {
        var d = dist(this.pos.x, this.pos.y, target.x, target.y);

        if(d < 10 ){
            this.completed = true;
            this.pos = target.copy();
        }

        // Rocket hit the barrier
        if (this.pos.x > rx && this.pos.x < rx + rw && this.pos.y > ry && this.pos.y < ry + rh) {
            this.crashed = true;
        }
        // Rocket has hit left or right of window
        if (this.pos.x > width || this.pos.x < 0) {
            this.crashed = true;
        }
        // Rocket has hit top or bottom of window
        if (this.pos.y > height || this.pos.y < 0) {
            this.crashed = true;
        }



        this.applyForce(this.dna.genes[count]);
        if(!this.completed && !this.crashed){
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
        
    }

    this.show = function() {
        push();
        noStroke();
        fill(255, 0, 0, 150);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 50, 10);
        //image(this.img, 0, 25, 50, 100);
        pop();

    }
}