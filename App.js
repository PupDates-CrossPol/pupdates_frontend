import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/Home/Home'
import LoginScreen from './components/LoginForm/LoginForm'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen}
})

const App = createAppContainer(MainNavigator)

export default App