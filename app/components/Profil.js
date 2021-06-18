import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';


const Profil = ({ navigation }) => {
    return (
        <View>
            <Text>
                Profil
            </Text>
            <Button title="go to about" onPress={() => navigation.navigate('About')}>

            </Button>
        </View>
    )
}

export default Profil;