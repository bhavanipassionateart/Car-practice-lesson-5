# Car-practice-lesson-5

## Car program using javaScript
### creating Constructor method
* Intiate values with consturctor
* Generate getter method to return the value of variable
* Generate setter method to set the value of variables
* Create object to instantiate class
* Set the values using setter method and get the values using getter method
* print the values using console.

```javascript
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

 ```