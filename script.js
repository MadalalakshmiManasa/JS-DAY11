//array
var arrs=[1,2,3,4,5,{id:1,age:21},[1,2,3]];

for(elem of arrs){
    console.log(elem);
    
}

var str = "vamsi";
var reverses = "";
for(i=str.length-1;i>=0;i--){
    reverses=reverses+str[i]
}
console.log(reverses);

var string = "Manasa";
var reversedStr = "";
for(i=string.length-1;i>=0;i--){
    reversedStr=reversedStr+string[i]
}
console.log(reversedStr);

let arr2 = [1, 2, 3, 4, 5, {id: 1, age: 25}, [1, 2, 3]];
let age = arr2.find(item => typeof item === 'object' && item.age !== undefined).age;
console.log(age);



var arr = [1, 2, 3, 4, 5, {id: 1, age: 25}, [1, 2, 3],"Manasa"];
var reverse = arr.reverse();
console.log(reverse);



var str = "vamsi";
var reversedStr = str.split('').reverse().join('');
console.log(reversedStr);


var anotherStr = "Manasa";
var AnotherStr = anotherStr.split('').reverse().join('');
console.log(AnotherStr);