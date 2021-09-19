import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../constants/Colors';
import OnboardingArr from '../../constants/onboarding';

const {width, height} = Dimensions.get('window');

const OnboardingScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const [appWidth, setAppWidth] = useState(width);
  const offset = width * activeIndex;
  const internals = {
    isScrolling: false,
    offset,
  };

  const onScrollBegin = () => {
    internals.isScrolling = true;
  };

  const onScrollEnd = e => {
    internals.isScrolling = false;

    // Update index
    updateIndex(
      e.nativeEvent.contentOffset
        ? e.nativeEvent.contentOffset.x
        : // When scrolled with .scrollTo() on Android there is no contentOffset
          e.nativeEvent.position * appWidth,
    );
  };

  const onScrollEndDrag = e => {
    const {
        contentOffset: {x: newOffset},
      } = e.nativeEvent,
      {offset} = internals;

    // Update internal isScrolling state
    // if swiped right on the last slide
    // or left on the first one
    if (
      offset === newOffset &&
      (activeIndex === 0 || activeIndex === OnboardingArr.length - 1)
    ) {
      internals.isScrolling = false;
    }
  };

  const updateIndex = offset => {
    const diff = offset - internals.offset;
    const step = appWidth;
    let index = activeIndex;

    // Do nothing if offset didn't change
    if (!diff) {
      return;
    }

    // Make sure index is always an integer
    index = parseInt(index + Math.round(diff / step), 10);

    // Update internal offset
    internals.offset = offset;
    // Update index in the state
    setActiveIndex(index);
  };

  const renderPagination = () => {
    if (OnboardingArr.length <= 1) {
      return null;
    }

    const ActiveDot = <View style={[styles.dot, styles.activeDot]} />,
      Dot = <View style={styles.dot} />;

    let dots = [];

    for (let key = 0; key < OnboardingArr.length; key++) {
      dots.push(
        key === activeIndex
          ? React.cloneElement(ActiveDot, {key})
          : React.cloneElement(Dot, {key}),
      );
    }

    return (
      <View pointerEvents="none" style={styles.pagination}>
        {dots}
      </View>
    );
  };

  const renderListItem = (item, index) => {
    return (
      <View style={styles.fullScreen} key={index}>
        <Image source={item.image} resizeMode="cover" />
        <View style={styles.Onboarding__Footer}>
          <LinearGradient
            colors={['#D23078', '#FE6161', '#FF7955']}
            start={{x: 0.32, y: 0.73}}
            end={{x: 0.79, y: 0.18}}
            locations={[0, 0.72, 1]}
            style={styles.Onboarding__Footer_Gradient}
          />
          <Text style={styles.Onboarding__Footer_Title}>{item.title}</Text>
          <Text style={styles.Onboarding__Footer_Description}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.SafeAreaView}>
      <ScrollView
        style={styles.ScrollView}
        onScrollBeginDrag={onScrollBegin}
        onMomentumScrollEnd={onScrollEnd}
        onScrollEndDrag={onScrollEndDrag}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollsToTop={false}
        automaticallyAdjustContentInsets={false}
        removeClippedSubviews
        pagingEnabled
        horizontal>
        {OnboardingArr.map((page, index) => renderListItem(page, index))}
      </ScrollView>
      <View style={styles.Onboarding__Footer_PaginationView}>
        <View>{renderPagination()}</View>
        <TouchableOpacity style={styles.Onboarding__Footer_Pagination_Skip_View}>
          <Text style={styles.Onboarding__Footer_Pagination_Skip}>SKIP</Text>
          <Icon
            name="arrow-forward-outline"
            color={COLORS.colorWhite}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    position: 'relative',
  },
  ScrollView: {
    flex: 1,
    backgroundColor: COLORS.colorPink,
  },
  fullScreen: {
    width: width,
    height: height,
    position: 'relative',
  },
  slide: {
    backgroundColor: 'transparent',
  },
  Onboarding__Footer: {
    padding: 20,
    position: 'relative',
    backgroundColor: '#F4327F',
    height: '100%',
  },
  Onboarding__Footer_Gradient: {
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.65,
  },
  Onboarding__Footer_Title: {
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.96,
    fontWeight: '300',
    color: COLORS.colorWhite,
  },
  Onboarding__Footer_Description: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.45,
    fontWeight: '300',
    color: COLORS.colorWhite,
    marginTop: 8,
  },
  Onboarding__Footer_PaginationView: {
    height: 80,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  Onboarding__Footer_Pagination_Skip_View: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Onboarding__Footer_Pagination_Skip: {
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0,
    fontWeight: '500',
    color: COLORS.colorWhite,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: '#D8D8D8',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  // Active dot
  activeDot: {
    backgroundColor: '#FFFFFF',
  },
});
