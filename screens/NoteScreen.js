import React from 'react';
import {StyleSheet, Text, View, TextInput, AsyncStorage} from 'react-native';
import {Button} from 'native-base';
import moment, * as moments from 'moment';


class NoteScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            note: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
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

            </View>
        );
    }


    async saveNote(title, note) {
         const date =moment().format('MMMM Do YYYY, h:mm:ss a');
        var Notes=[];
        var obj = {
            note:note,
            title:title,
            date:date,
        };
        var value = await AsyncStorage.getItem('Notes');
        if (value != null){
           // alert("Not Empty"+JSON.parse(JSON.stringify(value)))
            Notes=JSON.parse(JSON.stringify(value))
            alert(JSON.parse(JSON.stringify(Notes)))
            // Notes.push(obj)
            // try {
            //     AsyncStorage.setItem("Notes",JSON.stringify(Notes))
            // } catch (error) {
            //     alert("Error");
            // }
            // var getNotes= await AsyncStorage.getItem('Notes')
            // alert(JSON.stringify((getNotes)))
            //AsyncStorage.clear()

            // Notes=[JSON.parse(value)]
            // // var obj = {
            // //     note: note,
            // //     title: title,
            // //     date: date,
            // // };
            // // Notes.push(obj)
            // alert("khani nehi"+JSON.stringify(Notes))
        }
        else{
            Notes.push(obj)
          //  alert("Khali HA"+JSON.stringify(Notes))

         //   alert(JSON.stringify(Notes))
            try {
                   AsyncStorage.setItem("Notes",JSON.stringify(Notes))
                } catch (error) {
                    alert("Error");
                }
           var getNotes= await AsyncStorage.getItem('Notes')
            alert(JSON.stringify((getNotes)))

           // alert(getNotes)

        }
        //
        //
        // try {
        //         AsyncStorage.setItem("Notes",JSON.stringify(Notes))
        //     } catch (error) {
        //         alert("Error");
        //     }
        // AsyncStorage.getItem('Notes')
        //     .then((value) => {
        //      //    const data = JSON.parse(value);
        //      // //   console.log('name is ', data.name);
        //      //    alert(data.note)
        //     });
        //
        //
        //





        //
        // const date =moment().format('MMMM Do YYYY, h:mm:ss a');
        // var obj = {
        //     note: note,
        //     title: title,
        //     date: date,
        // };
        //
        // var Notes=[]
        // let value = await AsyncStorage.getItem('Notes');
        // if (value != null){
        //     alert("Khali Nehi")
        //     Notes.push(obj)
        // }
        // else{
        //     alert("Khali Ha")
        //     Notes={obj}
        // }
        //
        // //Notes.push(obj)
        //
        // //alert(JSON.stringify(Notes))
        //
        //
        // try {
        //         AsyncStorage.setItem("Notes",JSON.stringify(Notes))
        //     } catch (error) {
        //         alert("Error");
        //     }
        // AsyncStorage.getItem('Notes')
        //     .then((value) => {
        //         const data = JSON.parse(value);
        //      //   console.log('name is ', data.name);
        //         alert(data.note)
        //     });
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
        padding: 5,
        fontSize: 18,
        height: 500,
        //   selectionColor:'#AB47BC',
        tintColor: '#AB47BC',
        backgroundColor: '#E8E8E8',
        textAlignVertical: 'top',
        justifyContent: "flex-start"
    }


});
export default NoteScreen