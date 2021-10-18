import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './style';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../images/logo.png')}/>
      <Image style={styles.menu} source={require('../../images/menu.png')}/>
    </View>
  );
};

export default Header;