//class in javascript

function Person( name,age ){
    this.name = name;
    this.age = age;
}

var p1 = new Person('Rubel',32);
var p2 = new Person('Rasel',29);
var p3 = new Person('Sad',9);
console.log(p1.name);

var p = [p1,p2,p3]

p.forEach(function(person){
    console.log(person.name)
});


function Vip(name,address,seat){
    this.name = name;
    this.address = address;
    this.seat = seat;
}

var vip1 = new Vip('Sm. Kabir','Dhaka',22);
console.log(vip1.constructor)