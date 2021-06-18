
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home/index';
import About from '../components/About';
import Profil from '../Screens/Profile/index';
import EmergencyCall from '../components/EmergencyCall';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import colors from '../Theme/Colors';
import { sessions } from "../_helpers";


const Tab = createBottomTabNavigator();
const iconActiveColor = colors.bg_coklat;
const iconColor = colors.bg_hijaugelap;

import Login from '../Screens/Login/index';

function getTabBarVisible(route) {
    // alert(route.name)

    const routeName = getFocusedRouteNameFromRoute(route) ?? 'TabBottom'
    // alert(routeName)
    // ? route.state.routes[route.state.index].name
    // : route.params?.screen || 'Home';

    // switch (routeName) {
    //     case 'Home': return 'My Home';
    //     case 'Profile': return 'My Profile';
    // }
    if (routeName === 'About') {
        return false;
    }
    return true;
}



export const tabsBottomAfterLogin = () => {
    return (
        <Tab.Navigator
            initialRouteName="TabBottom"
            tabBarOptions={{
                activeTintColor: iconActiveColor,
                inactiveTintColor: iconColor
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={({ route }) => ({
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home-variant" color={color} size={size} />
                    ),
                    tabBarVisible: getTabBarVisible(route)
                })}
            />
            <Tab.Screen
                name="EmergencyCall"
                component={EmergencyCall}
                options={({ route }) => ({
                    tabBarLabel: 'Emergency Call',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="phone-plus" color={color} size={size} />
                    ),
                    tabBarVisible: getTabBarVisible(route)
                })}
            />
            <Tab.Screen
                name="Profile"
                component={Profil}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
        // <Tab.Navigator>
        //     <Tab.Screen name="Home" component={HomeStack} options={{
        //         // tabBarLabel: 'Updates',
        //         // tabBarIcon: ({ color, size }) => (
        //         //     <MaterialCommunityIcons name="bell" color={color} size={size} />
        //         // ),
        //         // tabBarBadge: 3,
        //         tabBarVisible: true //untuk menghide bar bottoms
        //     }} />
        //     <Tab.Screen name="Profil" component={Profil} />
        // </Tab.Navigator>
    )
}

export const tabsBottomBeforeLogin = () => {
    return (
        <Tab.Navigator
            initialRouteName="TabBottom"
            tabBarOptions={{
                activeTintColor: iconActiveColor,
                inactiveTintColor: iconColor
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={({ route }) => ({
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home-variant" color={color} size={size} />
                    ),
                    tabBarVisible: getTabBarVisible(route)
                })}
            />
            {/* <Tab.Screen
                name="EmergencyCall"
                component={EmergencyCall}
                options={({ route }) => ({
                    tabBarLabel: 'Emergency Call',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="phone-plus" color={color} size={size} />
                    ),
                    tabBarVisible: getTabBarVisible(route)
                })}
            /> */}
            <Tab.Screen
                name="Profile"
                component={Profil}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
        // <Tab.Navigator>
        //     <Tab.Screen name="Home" component={HomeStack} options={{
        //         // tabBarLabel: 'Updates',
        //         // tabBarIcon: ({ color, size }) => (
        //         //     <MaterialCommunityIcons name="bell" color={color} size={size} />
        //         // ),
        //         // tabBarBadge: 3,
        //         tabBarVisible: true //untuk menghide bar bottoms
        //     }} />
        //     <Tab.Screen name="Profil" component={Profil} />
        // </Tab.Navigator>
    )
}



// const tabsBottom = () => {
//     return (
//         <Tab.Navigator
//             initialRouteName="TabBottom"
//             tabBarOptions={{
//                 activeTintColor: iconActiveColor,
//                 inactiveTintColor: iconColor
//             }}
//         >
//             <Tab.Screen
//                 name="Home"
//                 component={HomeStack}
//                 options={({ route }) => ({
//                     tabBarLabel: 'Home',
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="home-variant" color={color} size={size} />
//                     ),
//                     tabBarVisible: getTabBarVisible(route)
//                 })}
//             />
//             <Tab.Screen
//                 name="EmergencyCall"
//                 component={EmergencyCall}
//                 options={({ route }) => ({
//                     tabBarLabel: 'Emergency Call',
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="phone-plus" color={color} size={size} />
//                     ),
//                     tabBarVisible: getTabBarVisible(route)
//                 })}
//             />
//             <Tab.Screen
//                 name="Profile"
//                 component={Profil}
//                 options={{
//                     tabBarLabel: 'Profile',
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="account" color={color} size={size} />
//                     ),
//                 }}
//             />
//         </Tab.Navigator>
//         // <Tab.Navigator>
//         //     <Tab.Screen name="Home" component={HomeStack} options={{
//         //         // tabBarLabel: 'Updates',
//         //         // tabBarIcon: ({ color, size }) => (
//         //         //     <MaterialCommunityIcons name="bell" color={color} size={size} />
//         //         // ),
//         //         // tabBarBadge: 3,
//         //         tabBarVisible: true //untuk menghide bar bottoms
//         //     }} />
//         //     <Tab.Screen name="Profil" component={Profil} />
//         // </Tab.Navigator>
//     )
// }


const Stack = createStackNavigator();



function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen name="About" component={About} options={{
                tabBarVisible: true //untuk menghide bar bottoms
            }} />
            <Stack.Screen name="Profil" component={Profil} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false, tabBarVisible: true }} />
        </Stack.Navigator>
    );
}


// export default tabsBottom;
