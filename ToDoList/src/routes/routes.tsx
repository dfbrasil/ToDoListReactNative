import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign } from '@expo/vector-icons';

import Dashboard from '../screens/Dashboard/Dashboard';
import Home from '../screens/Home/Home';

const Tab = createBottomTabNavigator();

export default function TabBottomRoutes() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color, size }) => <AntDesign name="profile" size={size} color={color}  />,
                    tabBarLabel: 'Dashboard',
                    tabBarActiveTintColor: '#67B588'

                }}
            />
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color}  />,
                    tabBarLabel: 'Início',
                    tabBarActiveTintColor: '#67B588'
                }}
            />
        </Tab.Navigator> 
    )
}