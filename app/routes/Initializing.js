import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from "react-native";
// import { tabsBottomAfterLogin, tabsBottomBeforeLogin } from "./tabsBottom";
// import TabsBottom from './tabsBottom';
import { tabsBottomAfterLogin, tabsBottomBeforeLogin } from './tabsBottom';
import { sessions } from "../_helpers";


import { NavigationContainer } from '@react-navigation/native';


class Initializing extends Component {
    async componentDidMount() {
        try {
            const user = await sessions.getSess("@isLogin");
            console.log("user: ", user);
            if (user) {
                setTimeout(() => {
                    alert('user not null')
                    // tabBottom();
                    // <tabBottom></tabBottom>
                    tabsBottomAfterLogin();

                }, 1000);
            } else {
                setTimeout(() => {
                    alert('user null');
                    // TabBottom();
                    // goHome();
                    tabsBottomBeforeLogin();
                    // <NavigationContainer>
                    //     <TabsBottom>
                    //     </TabsBottom>
                    // </NavigationContainer>

                }, 1000);
            }
        } catch (err) {
            console.log("error: ", err);
            setTimeout(() => {
                // tabBottom();
                // goHome();
                // <tabBottom></tabBottom>
            }, 1000);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    <ActivityIndicator size="large" color="#00AFF0" />
                    <Text style={styles.loadingText}>Loading...</Text>
                </Text>
            </View>
        )
    };
}
export default Initializing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    loadingText: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 17,
        fontWeight: "300"
    }
});