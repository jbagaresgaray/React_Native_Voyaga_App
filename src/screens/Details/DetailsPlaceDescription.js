import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONT_LIGHT, FONT_SEMI_BOLD} from '../../constants/Typography';
import COLORS from '../../constants/Colors';

const DetailsPlaceDescription = () => {
  return (
    <View style={styles.DescriptionContainer}>
      <Text style={styles.DescriptionTitle}>Destination Description</Text>
      <Text style={styles.DescriptionText}>
        Beijing is the best destination to admire the Great Wall of China. Most
        famous Beijing Great Wall sections are located in its suburban areas,
        including the well-preserved Badaling and Mutianyu, the renovated
        Juyonguan, Jinshanling and Simatai, and wild Jiankou and Gubeikou.
      </Text>
    </View>
  );
};

export default DetailsPlaceDescription;

const styles = StyleSheet.create({
  DescriptionContainer: {
    marginTop: 30,
  },
  DescriptionTitle: {
    ...FONT_SEMI_BOLD,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.39,
    color: COLORS.colorStandard,
    textTransform: 'uppercase',
    marginBottom: 14,
  },
  DescriptionText: {
    ...FONT_LIGHT,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.39,
    color: COLORS.colorStandardFade,
  },
});
