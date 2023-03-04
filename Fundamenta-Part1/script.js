// // let js = "amazing";
// // if (js === 'amazing') alert("JS is fun");
// // console.log(23 + 13 + 2 - 10);


// // const p1='mark'
// // let w1=78;
// // let h1=1.69
// // let bmi1=w1/(h1*h1)
// // console.log(bmi1)
// // const p2="John"
// // let w2=92
// // let h2=1.95
// // let bmi2=w2/(h2*h2)
// // console.log(bmi2)

// // let markHigherBMI=bmi1>bmi2
// // console.log(markHigherBMI);

// // const markmass=95
// // const markheight=1.88
// // const johnmass=85
// // const johnheight=1.76
// // const markbmi=markmass/(markheight**2)
// // const johnbmi=johnmass/(johnheight**2)
// // console.log(markbmi,johnbmi)
// // const higherbmi=johnbmi>markbmi
// // console.log(higherbmi);

// //  const fname='Madhuri'
// //  const lname='Sharma'
// //  const bYear=1999
// //  const cYear=2023;
// // //  const ans=("I am" +" "+fname+" "+lname+ " "+"and" +" "+(cYear-bYear)+" "+ "old" );
// // const ans=(`I am ${fname} ${lname} and ${(cYear-bYear)} old`);
// //  console.log(ans);
// //  let arr=[3,1,4,5,0,9,6,1,2,]//find second largest number

// //  console.log('String with \n\
// //  multiple\n\
// //  lines');

// //  console.log(`String with
// //  multiple
// //  lines`);

// //  const age=15
// // //  const isOldEnough=age>=18;
// //  if(age>=18){
// //      console.log("Abc can drive🚗")
// //  }
// //  else{
// //      const yearsLeft=18-age;
// //      console.log(`Abc is too young.wait  another ${yearsLeft} years`);
// //  }


// // const birthYear = 1999;
// // let century;
// // if (birthYear <= 2000) {
// //     century = 20
// // }
// // else {
// //     century = 21;
// // }
// // console.log(century);


// //   Challenge2

// // const p1='mark'
// // let w1=95;
// // let h1=1.88
// // // let w1=78;
// // // let h1=1.69
// // let bmi1=w1/(h1*h1)
// // console.log(bmi1)
// // const p2="John"
// // // let w2=92
// // // let h2=1.95
// // let w2=85
// // let h2=1.76
// // let bmi2=w2/(h2*h2)
// // console.log(bmi2)
// // if(bmi1>bmi2){
// //     // console.log("Mark is greater than John");
// //     console.log(`${p1}'s  (${bmi1}) is higher than ${p2} (${bmi2})`);
// // }
// // else{
// //     // console.og("John is greater than Mark");
// //     console.log(`${p2}'s (${bmi2}) is higher than ${p1} (${bmi1})`);

// // }




// // //Type of Conversion And Coercion
// // Type Conversion:Manually converts
// // Type Coercion:implicitly converts

// //Js can convert to number,string,boolean,but we cannot convert to null,undefined

// //Type of Conversion And Coercion
// const inputYear = '1991'
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);
// //Convert string to Number
// console.log(Number(inputYear) + 18);
// console.log(Number("MAdhuri"));
// console.log(String(23), 23);
// console.log(typeof NaN)

// //Type coercion:When ever an operator dealing with two values which have different types

// console.log("I am" + " " + 23 + " " + 'years old');
// console.log("23" - "10" - 3);//13
// console.log("23" + "10" + 3);//23103
// console.log("23" * "2");
// console.log("23" / 2);

// //Guess the output
// let n = '1' + 1//'11'
// n = n - 1;//'11'-1=10
// console.log(n);
// console.log(2 + 3 + 4 + '5')//95
// console.log('10' - '4' - '3' - 2 + '5');

// //Truthy and falsy values
// // Falsy values are not exactly false that will become false when we try to convert boolean
// //5 falsy values=>0,'',undefined,null,NaN

// //Truthy value-value which be converted true

