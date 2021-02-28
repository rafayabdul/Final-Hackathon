import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, Alert, Pressable, View, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, SectionList, StatusBar } from 'react-native';
import database, { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const ManageCompanies = () => {

    const[comdata,setComData]=useState()

    database().ref("Company")
    .on('value', snapshot => {
        const datas=snapshot.val();
        let data=Object.values(datas)
        setComData( data );
       
      });


    return (
        
        <View style={{ flex: 1 }}>
            
            <ImageBackground source={require('./assets/backgroundimg.jpg')} resizeMode={'cover'} style={{ flex: 1, width: null, height: null, }}>
                <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>
                    <Image source={require('./assets/mainlogo.png')} style={{ height: 100, width: 100 }}></Image>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#b24000', alignSelf: 'center' }}>RAF's Collegiate</Text>

                </View>
            
            {
                comdata!=undefined?
                comdata.map((v,i)=>{
                    return(
                        
                        <View style={{backgroundColor:"yellow",marginTop:30,marginHorizontal:20,borderRadius:20}}>

<Text style={{color:"black" , fontSize:20,fontWeight:"bold" , paddingLeft:30 , paddingVertical:20}} key={i}>Company Name:{v.companyName}{"\n"}Email:{v.email}{"\n"}Password:{v.password}{"\n"}Registration Number:{v.regNumber} </Text>

                        </View>
                       
                        )
                  
                })
                :null
            }
        </ScrollView>
            </ImageBackground>
            
            </View>
          


              
     
    )

}
export default ManageCompanies;