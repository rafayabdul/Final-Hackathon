import React,{useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Text,Alert,View,StyleSheet,TextInput,Image,ImageBackground,TouchableOpacity,ScrollView} from 'react-native';
import database, { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';




const CompSign=(props)=>{
    const [companyName, setCompanyName]=useState('')
    const [regNumber, setRegisterNumber]=useState('')
    // const [age, setAge]=useState('')
    const [email, setEmail]=useState('')
    // const [field, setField]=useState('')
    const [password, setPassword]=useState('')
    const [confirmPass, setConfirmPass]=useState('')
    const success='Congrats!'
  const failure='OOPS!'
  var message=''


  const CreateUser=()=>{
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    
    ddr()
    message='Account Successfully Created! login to continue!'
    Alertfunc(message,success);
    props.navigation.navigate('managestudents')
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      message='That email address is already in use!'
      Alertfunc(message,failure);
    }

    if (error.code === 'auth/invalid-email') {
      message='That email address is invalid!'
      Alertfunc(message,failure);
    }

    console.error(error);
  });
  }


  const Alertfunc = (errorMess,title) =>
  Alert.alert(
    title,
    errorMess,
    [
      {
        text: "OK",
        // onPress: () => console.log("Cancel Pressed"),
        // style: "cancel"
      }
      
    ],
    { cancelable: false }
  );

    const ddr=()=>{
      let User={
        companyName,
        // age,
        email,
        regNumber,
        // field,
        // Percentile,
        // selectedValue,
        password
        
      }
      database().ref('Company').push(User)
    }

    // const Check=(prps)=>{
    //     if(companyName!='' && regNumber!=' '&& email!=''&& password===confirmPass){
    //       ddr()
    //       Alertfunc(message,success)
    //       message='Successfully Registered'
    //       props.navigation.navigate('home')
          
    //     }
    //     else{
    //       message='recheck the fields'
    //       Alertfunc(message,failure)
          
    //     }
    // }


    return(
        
        <View style={{flex:1,width:'100%'}}>
            {/* <ScrollView style={{width:'100%'}}> */}
            <ImageBackground source={require('./assets/backgroundimg.jpg')} resizeMode={'cover'} style={{ flex: 1, width: null, height: null, }}>
                <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>
                    <Image source={require('./assets/mainlogo.png')} style={{ height: 100, width: 100 }}></Image>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#b24000', alignSelf: 'center' }}>RAF's Collegiate</Text>

                </View>

          <View style={{marginTop:20}}>  
       

<TextInput
//   value={firstName}
  onChangeText={text=>setCompanyName(text)}
    keyboardType="default"
    placeholderTextColor="#817f81"
    placeholder="Company Name"
    style={{
      alignSelf: 'center',
      width: '80%',
      marginTop: 30,
      paddingLeft: 10,
      height: 60,
      borderColor: '#252525',
      borderRadius: 10,
    //   fontWeight: '500',
      fontSize: 20,
      padding: 5,
      backgroundColor: 'white',
      borderWidth: 1,
    }}
  />

  <TextInput
    // value={lastName}
    onChangeText={text=>setRegisterNumber(text)}
    placeholderTextColor="#817f81"
    placeholder="Govt.Reg.Number(TT-nn-445550)"
    style={{
      alignSelf: 'center',
      width: '80%',
      marginTop: 10,
      paddingLeft: 10,
      height: 60,
      borderColor: '#252525',
      borderRadius: 10,
    //   fontWeight: '500',
      fontSize: 20,
      padding: 5,
      backgroundColor: 'white',
      borderWidth: 1,
    }}
  />



  <TextInput
//   value={email}
  onChangeText={text=>setEmail(text)}

    placeholderTextColor="#817f81"
    placeholder="Enter Email"
    keyboardType="email-address"
    style={{
      alignSelf: 'center',
      width: '80%',
      marginTop: 10,
      paddingLeft: 10,
      height: 60,
      borderColor: '#252525',
      borderRadius: 10,
    //   fontWeight: '500',
      fontSize: 20,
      padding: 5,
      backgroundColor: 'white',
      borderWidth: 1,
    }}
  />


  

 


  <TextInput
    // value={password}
    onChangeText={(text)=>setPassword(text)}
  
    placeholderTextColor="#817f81"
    placeholder="Enter Password"
    secureTextEntry={true}
    style={{
      alignSelf: 'center',
      width: '80%',
      marginTop: 10,
      paddingLeft: 10,
      height: 60,
      borderColor: '#252525',
      borderRadius: 10,
    //   fontWeight: '500',
      fontSize: 20,
      padding: 5,
      backgroundColor: 'white',
      borderWidth: 1,
    }}
  />
  <TextInput
//   value={confirmPass}
  onChangeText={text=>setConfirmPass(text)}
    placeholderTextColor="#817f81"
    placeholder="Confirm Password"
    secureTextEntry={true}
    style={{
      alignSelf: 'center',
      width: '80%',
      marginTop: 10,
      paddingLeft: 10,
      height: 60,
      borderColor: '#252525',
      borderRadius: 10,
    //   fontWeight: '500',
      fontSize: 20,
      padding: 5,
      backgroundColor: 'white',
      borderWidth: 1,
    }}
  />
    
  <TouchableOpacity
    onPress={CreateUser}
 
    style={{
      height: 60,
      width: '40%',
      backgroundColor: '#dba600',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginTop:10,
    }}>
    <Text
      style={{
        color: 'black',
        fontSize: 22,
        // fontWeight: '500',
      }}>
      Sign Up
    </Text>
  </TouchableOpacity>


  <Text style={{fontSize:20,fontStyle:'italic',
      textAlign:'center',color:'blue',marginTop:10,marginBottom:30}}
      onPress={() =>props.navigation.navigate('home')}
      >
          Cancel
      </Text>
  
 


  
</View>
</ScrollView>
            </ImageBackground>
            {/* </ScrollView> */}
        </View>
       
    )
}
export default CompSign;