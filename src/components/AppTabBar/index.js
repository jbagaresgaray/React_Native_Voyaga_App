import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  StyleSheet,
} from 'react-native';

import HomeSVG from '../../assets/svg/tabs/home.svg';
import HomeActiveSVG from '../../assets/svg/tabs/home-active.svg';

import HeartSVG from '../../assets/svg/tabs/heart.svg';
import HeartActiveSVG from '../../assets/svg/tabs/heart-active.svg';

import PlaneSVG from '../../assets/svg/tabs/plane.svg';
import PlaneActiveSVG from '../../assets/svg/tabs/plane-active.svg';

import UsersSVG from '../../assets/svg/tabs/users.svg';
import UsersActiveSVG from '../../assets/svg/tabs/users-active.svg';

import UserSVG from '../../assets/svg/tabs/user.svg';
import UserActiveSVG from '../../assets/svg/tabs/user-active.svg';

const AppTabBar = ({state, descriptors, navigation}) => {
  const [translateValue] = useState(new Animated.Value(0));
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;

  const renderIcon = (focused, name) => {
    if (name === 'YourWorld') {
      return focused ? <HomeActiveSVG /> : <HomeSVG />;
    } else if (name === 'Wishlist') {
      return focused ? <HeartActiveSVG /> : <HeartSVG />;
    } else if (name === 'YourVoyages') {
      return focused ? <PlaneActiveSVG /> : <PlaneSVG />;
    } else if (name === 'TravellingFriends') {
      return focused ? <UsersActiveSVG /> : <UsersSVG />;
    } else if (name === 'YourAccount') {
      return focused ? <UserActiveSVG /> : <UserSVG />;
    }
  };

  return (
    <View style={[styles.tabContainer, {width: totalWidth}]}>
      <View style={styles.flexDirectionRow}>
        <Animated.View
          style={[
            styles.slider,
            {
              transform: [{translateX: translateValue}],
              width: tabWidth - 20,
            },
          ]}
        />

        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];

          const label =
            options.title !== undefined ? options.title : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

            Animated.spring(translateValue, {
              toValue: index * tabWidth,
              velocity: 60,
              useNativeDriver: true,
            }).start();
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.flex1}
              key={index}>
              <View style={styles.viewIcon}>
                {renderIcon(isFocused, route.name)}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default AppTabBar;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  tabContainer: {
    height: 70,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: 'white',
    elevation: 10,
    position: 'absolute',
    bottom: 0,
  },
  slider: {
    height: 5,
    position: 'absolute',
    top: 0,
    left: 10,
    backgroundColor: '#E9486D',
    borderRadius: 10,
  },
  viewIcon: {
    paddingTop: 15,
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
