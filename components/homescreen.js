// import React from 'react';
import React, { useState } from "react";
import { Text, Alert, Pressable, Modal, View, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import database, { firebase } from '@react-native-firebase/database';

const HomeScreen = (props) => {


      const sign_in =()=>{

 
  
    auth()
    .signInWithEmailAndPassword(studentEmail, studentPassword)
    .then(() => {
        setStudentModalVisible(!studentModalVisible)
        props.navigation.navigate('managecompanies')
      // console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        message='Wrong Password!'
        Alertfunc(message,failure);
      }
  
      if (error.code === 'auth/invalid-email') {
        message='That email address is invalid!'
        Alertfunc(message,failure);
      }

      if (error.code === 'auth/user-not-found') {
        message='Not registerd email ! please enter registered email OR signUp Now if new user'
        Alertfunc(message,failure);
      }
      if (error.code === 'auth/unknown') {
        message='No Internet Connection'
        Alertfunc(message,failure);
      }
  
      console.error(error);
    });
  }



  const companysign_in =()=>{

 
  
    auth()
    .signInWithEmailAndPassword(companyEmail, setcompanyPassword)
    .then(() => {
        setCompanyModalVisible(!companyModalVisible);
        props.navigation.navigate('managestudents')
      // console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        message='Wrong Password!'
        Alertfunc(message,failure);
      }
  
      if (error.code === 'auth/invalid-email') {
        message='That email address is invalid!'
        Alertfunc(message,failure);
      }

      if (error.code === 'auth/user-not-found') {
        message='Not registerd email ! please enter registered email OR signUp Now if new user'
        Alertfunc(message,failure);
      }
      if (error.code === 'auth/unknown') {
        message='No Internet Connection'
        Alertfunc(message,failure);
      }
  
      console.error(error);
    });
  }


    const [studentModalVisible, setStudentModalVisible] = useState(false);
    const [adminModalVisible, setAdminModalVisible] = useState(false);
    const [companyModalVisible, setCompanyModalVisible] = useState(false);
  const [studentEmail, setStudentEmail]=useState('')
  const [studentPassword, setStudentPassword]=useState('')
  const [adminEmail, setAdminEmail]=useState('')
  const [adminPassword, setAdminPassword]=useState('')
  const [companyEmail, setCompanyEmail]=useState('')
  const [setcompanyPassword, setCompanyPassword]=useState('')
  const [studData , setStudData] = useState({});
  const admin='Rafay@sylani.com'
  const adpass='sylani12345'
  var keyss=''
  const success='Congrats!'
  const failure='OOPS!'
  var message=''
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

  

// const func=()=>{
//   database()
//   .ref('students')
//   .on('value', snapshot => {
//     const datas=snapshot.val();
//     let data=Object.values(datas)
//    setStudData( data );
   
//   });
// if(studData!=undefined){
//   for(var i=0; i<studData.length;i++){
//     if(studData[i].email===studentEmail){
//       keyss=i
//       console.log('SUCCESS'+i)
//       break
//     }
//     else{
//       console.log('FAILURE')
//     }
//   }
//   Confirm()
// }
// // console.log(studData[i].password)


// }

