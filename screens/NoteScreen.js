import React from 'react';
import {StyleSheet, Text, View, TextInput, AsyncStorage, Platform, SafeAreaView} from 'react-native';
import {Button} from 'native-base';
import moment, * as moments from 'moment';


class NoteScreen extends React.Component {
    static navigationOptions = { header: null };

    constructor(props){
        super(props)
        this.state = {
            note: '',
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.textAreaContainer}>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        numberOfLines={100}
                        multiline={true}
                        onChangeText={(text) => this.setState({note:text})}

                    />
                </View>
                <Button
                    onPress={() => this.saveNote("title", this.state.note)}
                    style={{
                        alignSelf: 'stretch',
                        backgroundColor: '#AB47BC',
                        justifyContent: 'center',
                        marginTop: 5,
                        marginRight: 5,
                        marginLeft: 5,
                        marginBottom: 5
                    }}><Text style={{color: '#fff'}}>NEW NOTE</Text></Button>

            </SafeAreaView>
        );
    }


    async saveNote(title, note) {
        //var arrString=["hello"];
        const date =moment().format('MMMM Do YYYY, h:mm:ss a');
        var Notes=[];
        var obj = {
            note:note,
            title:title,
            date:date,
        };
        var notes=JSON.parse(await AsyncStorage.getItem('Notes'))
        alert(JSON.stringify(notes))
        Notes=notes;
        Notes.push(obj)
        AsyncStorage.setItem("Notes", JSON.stringify(Notes))
     }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)

    },

    textAreaContainer: {
        borderColor: '#F5F5F5',
        borderWidth: 1,
        padding: 10
    },
    textArea: {
        padding: 5,
        fontSize: 18,
        height: 500,
        //   selectionColor:'#AB47BC',
        backgroundColor: '#E8E8E8',
        textAlignVertical: 'top',
        justifyContent: "flex-start"
    }
});
export default NoteScreen