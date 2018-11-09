import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableNativeFeedback, AsyncStorage} from 'react-native';
import {Button} from 'native-base';


// const Notes = [
//     {title: "Class notes", note: "Gonna do a lot of work to today, hell yeah!!!", date: "11-2-2012"},
//     {title: "Useful websites", note: "list of sites that are usefull", date: "11-2-2012"},
//     {title: "bio class", note: "learn a lot of dirty things today", date: "11-2-2012"},
//     {title: "India", note: "Delhi", date: "11-2-2012"},
//
// ]


class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notesList:[]
        };

    }
    render() {
        this.loadData()
        return (
            <View style={styles.container}>
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
                <Text style={{marginLeft: 5, fontSize: 28, color: '#AB47BC'}}>Notes</Text>
                <FlatList
                    data={this.state.notesList}
                    extraData={this.state}
                    renderItem={({item}) => (
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.SelectableBackground()}>
                            <View style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 15}}>
                                <Text style={{fontSize: 24, color: "#787878"}}>{item.title}</Text>
                                <Text style={{fontSize: 14, color: "#787878"}}>{item.date}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
    async loadData() {
        //alert(JSON.stringify(this.state.notesList))
        this.state.notesList = JSON.parse(await AsyncStorage.getItem('Notes'))
        //alert(JSON.stringify(this.state.notesList))
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
export default HomeScreen
