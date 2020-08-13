import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultStackOptions} from '../options';
import {useTranslation} from '@hooks';
import {Main} from '@screens';

export const MainStackNavigator = () => {
  const {t} = useTranslation();
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator screenOptions={defaultStackOptions}>
      <MainStack.Screen
        options={{
          headerShown: true,
          title: 'Redux-Saga',
        }}
        component={Main}
        name={'Main'}
      />
    </MainStack.Navigator>
  );
};
