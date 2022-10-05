import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ScrollView from './ScrollView';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';



const Main = ()=>{

    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.header}>

            </View>

            <View style={styles.body}>
            <ScrollView></ScrollView>
            </View>

            <View style={styles.foot}>
           
            <MaterialCommunityIcons name="home" size={52} color="gray"  />
            <MaterialIcons name="featured-play-list" size={52} color="gray" />
            <FontAwesome5 name="book-open" size={52} color="gray" />
            <Ionicons name="people" size={52} color="gray" />
            <Fontisto name="favorite" size={52} color="gray" />
            </View>
           
        </View>
    )
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    padding: 0,
    },
    header:{
        backgroundColor: '#28333F', 
        flex:1.5 
    },
    body:{
        backgroundColor: '#4D5FAC', 
        flex:10,
    },
    foot:{
        flex:1,
        backgroundColor: '#28333F',
        flexDirection: "row",
        justifyContent:'space-between',
        paddingHorizontal: 20,

        
    }
});
