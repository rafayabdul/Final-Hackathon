import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, Alert, View, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import database, { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


const SignUpModel = (props) => {
    const [selectedValue, setSelectedValue] = useState();
    const [firstName,setFirstName]=useState();
    const [LastName,setLastName]=useState();
    const [email,setEmail]=useState();
    const [field,setField]=useState();
    const [percentile,setPercentile]=useState();
    const [age,setAge]=useState();
    const [password,setPassword]=useState();
    const [cpassword,setCpassword]=useState();
    const success='Congrats!'
  const failure='OOPS!'
  var message=''




  const CreateUser=()=>{
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    
    GoData()
    message='Account Successfully Created! login to continue!'
    Alertfunc(message,success);
    props.navigation.navigate('managecompanies')
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


    const GoData=()=>{
        let User={
          firstName,
          age,
          email,
          LastName,
          field,
          percentile,
          selectedValue,
          password
          
        }
        database().ref('students').push(User)
      }

      const GoingDataProcess=()=>{
        if(firstName!=''){
          if(LastName!=''){
            if(email!=''){
              if(field!=''){
                if(percentile>0 && percentile<101){
                  if(selectedValue!=undefined && selectedValue!='null'){
                    if(age>17){
                      if(password!='' && password===cpassword ){
                        CreateUser()
                       
                      }
                      else{
                        message='password not matched!'
                        Alertfunc(message,failure)
                      }
                    }
                    else{
                      message='Your age is less!'
                      Alertfunc(message,failure)
                    }
                  }
                  else{
                    message='Enter Grade'
                    Alertfunc(message,failure)
                  }
                }
                else{
                  message='Enter Percentile(must be between 100)'
          Alertfunc(message,failure)
                }
              }
              else{
                message='Enter Field'
          Alertfunc(message,failure)
              }
            }
            else{
              message='Enter E-mail'
          Alertfunc(message,failure)
            }
          }
          else{
            message='Enter Lastname'
          Alertfunc(message,failure)
          }
        }
        else{
          message='Enter Firstname'
          Alertfunc(message,failure)
        }
      }
    return (
        <ScrollView style={{ width: '100%' }}>
            <View style={{ flex: 1 }}>
            <ImageBackground source={require('./assets/backgroundimg.jpg')} resizeMode={'cover'} style={{ flex: 1, width: null, height: null, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>
                    <Image source={require('./assets/mainlogo.png')} style={{ height: 100, width: 100 }}></Image>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#b24000', alignSelf: 'center' }}>RAF's Collegiate</Text>

                </View>

                    <View style={{ marginTop: 20 }}>


                        <TextInput
                        onChangeText={(text)=>setFirstName(text)}
                         placeholder="First Name" placeholderTextColor='black' style={
                            { fontSize: 20, width: 250, borderBottomColor: '#330066', borderBottomWidth: 2, paddingBottom: 3, alignSelf: "center", marginTop: 30, }
                        }></TextInput>

                        <TextInput
                        onChangeText={(text)=>setLastName(text)}
                         placeholder="Last Name" placeholderTextColor='black' style={
                            { fontSize: 20, width: 250, borderBottomColor: '#330066', borderBottomWidth: 2, paddingBottom: 3, alignSelf: "center", marginTop: 30, }
                        }></TextInput>



                        <TextInput 
                        onChangeText={(text)=>setEmail(text)}
                        placeholder="Enter Email" keyboardType='email-address' placeholderTextColor='black' style={
                            { fontSize: 20, width: 250, borderBottomColor: '#330066', borderBottomWidth: 2, paddingBottom: 3, alignSelf: "center", marginTop: 30, }
                        }></TextInput>

                        <TextInput
                        onChangeText={(text)=>setField(text)}
                         placeholder="Enter Your Field" placeholderTextColor='black' style={
                            { fontSize: 20, width: 250, borderBottomColor: '#330066', borderBottomWidth: 2, paddingBottom: 3, alignSelf: "center", marginTop: 30, }
                        }></TextInput>


                        <TextInput
                        onChangeText={(text)=>setPercentile(text)}
                         placeholder="Enter Last Percentage" placeholderTextColor='black' style={
                            { fontSize: 20, width: 250, borderBottomColor: '#330066', borderBottomWidth: 2, paddingBottom: 3, alignSelf: "center", marginTop: 30, }
                        }></TextInput>
                        <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 30, fontWeight: 'bold' }}>Choose Last Grade</Text>
                        <Picker
                            selectedValue={selectedValue}

                            prompt={'Choose Your Matric Grade'}
                            // mode={'dropdown'}        
                            style={{ height: 50, width: 150, border: 2, borderColor: 'white', color: 'black', alignSelf: 'center' }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="null" value="null" />
                            <Picker.Item label="A+" value="A+" />
                            <Picker.Item label="A" value="A" />
                            <Picker.Item label="B" value="B" />
                            <Picker.Item label="C" value="C" />
                            <Picker.Item label="D" value="D" />
                            <Picker.Item label="E" value="E" />
                            <Picker.Item label="U" value="U" />
                        </Picker>
                        <TextInput 
                        onChangeText={(text)=>setAge(text)}
                        placeholder="Enter Your Age" keyboardType='number-pad' placeholderTextColor='black' style={
                            { fontSize: 20, width: 250, borderBottomColor: '#330066', borderBottomWidth: 2, paddingBottom: 3, alignSelf: "center", marginTop: 20, }
                        }></TextInput>

                        <TextInput
                        onChangeText={(text)=>setPassword(text)}
                         placeholder="Enter Password" secureTextEntry={true} placeholderTextColor='black' style={
                            { fontSize: 20, width: 250, borderBottomColor: '#330066', borderBottomWidth: 2, paddingBottom: 3, alignSelf: "center", marginTop: 30, }
                        }></TextInput>
                        <TextInput 
                        onChangeText={(text)=>setCpassword(text)}
                        placeholder="Confirm Password" secureTextEntry={true} placeholderTextColor='black' style={
                            { fontSize: 20, width: 250, borderBottomColor: '#330066', borderBottomWidth: 2, paddingBottom: 3, alignSelf: "center", marginTop: 30, }
                        }></TextInput>

                        <TouchableOpacity
                        onPress={GoingDataProcess}

                            style={{
                                height: 60,
                                width: '60%',
                                backgroundColor: '#dba600',

                                justifyContent: 'center',
                                alignSelf: 'center',
                                alignItems: 'center',
                                borderRadius: 8,
                                marginTop: 20,


                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 22,
                                    fontWeight: '600',

                                }}>
                                Sign Up
            </Text>
                        </TouchableOpacity>


                        <Text style={{
                            fontSize: 20, fontStyle: 'italic',
                            textAlign: 'center', color: 'blue', marginTop: 10, marginBottom: 30
                        }}
                          onPress={() =>props.navigation.navigate('home')}
                        >
                            Cancel
      </Text>





                    </View>

                </ImageBackground>
            </View>
        </ScrollView>
    )

}

export default SignUpModel;