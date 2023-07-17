import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailCard from './app/src/screens/detailcard.screen';
import HomeScreen from './app/src/screens/home.screen';
import {Image} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  CardsDetail: undefined;
};

function App(): JSX.Element {
  const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerLeft: () => (
              <Image source={require('./app/res/images/icon_navbar.png')} />
            ),
            headerRight: () => (
              <Image
                source={require('./app/res/images/icon_notification.png')}
              />
            ),
          }}
        />
        <Screen
          name="CardsDetail"
          component={DetailCard}
          options={{
            title: 'My Cards',
            headerTitleAlign: 'center',
            headerRight: () => (
              <Image
                source={require('./app/res/images/icon_notification.png')}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
