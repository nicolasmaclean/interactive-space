function Drawing() {
    this.points = [];
    this.path = new Path2D();

    this.draw = () => {
        c.strokeStyle = "#fff";
        c.fillStyle = "#fff";
        this.path = new Path2D();

        if(this.points.length > 1){
            this.path.moveTo(this.points[0].x, this.points[0].y)
            for(let i = 1; i < this.points.length; i++){
                this.path.lineTo(this.points[i].x, this.points[i].y)
            }
            c.fill(this.path);
        } else if(this.points.length === 1){
            this.path.arc(this.points[0].x, this.points[0].y, 8, 0, Math.PI*2, false);
            c.stroke(this.path);
        }
    }

    this.addToPath = (point) => {
        this.points.push(point);
    }

    this.inPath = (pos) => {
        this.path = new Path2D();

        if(this.points.length > 1){
            //constructs the path object
            this.path.moveTo(this.points[0].x, this.points[0].y)
            for(let i = 1; i < this.points.length; i++){
                this.path.lineTo(this.points[i].x, this.points[i].y)
            }

            //checks if in path
            return c.isPointInPath(this.path, pos.x, pos.y);
        } else if(this.points.length === 1){
            this.path.arc(this.points[0].x, this.points[0].y, 2, 0, Math.PI*2, false);
            return c.isPointInPath(this.path, pos.x, pos.y);
        }

        return false;
    }
}