// // let x: number = 1; //Initializing the x variable to be a integer
// // console.log(x);

// // let y: string = "Hi there";
// // console.log(y);

// // // A function that greets a user given their first name

// // function greet(firstName: string) {
// //   console.log("Hello" + firstName);
// // }

// // greet("Harshit");

// // //A function that calculate the sum of two

// // function sum(a: number, b: number): number {
// //   return a + b;
// // }

// // console.log(sum(10, 15));

// // //Create a function that takes another function as input, and runs it after 1 second.

// // function delaycall(fn: () => void) {
// //   setTimeout(fn, 1000);
// // }

// // delaycall(function () {
// //   console.log("hi there");
// // });

// // //Create a function islegal that returns true or false if a user is above 18.It takes a user as an input.

// // interface User {
// //   firstName: string;
// //   lastName: string;
// //   age: number;
// //   email: string;
// // }

// // function isLegal(user: User) {
// //   if (user.age > 18) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // interface Employee {
// //     name : string,
// //     department : string
// // }

// // interface Manager {
// //     name : string,
// //     age : number
// // }

// // type TeamLead = Employee & Manager

// // interface People{
// //   name: string,
// //   age : number,
// //   greet: () => string
// // }

// // const person : People = {
// //   name: "Harshit",
// //   age: 18,
// //   greet:()=>{
// //     return "hi"
// //   }
// // }

// // let greeting = person.greet()
// // console.log(greeting)

// // //Class that implements interface

// // interface User{
// //   name : string;
// //   age : number;
// //   isLegal(): boolean;
// // }

// // class Manager implements User{
// //     name : string;
// //     age: number;

// //     constructor(name: string, age : number){
// //       this.age = age;
// //       this.name = name;
// //     }
// //     isLegal(): boolean {
// //         return this.age > 18
// //     }
// // }

// // const m = new Manager("Harshit",21);
// // console.log(m.isLegal())

// // Interfaces vs types
// //Create two types called User and Admin,
// // Create a function that takes either a user or an Admin as an Input, and returns a string saying "Welcome ,[name]"

// interface Admin {
//   name: string;
//   permissions: string;
// }

// interface User {
//   name: string;
//   lastname : string;
//   age: number;
// }

// type UserOrAdmin = User | Admin;
// function greet(user: UserOrAdmin) {
//   console.log("Welcome" + user.name);
// }


// // Given Interface user try to create an array of users as inputs and return the legal users(age > 18)
// function filterUser( user : User[]){
//   return user.filter((user) => user.age > 18);
// }
// const filteredUser = filterUser([{
//   name: "Harshit",
//   lastname: "singh",
//   age: 21
// }])

interface User{
    id : string;
    name : string;
    age : string;
    email : string;
    password : string;
}

type UpdateProps = Pick <User, "name" | "age" | "email">

const displayUserProfile = (user : UpdateProps) => {
    console.log(`Name: ${user.name}, Email: ${user.email}, Age : ${user.age}`);
}

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional){
  // hit the database tp update the user
}
updateUser({});


//ReadOnly
interface Config{
  readonly endpoint : string;
  readonly apikey : string;
}

const config : Readonly<Config> = {
  endpoint : 'https://api.example.com',
  apikey : "abcde123456"
}

// config.apiKey = 'newKey'; // Error: Cannot assign to 'apikey' because it is a read-only Property