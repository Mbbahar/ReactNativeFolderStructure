import React, {useState, useEffect} from 'react';
import LogIn from './LogIn';

function LogInContainer(props) {
  function _login() {
    () => props.navigation.navigate('Profile');
  }

  return <LogIn _login={_login} />;
}
export {LogInContainer};
