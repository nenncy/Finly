
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'; // must be at top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import IncomeScreen from './src/screens/IncomeScreen';
import ExpenseScreen from './src/screens/ExpenseScreen';

export type RootDrawerParamList = {
    Home: undefined;
    income: undefined;
    expense: undefined

  };

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="income" component={IncomeScreen} />
        <Drawer.Screen name="expense" component={ExpenseScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
