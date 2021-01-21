import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile194966Navigator from '../features/UserProfile194966/navigator';
import Settings194965Navigator from '../features/Settings194965/navigator';
import Settings194963Navigator from '../features/Settings194963/navigator';
import SignIn2194961Navigator from '../features/SignIn2194961/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile194966: { screen: UserProfile194966Navigator },
Settings194965: { screen: Settings194965Navigator },
Settings194963: { screen: Settings194963Navigator },
SignIn2194961: { screen: SignIn2194961Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
