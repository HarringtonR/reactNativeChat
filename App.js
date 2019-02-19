import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import Main from './components/Main.js';
import Chat from './components/Chat.js';

const RootStack = createMaterialTopTabNavigator({
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

const App = createAppContainer(RootStack);
export default App;
