



import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DeatilsScreen';
import { Movie } from '../interfaces/MovieInterface';


export type RootStackParams = {
  HomeScreen: undefined,
  DetailsScreen: Movie;
}
const Stack = createStackNavigator<RootStackParams>();

export const NavigationStacks = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                //backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="HomeScreen"    component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}