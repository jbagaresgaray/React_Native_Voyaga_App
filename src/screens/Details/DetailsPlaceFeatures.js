import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Tab, TabView} from 'react-native-elements';
import {
  FONT_BOLD,
  FONT_MEDIUM,
  FONT_SEMI_BOLD,
} from '../../constants/Typography';
import COLORS from '../../constants/Colors';

import DetailsGettingThere from './Features/DetailsGettingThere';
import DetailsBeingThere from './Features/DetailsBeingThere';
import DetailsStayingThere from './Features/DetailsStayingThere';
import DetailsSimilarPlaces from './Features/DetailsSimilarPlaces';

import GettingThereSVG from '../../assets/svg/feature/GettingThere.svg';
import GettingThereActiveSVG from '../../assets/svg/feature/GettingThereActive.svg';
import BeingThereSVG from '../../assets/svg/feature/BeingThere.svg';
import BeingThereActiveSVG from '../../assets/svg/feature/BeingThereActive.svg';
import StayingThereSVG from '../../assets/svg/feature/StayingThere.svg';
import StayingThereActiveSVG from '../../assets/svg/feature/StayingThereActive.svg';
import SimilarPlacesSVG from '../../assets/svg/feature/SimilarPlaces.svg';
import SimilarPlacesActiveSVG from '../../assets/svg/feature/SimilarPlacesActive.svg';

const DetailsPlaceFeatures = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Feature</Text>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        // variant="primary"
        style={styles.TabStyle}
        indicatorStyle={styles.TabIndicatorStyle}>
        <Tab.Item
          title="Getting there"
          titleStyle={[
            styles.TabTitleStyle,
            index === 0 && styles.TabTitleActive,
          ]}
          containerStyle={styles.TabItemContainerStyle}
          icon={index === 0 ? <GettingThereActiveSVG /> : <GettingThereSVG />}
        />
        <Tab.Item
          title="Staying there"
          titleStyle={[
            styles.TabTitleStyle,
            index === 1 && styles.TabTitleActive,
          ]}
          containerStyle={styles.TabItemContainerStyle}
          icon={index === 1 ? <StayingThereActiveSVG /> : <StayingThereSVG />}
        />
        <Tab.Item
          title="Being there"
          titleStyle={[
            styles.TabTitleStyle,
            index === 2 && styles.TabTitleActive,
          ]}
          containerStyle={styles.TabItemContainerStyle}
          icon={index === 2 ? <BeingThereActiveSVG /> : <BeingThereSVG />}
        />
        <Tab.Item
          title="Similar places"
          titleStyle={[
            styles.TabTitleStyle,
            index === 3 && styles.TabTitleActive,
          ]}
          containerStyle={styles.TabItemContainerStyle}
          icon={index === 3 ? <SimilarPlacesActiveSVG /> : <SimilarPlacesSVG />}
        />
      </Tab>
      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={styles.TabViewItemStyle}>
          <DetailsGettingThere />
        </TabView.Item>
        <TabView.Item style={styles.TabViewItemStyle}>
          <DetailsStayingThere />
        </TabView.Item>
        <TabView.Item style={styles.TabViewItemStyle}>
          <DetailsBeingThere />
        </TabView.Item>
        <TabView.Item style={styles.TabViewItemStyle}>
          <DetailsSimilarPlaces />
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default DetailsPlaceFeatures;

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 24,
    backgroundColor: COLORS.colorContent,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 4,
  },
  Title: {
    ...FONT_MEDIUM,
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: 0.67,
    color: COLORS.colorStandard,
    paddingHorizontal: 20,
  },
  TabStyle: {
    backgroundColor: COLORS.colorContent,
  },
  TabTitleStyle: {
    ...FONT_SEMI_BOLD,
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 1,
    color: COLORS.colorStandardFade,
    textTransform: 'none',
    textAlign: 'center',
    paddingTop: 20,
  },
  TabTitleActive: {
    ...FONT_BOLD,
    color: COLORS.colorStandard,
    textAlign: 'center',
    paddingTop: 6,
  },
  TabIndicatorStyle: {
    backgroundColor: 'transparent',
  },
  TabItemContainerStyle: {
    paddingVertical: 10,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'transparent',
  },
  TabViewItemStyle: {
    marginTop: 27,
    paddingHorizontal: 20,
    width: '100%',
  },
});
