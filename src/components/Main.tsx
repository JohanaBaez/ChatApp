import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ScrollView from './ScrollView';


const Main = ()=>{

    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.header}></View>
            <View style={styles.body}>
            <ScrollView></ScrollView>
            </View>
            <View style={styles.foot}></View>
           
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
        backgroundColor: '#2F3C50', 
        flex:10,

    },
    foot:{
        flex:1,
        backgroundColor: '#28333F'
    }
});
