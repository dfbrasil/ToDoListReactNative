import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign } from '@expo/vector-icons';
import Dashboard from '../screens/Dashboard/Dashboard';
import Home from '../screens/Home/Home';
import { theme } from '../theme/index';

type TabParamList = {
  Dashboard: undefined;
  Home: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabBottomRoutes() {
  return (
    <Tab.Navigator screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: theme.colors.base.green,
      tabBarHideOnKeyboard: true,
      
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="profile" size={size} color={color} />,
          tabBarLabel: 'Dashboard',
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          tabBarLabel: 'Início',
        }}
      />
    </Tab.Navigator>
  );
}
