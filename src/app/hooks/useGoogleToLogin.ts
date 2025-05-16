// // hooks/useGoogleLogin.ts
// 'use client';

// import { useState } from 'react';
// import { useGoogleLogin as useGLogin } from '@react-oauth/google';

// interface GoogleLoginResult {
//   signIn: () => void;
//   signOut: () => void; // Removendo o signOut, já que não vamos implementar logout completo
//   googleToken: string | null;
// }

// function useGoogleLogin(): GoogleLoginResult {
//   const [googleToken, setGoogleToken] = useState<string | null>(null);

//   const login = useGLogin({
//     onSuccess: (credentialResponse) => {
//       console.log('Resposta do Google (onSuccess):', credentialResponse);
//       const token = credentialResponse?.credential || credentialResponse?.code || null;
//       setGoogleToken(token || null);
//     },
//     onError: (error) => {
//       console.error('Erro no Login do Google:', error);
//     },
//   });

//   const signOut = () => {
//         setGoogleToken(null);
//   };

//   return { signIn: login.signIn, signOut, googleToken }; // Removendo googleProfile
// }

// export default useGoogleLogin;