
///deep copy

// const user = {
//   name:"khushi",
//   address:{city:"delhi"},
//   hobby:["reading","dancing"]
// };
// const user1 = structuredClone(user);
// user1.address.city = "Mumbai";
// console.log(user.address.city); //delhi
// console.log(user1.address.city); // mumbai

// const user ={
//     name:"khushi",
//     age:20,
//     city:"muz",
//     br:"cse",
// };
// const deepuser =structuredClone(user);
// deepuser.age = 21;
// console.log(user.age);

// const user =
// {
//     name:"khushi",
//     age:20,
//     address:{
//         city:"muz",
//         state:"bihar",
//     }
// };

// const deepuser = structuredClone(user);
// deepuser.address.city = "Mumbai";
// console.log(user.address.state);

//shallow copy
// const user =
// {
//     name:"khushi",
//     age:20,
//     address:{
//         city:"muz",
//         state:"bihar",
//     }
// };
//  const user1 = {...user};
//  user1.address.city ="patna";
//  console.log(user.address.city);
//  console.log(user1.address.city);

// const user = { name: "Khushi", age: 20 };
// const copiedUser = { ...user,br:"cse" };

// console.log(copiedUser); // { name: "Khushi", age: 20 }
// console.log(user);

// const arr1 = [1,2,3];
// const arr2 = [4,5,...arr1];
// console.log(arr1);
// console.log(arr2);

// const ob1 = {a:1,b:2};
// const ob2 ={c:3,d:4,e:5};

// const merged = {...ob1,...ob2};
// console.log(merged);

// const num = [1,2,3];
// console.log(Math.max(...num));

// // Math.abs(-99);
// console.log(Math.abs(-99));
// console.log(Math.abs(-85));

// console.log(Math.ceil(2.1));
// console.log(Math.ceil(9.1))

// console.log(Math.trunc(8.8)); //8
// console.log(Math.pow(3,3))
// console.log(Math.sqrt(4))

// console.log(Math.max(9,5,4,2,7));
// console.log(Math.min(9,5,4,2,7));

// console.log(Math.round(4.6)) //5
// console.log(Math.round(4.4))//4

// console.log(Math.floor(3.0)) //3
// // console.log(Math.floor(9.9)) //9

// let x =121;
// let og =x;
// let re =0;
// while (x>0){
//     let ld =x %10;
//     re =re *10 + ld;
//     x =Math.floor(x/10);
// }
//  console.log(re);
//  if (og==re){
//     console.log("palimdrome");
//  }else {
//     console.log("not palimdrome");
//  }


// const n = 8;
// for (let i =n;i>=1;i--){
//     // console.log(i);
//     let line ="";
//     for (let j=1;j<=n-i;j++){
//         line +=" ";
//     }
//     for (let k=1;k<=i;k++){
//         line +="* ";
//     }
//     console.log(line);
//     }

// let n = 5;
// for (let i = n; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

// let n = 5;
// for (let i =1;i<=n;i++){
//     let line ="";
//     for (let j=1;j<=i;j++){
//         line += "*";
//     }
//     console.log(line);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= n - i; j++) {
//     line += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     line += "*";
//   }
//   console.log(line);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= n - i; j++) {
//     line += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     line += "*";
//   }
//   console.log(line);
// }


// let n = 5;
// for (let i = n; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

// let n = 5;
// for (let i = n; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= n - i; j++) {
//     line += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     line += "*";
//   }
//   console.log(line);
// }


// let n = 5; // half height
// // Top half
// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= n - i; j++) line += " ";
//   for (let k = 1; k <= 2 * i - 1; k++) line += "*";
//   console.log(line);
// }
// // Bottom half
// for (let i = n - 1; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= n - i; j++) line += " ";
//   for (let k = 1; k <= 2 * i - 1; k++) line += "*";
//   console.log(line);
// }

// function greet(name) {
//   console.log("Hello, " + name);
// }
// greet("Khushi");  // Output: Hello, Khushi


// function add(a,b){
//     return a+b;
// }
// console.log(add(9,9));

// const  multiply =(a,b)=>a*b;
// console.log(multiply(5,5));

// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[0]); // apple
// console.log(fruits[2]);

// let person = {
//   name: "Khushi",
//   age: 20,
//   city: "Muzaffarpur"
// };

// console.log(person.name);      // Khushi
// console.log(person.city); 
// person.age = 21;               // Update
// person.gender = "female";  
// console.log  (person.age);



//test 


// const user ={
//     name:"khushi",
//     age:20,
//     address:{
//         city:"muz",
//         state:"bihar",

//     }
// };
// const user1 =structuredClone(user);
// user1.address.city="patna";
// console.log(user.address.city);
// console.log(user1.address.city);

// const shallowcopy = {...user};
// shallowcopy.address.state="patna";
// // console.log(user.address.city);
// console.log(shallowcopy.address.state);

// let n =5;
// for (let i=n;i>=1;i--){
//     let line = "";
//     for (let j=1;j<=i;j++){
//        line+="*"; 
//     }
//     console.log(line);
// }


// const arr = [10, 45, 2, 67, 89, 23];
// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// console.log("Largest element is:", largest);

// const arr = [-10, -45, -2, -67, -89, -23];
// let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {d
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log("smallest element is:", smallest);

