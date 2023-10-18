import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginComponent = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle the response here.
  };

  return (
    <div>
      <h2>Gmail Authentication</h2>
      <GoogleLogin
        clientId="666659365834-ln7dpkje4ktuj0mrmmbs61an1koq0aup.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        redirectUri="http://localhost:3000/auth/google"
      />
    </div>
  );
};

export default GoogleLoginComponent;
