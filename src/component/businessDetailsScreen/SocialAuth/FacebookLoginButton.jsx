import React, { useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const FacebookLoginButton = ({ accessToken, setAccessToken }) => {
  const [fbCredential, setFbCredential] = useState();

  const responseFacebook = (response) => {
    if (response.accessToken) {
      setAccessToken(response.accessToken);
      setFbCredential(response);
    }
  };

  const handleLogout = () => {
    setFbCredential(null);
    setAccessToken("");
    console.log(window.FB);
    if (window.FB) {
      window.FB.logout(function (response) {
        // user is now logged out
        console.log(response, ">>>>> response logout");
      });
    }
  };

  useEffect(() => {
    if (window.FB) {
      window.FB.getLoginStatus(function (response) {
        console.log(response, ">>>>>> response")
        setFbCredential(response?.authResponse);
      });
    }
  }, []);
  return (
    <>
      {fbCredential && accessToken ? (
        <>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Connected
          </button>
        </>
      ) : (
        <FacebookLogin
          appId="403498615515373"
          autoLoad={false}
          fields="name,email,picture,accounts" // Include 'accounts' to get information about user's Pages
          callback={responseFacebook}
          render={(renderProps) => (
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={renderProps.onClick}
            >
              Connect with facebook
            </button>
          )}
        />
      )}
    </>
  );
};

export default FacebookLoginButton;
