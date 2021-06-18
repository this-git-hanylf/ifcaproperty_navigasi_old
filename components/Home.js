import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';


const Home = ({ navigation }) => {
    return (
        <View>
            <Text>
                Home
            </Text>
            <Button title="go to about" onPress={() => navigation.navigate('About')} />
            <Button title="go to profil" onPress={() => navigation.navigate('Profil')} />

        </View>
    )
}

export default Home;