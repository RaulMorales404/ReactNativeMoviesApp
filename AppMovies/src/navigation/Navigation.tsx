/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import { Movies } from '../interfaces/movies';
import Details from '../screen/details';
import Home from '../screen/home/Index';

export type RootsStackParams = {
  Home: undefined,
  DetailMovi: Movies,
}

const Stack = createStackNavigator<RootsStackParams>();
const Navigation = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: 'white',
          borderTopColor: 'white',
          borderBottomWidth: 0,
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailMovi" component={Details} />
    </Stack.Navigator >
  );
};
export default Navigation;
