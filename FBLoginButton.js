import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {

  initUser(token) {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends,picture.type(large)&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
      console.warn(json)
      // Some user object has been set up somewhere, build that user here
      // user.name = json.name
      // user.id = json.id
      // user.user_friends = json.friends
      // user.email = json.email
      // user.username = json.name
      // user.loading = false
      // user.loggedIn = true
      // user.avatar = setAvatar(json.id)      
    })
    .catch(() => {
      reject('ERROR GETTING DATA FROM FACEBOOK')
    })
  }

  render() {
    return (
      <View>
        <LoginButton
          publishPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    const { accessToken } = data;

                    this.initUser(accessToken)

                    console.warn(data)
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
};

module.exports = FBLoginButton;