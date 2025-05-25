import { registerRootComponent } from 'expo';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Adjust the path as necessary
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
