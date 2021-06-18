import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';


const EmergencyCall = ({ navigation }) => {
    return (
        <View>
            <Text>
                EmergencyCall
            </Text>
            {/* <Button title="go to about" onPress={() => navigation.navigate('Home')} />
            <Button title="go to about" onPress={() => navigation.goBack()} /> */}
            {/* kalo .goBack itu kembali  ke screen sebelumnya */}
        </View>
    )
}

export default EmergencyCall;