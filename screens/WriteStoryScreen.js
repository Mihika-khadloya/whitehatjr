import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class WriteStoryScreen extends React.Component {

    render(){
        return(
            <View style = {styles.container}>
                <View>
                <Text>Write your story</Text>
                </View>
                <View>
                    <TextInput
                    style={styles.inputBox1}
                    placeholder="Story Title"/>
                    <TextInput
                    style={styles.inputBox2}
                    placeholder="Author"/>
                    <TextInput
                    style={styles.inputBox3}
                    placeholder="Write your story"/>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputBox1:{
        width: 150,
        height: 50,
        borderWidth: 1.5
    },
    inputBox2:{
        width: 150,
        height: 50,
        borderWidth: 1.5
    },
    inputBox3:{
        width: 150,
        height: 150,
        borderWidth: 1.5
    },
    button:{
        backgroundColor: '#F08080',
        padding: 10,
        margin: 10
    },
    buttonText:{
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'BOLD'
      
    },
    container2:{
        backgroundColor: '#E9967A'
    }
})