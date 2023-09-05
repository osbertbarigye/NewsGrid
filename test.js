for(let i = 1; 1<=100; i+=1){
  if(i%3==0)
   {
    console.log('fizz');
    continue;
   }
        else if(i%5==0 && i%3!=0)
        {
        console.log('Buzz');
        continue;
        }
        else if(i%5==0 && i%3==0)
        {
        console.log('FizzBuzz');
        continue;
        }
    else
    {
        console.log(i);
    }
        
  }