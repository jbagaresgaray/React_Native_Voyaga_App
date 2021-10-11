import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {Avatar} from 'react-native-elements';
import NoImageSVG from '../../assets/svg/NoImage.svg';
import COLORS from '../../constants/Colors';
import {FONT_LIGHT, FONT_MEDIUM} from '../../constants/Typography';

const AppUploadPhoto = () => { 
  return (
    <View style={styles.AppUploadPhoto}>
      <NoImageSVG />
      {/* <Avatar rounded size={92} source={imageDefault} /> */}
      <View style={styles.AppUploadPhotoText}>
        <Text style={styles.Header}>Upload Photo</Text>
        <Text style={styles.Subtitle}>Recommended size is </Text>
        <Text style={styles.Subtitle}>360x360 pixels</Text>
      </View>
    </View>
  );
};

export default AppUploadPhoto;

const styles = StyleSheet.create({
  AppUploadPhoto: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  AppUploadPhotoText: {
    marginLeft: 23,
  },
  Header: {
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.45,
    color: COLORS.colorStandard,
    ...FONT_MEDIUM,
    marginBottom: 6,
  },
  Subtitle: {
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 0.33,
    color: COLORS.colorNote,
    ...FONT_LIGHT,
  },
});
