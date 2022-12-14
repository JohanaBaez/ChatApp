import { Button, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ScrollView from './FormScrollView';

import { SimpleLineIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import FormScrollView from './FormScrollView';



const FormMain = () => {

    const home = () => {

    }
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.header}>
                <SimpleLineIcons name="bell" size={40} color="gray" />
                <FontAwesome5 name="user-circle" size={40} color="gray" />
                <Foundation name="list" size={40} color="gray" />
            </View>

            <View style={styles.body}>
                <View>
            
                </View>
                <FormScrollView></FormScrollView>
            </View>

            <View style={styles.foot}>

                <View>

                </View>


                <MaterialCommunityIcons name="home" size={52} color="gray" />
                <MaterialIcons name="featured-play-list" size={52} color="gray" />

                <FontAwesome5 name="book-open" size={52} color="gray" />

                <Ionicons name="people" size={52} color="gray" />

                <Fontisto name="favorite" size={52} color="gray" />
            </View>

        </View>
    )
}

export default FormMain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    header: {
        backgroundColor: '#28333F',
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingLeft: '60%'

    },
    body: {
        backgroundColor: '#4D5FAC',
        flex: 10,
    },
    foot: {
        flex: 1,
        backgroundColor: '#28333F',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 20,


    }

});
