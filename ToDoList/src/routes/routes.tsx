import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign } from '@expo/vector-icons';
import Dashboard from '../screens/Dashboard/Dashboard';
import Home from '../screens/Home/Home';
import NewTask from '../screens/NewTask/NewTask';
import { theme } from '../theme/index';


type TabParamList = {
  Dashboard: undefined;
  Home: undefined;
  NewTask: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabBottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.base.green,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="NewTask"
        component={NewTask}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: theme.colors.base.white,
          tabBarIcon: ({ color=theme.colors.base.white, size }) => (
            <View style={{ 
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.colors.base.green,
              height: 60,
              width: 60, 
              borderRadius: 50,
            }}>
              <AntDesign name="plus" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="profile" size={size} color={color} />,
          tabBarLabel: 'Dashboard',
        }}
      />
    </Tab.Navigator>
  );
}