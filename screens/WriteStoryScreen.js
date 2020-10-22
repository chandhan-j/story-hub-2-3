import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Button,
  Alert,
  KeyboardAvoidingView
} from 'react-native';


import db from '../config';
import firebase from 'firebase';


export default class WriteStoryScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "",
      author: "",
      storyText: ""
    }
  }

  submitStory = () => {
    db.collection("stories").add({
      title: this.state.title,
      author: this.state.author,
      storyText: this.state.storyText
    })

    this.setState({
      title: "",
      author: "",
      storyText: ""
    })

    Alert.alert('The story has been submitted')
  }


  render() {
    return (
      <KeyboardAvoidingView style={styles.container} 
      behavior = "padding" enabled>

        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: "bold" }}>Story Hub</Text>
        
          <TextInput style={styles.inputBox} placeholder="Story Title" />
        
          <TextInput style={styles.inputBox} placeholder="Author" />

          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Write Your Story"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />





          
            <TouchableOpacity
              style={styles.submitButton}
              onPress = {this.submitStory}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    height: 30,
    borderWidth: 1.5,

    fontSize: 20
  },
  inputView: {
    flexDirection: 'row',
    margin: 10
  },

  textArea: {
    height: 150,
    justifyContent: "flex-start",
    width: 300,
    borderWidth: 1.5,
  },
  submitButton: {
    backgroundColor: '#FBC02D',
    width: 100,
    height: 30,
    alignSelf: 'center',
    marginTop: 10

  },
  submitButtonText: {

    textAlign: 'center',
    fontSize: 15,
    fontWeight: "bold",
    color: 'white'
  }
});
