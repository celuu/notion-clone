import { useGoogleLogin } from "@react-oauth/google";

const googleLogin = useGoogleLogin({
  flow: 'auth-code',
  onSuccess: async (codeResponse) => {
    console.log(codeResponse);

    try {
      const response = await fetch('http://localhost:3000/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: codeResponse.code }),
      });

      if (response.ok) {
        const tokens = await response.json();
        console.log(tokens);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.log(error);
    }
  },
  onError: (errorResponse) => console.log(errorResponse),
});

export default googleLogin;