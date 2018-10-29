import React from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';
import {Button} from 'native-base';


class NoteScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textAreaContainer} >
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        numberOfLines={100}
                        multiline={true}
                    />
                </View>
                <Button
                    onPress={() => this.props.navigation.navigate('Note')}
                    style={{
                        alignSelf: 'stretch',
                        backgroundColor: '#AB47BC',
                        justifyContent: 'center',
                        marginTop: 5,
                        marginRight: 5,
                        marginLeft: 5,
                        marginBottom: 5
                    }}><Text style={{color: '#fff'}}>NEW NOTE</Text></Button>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    textAreaContainer: {
        borderColor: '#F5F5F5',
        borderWidth: 1,
        padding: 10
    },
    textArea: {
        padding:5,
        fontSize:18,
        height:500,
     //   selectionColor:'#AB47BC',
        tintColor:'#AB47BC',
        backgroundColor: '#E8E8E8',
        textAlignVertical: 'top',
        justifyContent: "flex-start"
    }


});
export default NoteScreen