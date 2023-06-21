import {View, StyleSheet} from 'react-native';
import React from 'react';

import AvatarSVG from '../../assets/svg/IconAvatar.svg';

const AppAvatar = () => {
  return (
    <View style={styles.Avatar}>
      <AvatarSVG />
    </View>
  );
};

export default AppAvatar;

const styles = StyleSheet.create({
  Avatar: {
    width: 92,
    height: 92,
    borderRadius: 92,
    backgroundColor: '#E2E3E4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
