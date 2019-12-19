import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/Home/Home'
import LoginScreen from './components/LoginForm/LoginForm'
import MenuScreen from './components/Menu/Menu'

const MainNavigator = createSwitchNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Menu: {screen: MenuScreen},
})

const App = createAppContainer(MainNavigator)

export default App