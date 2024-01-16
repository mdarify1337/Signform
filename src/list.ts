import React, { useState } from 'react';
interface SignUpFormProps 
{
    onSignIn:  
    (
        username: string, 
        password: string
    ) 
        => void;
    onSignUp: 
    (
        email: string, 
        username: string,
        password: string
    ) 
        => void;
}
function SignInForm({ onSignIn}: SignUpFormProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Simulated authentication logic (replace with your actual authentication code)
    const validUsername = 'user';
    const validPassword = 'pass';

    if (username === validUsername && password === validPassword) {
      // Call the onSignIn function with the entered username and password
      onSignIn(username, password);
      console.log('Authentication successful!');
    } else {
      setUsername('Mohamed');
      setPassword('list1');
      console.log('Authentication failed. Please check your username and password.');
    }
  };

  return (
    onSignIn = (username,   password) => 
    {  
        handleSignIn();
        console && console.log(username, password);
        console && console.log(username, password);
        // onSignIn();
    }
  );
}

export default SignInForm;

function ft_calculate(base:number, exponenent:number) : number {
  return base ** exponenent;
}

let calculatePower = (base: number, exponent: number): number  => Math.pow(base, exponent);


function  listpowr(list: number[]) : boolean {
  let list2 : boolean[] = [];
  for (let i = 0; i < list.length; i++) 
  {
      if (ft_calculate(list[i], 2) % 2 != 0 || calculatePower(list[i], 2) % 2 != 0)
        list2.push(false);
      else
        list2.push(true);
  }
  let j:number = 0;
  let counter:number = 0, count:number = 0;
  while (j < list2.length)
  {
      if (list2[j] == true)
        counter++;
      else
        count++;
      j++;
  }
  return counter == count;
}
let list3: number[] = [12, 23, 45, 12, 65];
console.log(listpowr(list3));