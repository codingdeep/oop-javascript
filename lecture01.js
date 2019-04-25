
//introduction of object

var obj = {}; //way of declare objec

var obj1 = new Object; //second way of declare objec

console.log(obj);
console.log(obj1);

//example 
var person1 = {
    name: 'Rubel Ahmmed',
    age: 32,
    vill: 'Nayagola',
    primary: 'Nayagola Boy\'s High School',
    print: function(){
        console.log(this.age,this.vill);//this means property of that object
    }
}

console.log(person1);
console.log(person1.name);//use '.' notation to print value of specific property

//or

console.log(person1['age']); //we can use square bracket to print property value 

person1.print();

//we can extend the object from the outside of the object

person1.father = 'Late Mokbul Hossain';

console.log(person1);


for( key in person1 ){
    console.log(person1[key])
}