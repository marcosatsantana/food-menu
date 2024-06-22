import React, { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { useAuth } from '../../hooks/auth';

export default function SignIn() {
  const { signIn, user } = useAuth();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    signIn({ username, password });
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 items-center justify-center p-8 flex flex-col gap-2">
      <Input placeholder="Email" type="text" onChange={e => setUserName(e.target.value)} />
      <Input placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} />
      <div style={{ display: 'flex', width: '100%' }}>
        <Button className="w-full" onClick={handleSignIn}>Entrar</Button>
      </div>
    </div>
  );
}