// const Confirm=()=>{
//  if(studData[keyss].password==studentPassword){
//   message='SignIn Successfull'
//   Alertfunc(message,success)
//   setStudentModalVisible(!studentModalVisible)
//   props.navigation.navigate('Company')
//  }
//  else{
//   message='SignIn failed'
//   Alertfunc(message,failure)
//  }
// }


  const JumpToSign=()=>{
    setStudentModalVisible(!studentModalVisible)
    props.navigation.navigate('signup')
  }
  const JumpTocomSign=()=>{
    setCompanyModalVisible(!companyModalVisible);
    props.navigation.navigate('companysign')
  }
 

  const adminLOG=()=>{
    if(adminEmail===admin && adpass==adminPassword){
      message='Admin Logged In'
      Alertfunc(message,success)
      setAdminModalVisible(!adminModalVisible)
    props.navigation.navigate('dashboard')
    }
    else{
      message='you are Not Admin'
      Alertfunc(message,failure)
    }
  }
    return ((
        <View style={{ flex: 1 }}>

            {/* STUDENT CHOICES */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={studentModalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!studentModalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {/* <Text style={styles.modalText}>Hello World!</Text> */}
                        <TextInput
                        onChangeText={(text)=>setStudentEmail(text)}
                         placeholder="E-mail" keyboardType='email-address' placeholderTextColor='white' style={
                            { fontSize: 20, width: 250, borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: 3 }
                        }></TextInput>
                        <TextInput
                        onChangeText={(text)=>setStudentPassword(text)}
                         placeholder="Password" secureTextEntry={true} placeholderTextColor='white' style={
                            { fontSize: 20, width: 250, borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: 3, marginTop: 18, marginBottom: 10 }
                        }></TextInput>
                        <Pressable
                        onPress={sign_in}
                            style={[styles.button, styles.buttonClose]}
                        // onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>LogIn</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setStudentModalVisible(!studentModalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Text onPress={JumpToSign} style={{ fontSize: 15, color: 'white', marginTop: 20 }}>New Student? SignUp Here!</Text>
                    </View>
                </View>
            </Modal>

            {/* ADMIN LOGIN */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={adminModalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setAdminModalVisible(!adminModalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText} style={{color:"white"}}>(for only checking purpose)email:Rafay@sylani.com  Password:sylani12345</Text>
                        <TextInput
                        onChangeText={(text)=>setAdminEmail(text)}
                         placeholder="E-mail" keyboardType='email-address' placeholderTextColor='white' style={
                            { fontSize: 20, width: 250, borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: 3 }
                        }></TextInput>
                        <TextInput
                         onChangeText={(text)=>setAdminPassword(text)}
                         placeholder="Password" secureTextEntry={true} placeholderTextColor='white' style={
                            { fontSize: 20, width: 250, borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: 3, marginTop: 18, marginBottom: 10 }
                        }></TextInput>
                        <Pressable
                        onPress={adminLOG}
                            style={[styles.button, styles.buttonClose]}
                        // onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>LogIn</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setAdminModalVisible(!adminModalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        {/* <Text style={{fontSize:15, color:'blue', marginTop:20}}>New Student? SignUp Here!</Text> */}
                    </View>
                </View>
            </Modal>

            {/* COMPANY MODAL */}

            <Modal
                animationType="slide"
                transparent={true}
                visible={companyModalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setCompanyModalVisible(!CompanyModalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {/* <Text style={styles.modalText}>Hello World!</Text> */}
                        <TextInput 
                        onChangeText={(text)=>setCompanyEmail(text)}
                         placeholder="E-mail" keyboardType='email-address' placeholderTextColor='white' style={
                            { fontSize: 20, width: 250, borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: 3 }
                        }></TextInput>
                        <TextInput 
                        onChangeText={(text)=>setCompanyPassword(text)}
                        placeholder="Password" secureTextEntry={true} placeholderTextColor='white' style={
                            { fontSize: 20, width: 250, borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: 3, marginTop: 18, marginBottom: 10 }
                        }></TextInput>
                        <Pressable
                        onPress={companysign_in}
                            style={[styles.button, styles.buttonClose]}
                        // onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>LogIn</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setCompanyModalVisible(!companyModalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Text onPress={JumpTocomSign} style={{fontSize:15, color:'blue', marginTop:20}}>New Company? SignUp Here!</Text>
                    </View>
                </View>
            </Modal>


            <ImageBackground source={require('./assets/backgroundimg.jpg')} resizeMode={'cover'} style={{ flex: 1, width: null, height: null, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>
                    <Image source={require('./assets/mainlogo.png')} style={{ height: 100, width: 100 }}></Image>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#b24000', alignSelf: 'center' }}>RAF's Collegiate</Text>

                </View>
                <View style={{margin:20,flexDirection:'column',justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20,margin:'auto',color:'white',alignSelf:'center'}}>An Institution Empowering Youth To Better Future!</Text></View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: '20%' }}>
                    <TouchableOpacity
                        onPress={() => setStudentModalVisible(true)}

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
                            Student Login
            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        //   onPress={sign_in}
                        onPress={() => setAdminModalVisible(true)}

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
                            Admin Login
            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        //   onPress={sign_in}
                        onPress={() => setCompanyModalVisible(true)}

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
                            Company LogIn
            </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>



        </View>
    ))

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "green",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#dba600",
    },
    buttonClose: {
        backgroundColor: "#dba600",
        width: 100,
        marginTop: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default HomeScreen;