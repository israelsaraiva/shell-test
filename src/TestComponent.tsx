import { useEffect } from 'react';
import { useOAuth2Token } from 'react-oauth2-hook';

export default function TestComponent() {
  const [token, getToken] = useOAuth2Token({
    authorizeUrl: 'https://gitlab.com/oauth/authorize',
    scope: ['read_user'],
    clientID: '00628614e114f973b1680ef27a27f98f202de5e395604ae7d0a2a67483fb0681',
    redirectUri: 'https://shell-app-test.herokuapp.com/callback',
  });

  useEffect(() => {
    debugger;
    getToken();
  }, []);

  useEffect(() => {
    console.log('TOKEN ==> ', token);
  }, [token]);

  return <div>TEST</div>;
}
