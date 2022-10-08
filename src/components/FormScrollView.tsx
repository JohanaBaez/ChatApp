import { StyleSheet, Text, View } from 'react-native';
import FormUser from '../screens/FormUser';



const FormScrollView = () => {

    return (
        <View>
            <FormUser title='David Green'
                date='20 Apr.2021'
                coment='Polygon has raised $450 million from
              strategic investors acco rding to a press
               release sent to Bitcoin.com News on Februay 7' />

        </View>
    )
}

export default FormScrollView;

const styles = StyleSheet.create({

});

