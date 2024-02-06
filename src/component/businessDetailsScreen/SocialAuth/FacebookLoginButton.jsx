// FacebookLoginButton.js
import React from "react";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
const FacebookLoginButton = ({ onLogin }) => {
  const responseFacebook = (response) => {
    if (response.accessToken) {
      //   onLogin(response);

    }
  };

  return (
    <FacebookLogin
      appId="403498615515373"
      autoLoad={false}
      fields="name,email,picture,accounts" // Include 'accounts' to get information about user's Pages
      callback={responseFacebook}
      render={(renderProps) => (
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={renderProps.onClick}>Connect with facebook</button>
      )}
    />
  );
};

export default FacebookLoginButton;
