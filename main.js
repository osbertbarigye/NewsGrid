// const Name = 'steve';
// const age =4;
// console.log(age===48 ? `${Name} is an adult`:`${Name} is a child`);
// // if(age>0 && age < 12){
//   console.log(`${Name} is a child`);
// }else if(age>12 && age<19){
//   console.log(`${Name} is a teenagaer`);
// }
// else{
//   console.log(`${Name} is an adult`);
// }
// const color ='purpple';

// switch(color){
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   case 'green':
//     console.log('color is green');
//     break;
//   default:
//     console.log('color is neither blue , red or green');
//     break;

// }
// let day;
// switch(new Date().getDay()){
//   case 0:
//     day ='Sunday';
//     break;
//   case 1:
//     day ='Monday';
//     break;
//   case 2:
//     day ='Tuesday';
//     break;
//   case 3:
//     day ='Wednesday';
//     break;
//   case 4:
//     day ='Thursday';
//     break;
//   case 5:
//     day ='Friday';
//     break;
//   case 6:
//     day ='Saturday';
//     break;
// }
// console.log(`Today is ${day}`);

//for loop
// for(let i=0; i<=10; i++){
//   console.log('Number'+' '+ i);
// }

//while loop
// let i =0;
// while(i<10){
//   console.log('Number'+' '+i);
//   i++;
// }

//Do while loop > it always runs atleast once no matter what !!

// let i=0;
// do{
//   console.log('Number'+' '+i);
//   i++;
// } 
// while(i<10);

//looping through an array
// const cars =['ford','chevy','toyota','mercedz'];
// for(let i = 0 ; i<cars.length; i++){
//   console.log(cars[i]);
// }

// we can also use a foreach loop to loop through an array>>(highly recommended)

// //foreach loop >> arrayname.foreach(function("singular name of arrayname>> i prefer this)) and then console.log
// const cars =['ford','chevy','toyota','mercedz'];
// cars.forEach(function(car){
//   console.log(car);
// });

// let i=0;
// while( i<=12){
//   console.log(i);
//   i=i+2;
// };
// for(let i=0; i<=12; i=i+2){
//   console.log(i);
// }
// let i =0;
// do{
//   console.log('number'+ i);
//   i=i+2;

// }while(i<=12);

// for(let i = 20; i>=20; i+=1){
//   if(i%7==0){
//     console.log(i);
//     break;
//   }
// }
// let i=20;
// while(i>=20){
//   if(i%7==0){
//     console.log(i);
//     i+=1;
//     break;
//   }
// }

// let i =20;
// do{
//   if(i%7==0){
//     console.log(i);

//   }
// }while(i+=1);

for(let i = 1; 1<=100; i+=1){
  if(i%3==0){
    console.log('fizz');
  }
  if(i%5==0 && i%3!=0){
    console.log('Buzz');
  }
  if(i%5==0 && i%3==0){
    console.log('FizzBuzz');
  }
  