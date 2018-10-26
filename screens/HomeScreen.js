import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'native-base';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button style={{alignSelf:'stretch',justifyContent: 'center', marginTop:5, marginRight:5, marginLeft:5,marginBottom:5 } }><Text style={{color:'#fff'}}>Add Note</Text></Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
export default HomeScreen