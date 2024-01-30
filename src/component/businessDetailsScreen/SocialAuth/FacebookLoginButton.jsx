// FacebookLoginButton.js
import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookLoginButton = ({ onLogin }) => {
  const responseFacebook = (response) => {
    if (response.accessToken) {
    //   onLogin(response);

    console.log(response, ">>>>>>>>>>")
    }
  };

  return (
    <FacebookLogin
      appId="3756229817943164"
      autoLoad={false}
      fields="name,email,picture,accounts" // Include 'accounts' to get information about user's Pages
      callback={responseFacebook}
    />
  );
};

export default FacebookLoginButton;
