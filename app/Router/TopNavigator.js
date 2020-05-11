import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Animated from 'react-native-reanimated';


// Screen
import KelolaAdmin from '../screens/KelolaAdmin';
import KelolaKeluhan from '../screens/KelolaKeluhan';

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            {isFocused ? <Animated.View style={{
              backgroundColor: '#D6D5D5',
              borderTopStartRadius:15,
              borderTopEndRadius:15,
              height:45,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            >
              <Animated.Text style={{color: '#000', fontFamily: 'Roboto', fontStyle: 'italic'}}>{label}</Animated.Text>
            </Animated.View>
            :
            <Animated.View style={{
              backgroundColor:'#061F3E',
              height:45,
              borderBottomStartRadius:15,
              borderBottomEndRadius:15,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            >
              <Animated.Text style={{color: '#D6D6D6', fontFamily: 'Roboto', fontStyle: 'italic'}}>{label}</Animated.Text>
            </Animated.View>
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TopNavigator() {
  return (
      <Tab.Navigator tabBar={props => <MyTabBar {...props}/>}>
        <Tab.Screen name="KelolaAdmin" component={KelolaAdmin} options={{ tabBarLabel: 'Kelola Admin' }} />
        <Tab.Screen name="KelolaKeluhan" component={KelolaKeluhan} options={{ tabBarLabel: 'Kelola Keluhan' }} />
      </Tab.Navigator>
  );
}
