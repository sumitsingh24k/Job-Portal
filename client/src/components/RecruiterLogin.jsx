import React, { useState } from 'react';

const RecruiterLogin = () => {
  const [state, setState] = useState('Login');
  const [image, setImage] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);

  return (
    <div>
      <form action="">
        <h1>Recruiter {state}</h1>
        <p>Welcome back !  please sign in to Continue</p>
      </form>
    </div>
  );
};

export default RecruiterLogin;
