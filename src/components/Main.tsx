import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ScrollView from './ScrollView';


const Main = ()=>{

    return(
        <View>
            <StatusBar style="dark" />
           <ScrollView></ScrollView>
        </View>
    )
}

export default Main;

const styles = StyleSheet.create({

});
