import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>       
        <Text style={styles.title}>Emergency car</Text>
        <Text style={styles.subtitle}>Una aplicacion para el control del carro de emergency</Text>
        <Image 
          style={styles.logo}
          source={require('./assets/siren_emergency.png')}
        />        
        <View style={styles.inputContainer}>          
          <TextInput style={styles.input} placeholder='User Name' />
          <TextInput style={styles.input} placeholder='Your password' /> 
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.titleButton}>Login</Text>  
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.titleButton}>Register</Text>  
          </TouchableOpacity>                  
          <Text style={styles.resetPass}>Forgot your Password ?</Text>
        </View>
        <View style={styles.about}>
          <Text style={styles.me}>Creado y desarrollado por Gabriel Agüero</Text>        
          <Text style={styles.me}>Developer Front-End</Text>        
          <Text style={styles.me}>www.gabydev.dev</Text>        
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: 50,
  },
  container: {
    flex: 1,    
    marginHorizontal: 10,    
    paddingTop: StatusBar.currentHeight
  },  
  title: {
    fontSize: 30,      
    color: '#09f',    
    fontWeight:'bold',    
    marginVertical: 10,
    textAlign:'center',
    marginBottom:30
  },
  subtitle: {    
    marginHorizontal: 15,
    fontSize: 18,
    textAlign: 'center',
    color: '#BFBFBF',
    fontWeight:'bold'
  },
  inputContainer:{          
    marginTop: 30,
  },
  input:{        
    margin: 10,    
    paddingHorizontal: 20,
    height:40,
    backgroundColor: '#E6E6E6' ,
    borderRadius: 3,    
    borderWidth: 1,
    borderColor: '#D6D6D6',
    color:'#1E1E1E',
  },
  buttonLogin:{
    height:45,
    backgroundColor: '#09f',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    borderRadius: 3,
  },
  buttonRegister:{
    height:45,
    backgroundColor: '#AA7DCE',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    borderRadius: 3,
  },
  titleButton:{
    fontSize:18,        
  },
  resetPass:{    
    paddingHorizontal:10,
    textAlign:'right',
    color:'#A8577E',
    fontWeight:'bold'
  },
  logo:{
    width: 80,
    height:80,
    marginTop:30,
    marginHorizontal: 150,        
  },
  about:{
    flex: 2,
    alignItems:'center',
    justifyContent:'flex-end',
    margin:15,
  },
  me:{
    color:'#9B9B9B',
    fontWeight:'600'
  }
});
