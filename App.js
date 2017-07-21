import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome' ;
import { StyleSheet,Image,TextInput, Text,TouchableOpacity, KeyboardAvoidingView,View } from 'react-native';

const backgroundPic = require ('./img/background.jpg');
const logo    =      require('./img/logo.gif');
export default class App extends React.Component {
  render() {
    return (
         < Image 
          style = {[styles.backgroundImg,styles.container]}
          
          source = {backgroundPic}
          resizeMode = "cover"
         >
         <View style = {styles.logoContainer}>
              <Image
              source = {logo}
              />
          </View>
         
           <View style = {styles.inputContainer}>
            
          < Text> Email</Text>
           <  TextInput
               style={styles.input}
               underlineColorAndroid="transparent"         
                returnKeyType= "next"
           />
            <FontAwesome name = "user" size ={30} style= {styles.buttonsize}/>
          </View>
         < View style = {styles.inputContainer}>
         
        
              < Text> Password</Text>
           <  TextInput
               style={styles.input}
               secureTextEntry
               underlineColorAndroid="transparent"
                 returnKeyType= "go"
                 
           />
            <FontAwesome name = "lock" size ={30} style= {styles.buttonsize}/>
           
           </View>
           <TouchableOpacity activeOpacity ={.5}>
             <View style= {styles.buttonContainer}>
               <Text style = {styles.button}>Log In</Text>
              </View>
           </TouchableOpacity>
                       
               <TouchableOpacity activeOpacity= {.5}>
                 <View style ={styles.buttonContainer}>
                   <Text style={styles.forgotPasswordText}>Forgot Password? </Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity= {.5}>
                 <View>
                   <Text style={styles.SignUp}>SignUp </Text>
              </View>
              </TouchableOpacity>
               
  
               
              <View style={styles.container}/>          
        </Image>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  backgroundImg: {
   height : null,
   width : null,
},
  logoContainer :{
  flexGrow :1,
  marginBottom: 15,
   alignItems : 'center',
    paddingVertical : 40,
   
  },
iconContainer : {

},
inputContainer : {
  padding : 20,  
},
 input : {
  color  : "#FFF",
  height : 40,
  backgroundColor : '#ecf0f1', 
},
buttonContainer:{
  padding : 15,
  marginBottom: 15,
  backgroundColor:"#27ae60",
  alignItems: "center",
},
button:{
  
  color : "#FFF",
  
},
forgotPasswordText:{
  color  : "#FFF",

},
SignUp :{
   color : "#2ecc71",
   textAlign: 'right',
},
buttonsize:{
  position: 'absolute',
  paddingVertical : 45,
  paddingHorizontal : 20,
}
});
/*
               <TouchableOpacity activeOpacity= {.5}>
                 <View>
                   <Text style={styles.forgotPasswordText}>Forgot Password? </Text>
              </View>
              </TouchableOpacity>
               
              <View style={styles.container}/>*/