import React from "react";
import { View, Text, Button } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

export type RootDrawerParamList = {
    Home: undefined;
    income: undefined;
  };
type Props = DrawerScreenProps<RootDrawerParamList, 'income'>;

const IncomeScreen:React.FC = ( )=>(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Income Screen</Text>
  </View>
)

export default IncomeScreen;