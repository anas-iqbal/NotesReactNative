import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'native-base';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button style={{alignSelf:'stretch', backgroundColor:'#AB47BC' ,justifyContent: 'center', marginTop:5, marginRight:5, marginLeft:5,marginBottom:5 } }><Text style={{color:'#fff'}}>NEW NOTE</Text></Button>
                <Text style={{marginLeft:5,fontSize:22, color:'#AB47BC'}}>Notes</Text>
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