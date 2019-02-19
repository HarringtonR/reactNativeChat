import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Main from './components/Main.js';
import Chat from './components/Chat.js';

const RootStack = createStackNavigator({
  Main: Main,
  Chat: Chat
}, {
  tabBarPosition: 'bottom',
  initialRouteName: 'Main',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#FFFFFF',
    style: {
      backgroundColor: '#303030',
    }
  },
});

const navigator = createAppContainer(RootStack);
export default navigator;
