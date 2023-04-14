/*class car{
    constructor(Brand,year,color,maxspeed){
        this. name= Brand;
        
        this.year = year;
        this.color = color;
        this.maxspeed = maxspeed;
        
 }
 
  Speed(maxspeed) {
    console.log(`The car maximum speed is ` + this.maxspeed);
}
 display(){
   console.log(`The car details` ,+this.Brand, +this.year,+this.color,+this.maxspeed);
}
}

 let objcar = new car('Tesla','2021','red','262(k/h)');
 objcar.Speed();
 objcar.display();
 
 console.log(`This is a model of car:`,+ " ", objcar.Brand, objcar.year, objcar.color,objcar.maxspeed); */

 class car{
constructor(){
    let Brand,year,color,maxspeed;
}
getBrand (){
    return this.Brand;
}
setBrand(Brand){
this.Brand= Brand;
}
getyear(){
    return this.year;
}
setyear(year){
    this.year=year;
}
getcolor(){
    return this.color;
}
setcolor(color){
    this.color= color;
}
getmaxspeed(){
    return this.maxspeed;
}
setmaxspeed(maxspeed){
    this.maxspeed=maxspeed;
}


 }
 let objcar= new car();
 objcar.setBrand("Tesla");
 objcar.setcolor("red");
 objcar.setyear("2021");
 objcar.setmaxspeed("262k/h");
 console.log(`The car details are`, objcar.getBrand(),objcar.getyear(),objcar.getcolor(),objcar.getmaxspeed());



