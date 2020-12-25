/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Router from './src/routes/routes_navigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
