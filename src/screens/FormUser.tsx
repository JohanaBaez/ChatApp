import { StyleSheet, Text, View } from 'react-native';
interface Props{
    title: string;
    date: string;
    coment:string;
}

const FormUser = ({title,date,coment}:Props)=>{

    return(
        <View>
            <Text>{title}</Text>
            <Text>{date}</Text>
            <Text>{coment}</Text>
        </View>
    )
}

export default FormUser;

const styles = StyleSheet.create({

});