// //Conversion to boolean is always implicit,not explicit.
// //JS Coercion happens in two scenarios
// //1.Logical operator and 2.logical context in a condition if/else statement

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("MAdhuri"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//     console.log("Dont spend money");
// }
// else {
//     console.log("You get a job");
// }

// let test = 0;
// if (test) {
//     console.log("Yay! Test is defined");
// }
// else {
//     console.log("Test is not defined");
// }


// const p1='mark'
// let w1=78;
// let h1=1.69
// let bmi1=w1/(h1*h1)
// console.log(bmi1)
// const p2="John"
// let w2=92
// let h2=1.95
// let bmi2=w2/(h2*h2)
// console.log(bmi2)

// let markHigherBMI=bmi1>bmi2
// console.log(markHigherBMI);

// const markmass=95
// const markheight=1.88
// const johnmass=85
// const johnheight=1.76
// const markbmi=markmass/(markheight**2)
// const johnbmi=johnmass/(johnheight**2)
// console.log(markbmi,johnbmi)
// const higherbmi=johnbmi>markbmi
// console.log(higherbmi);

//  const fname='Madhuri'
//  const lname='Sharma'
//  const bYear=1999
//  const cYear=2023;
// //  const ans=("I am" +" "+fname+" "+lname+ " "+"and" +" "+(cYear-bYear)+" "+ "old" );
// const ans=(`I am ${fname} ${lname} and ${(cYear-bYear)} old`);
//  console.log(ans);
//  let arr=[3,1,4,5,0,9,6,1,2,]//find second largest number

//  console.log('String with \n\
//  multiple\n\
//  lines');

//  console.log(`String with
//  multiple
//  lines`);

//  const age=15
// //  const isOldEnough=age>=18;
//  if(age>=18){
//      console.log("Abc can drive🚗")
//  }
//  else{
//      const yearsLeft=18-age;
//      console.log(`Abc is too young.wait  another ${yearsLeft} years`);
//  }

//  let birthYear=2012;
//  let century;
//  if(birthYear<=2000){
//      century=20;
//  }
//  else{
//      century=21;
//  }
//  console.log(century);

// //   Challenge2

// const p1='mark'
// let w1=95;
// let h1=1.88
// // let w1=78;
// // let h1=1.69
// let bmi1=w1/(h1*h1)
// console.log(bmi1)
// const p2="John"
// // let w2=92
// // let h2=1.95
// let w2=85
// let h2=1.76
// let bmi2=w2/(h2*h2)
// console.log(bmi2)
// if(bmi1>bmi2){
//     // console.log("Mark is greater than John");
//     console.log(`${p1}'s  (${bmi1}) is higher than ${p2} (${bmi2})`);
// }
// else{
//     // console.og("John is greater than Mark");
//     console.log(`${p2}'s (${bmi2}) is higher than ${p1} (${bmi1})`);

// }

//Type of Conversion And Coercion
// const inputYear='1991'
// console.log(Number(inputYear),inputYear);
// console.log(inputYear+18);
// //Convert string to Number
// console.log(Number(inputYear)+18);
// console.log(Number("MAdhuri"));
// console.log(String(23),23);
// console.log(typeof NaN)

//Type coercion:When ever an operator dealing with two values which have different types

// console.log("I am" +" "+23+" "+'years old'); 
// console.log("23"-"10"-3);//13
// console.log("23"+"10"+3);//23103
// console.log("23" *"2");
// console.log("23"/2);

// //Guess the output
// let n='1'+1//'11'
// n=n-1;//'11'-1=10
// console.log(n);
// console.log(2+3+4+'5')//95
// console.log('10'-'4'-'3'-2+'5');

//Truthy and falsy values
// Falsy values are not exactly false that will become false when we try to convert boolean
//5 falsy values=>0,'',undefined,null,NaN

//Truthy value-value which be converted true

//Conversion to boolean is always implicit,not explicit.
//JS Coercion happens in two scenarios
//1.Logical operator and 2.logical context in a condition if/else statement

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("MAdhuri"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money=0;
// if(money){
//     console.log("Dont spend money");
// }
// else{
//     console.log("You get a job");
// }

// let  test=0;
// if(test){
//     console.log("Yay! Test is defined");
// }
// else{
//     console.log("Test is not defined");


// }


//== vs  ===

const age = 18;
if (age === 18)
    console.log('You just became an adult');


//coding challenge #3

// let dolphins = ((96 + 108 + 89)/ 3)
// let koalas = ((88+ 91 + 110)/ 3)
// console.log(dolphins, koalas);
// if(dolphins>koalas){
//     console.log("Dolphins wins");
// }
// else if(koalas>dolphins){
//     console.log("Koalas wins")
// }
// else if(dolphins === koalas)
// {
//     console.log("Both wins")
// }

let dolphins = ((97 + 112 + 81) / 3)
let koalas = ((109 + 95 + 86) / 3)
console.log(dolphins, koalas);
if (dolphins > koalas && dolphins >= 100) {
    console.log("Dolphins wins");
}
else if (koalas > dolphins && koalas >= 100) {
    console.log("Koalas wins")
}
else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
    console.log("Both wins")
}

//conditional operator 
let bill = 275;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : 0.2;
console.log(`The bill value is ${bill} ,tip value is ${tip} and total value is ${bill + tip}`);

//ES5-fully  supported in all the browser (down to IE9 from 2011) and can use today also;
//ES6/(2015)+=Well supported in all the modren browser.No support in loder browser.Can use most features in production with transpiling and polyfilling

//ES7....ES20.
// ES6 compatibility table

//Javascript is no forward compatibility


