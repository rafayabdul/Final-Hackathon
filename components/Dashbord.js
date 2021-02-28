import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, Alert, Pressable, View, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import database, { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


const DashboardScreen = (props) => {
    const[stdata,setStudData]=useState()

    database().ref("students")
    .on('value', snapshot => {
        const datas=snapshot.val();
        let data=Object.values(datas)
        setStudData( data );
       
      });


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
               
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>
                    <Image source={require('./assets/mainlogo.png')} style={{ height: 100, width: 100 }}></Image>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#b24000', alignSelf: 'center' }}>RAF's Collegiate</Text>

                </View>
                <View style={{ flex: 5, borderRadius: 20, backgroundColor: 'yellow', marginVertical: 20, marginHorizontal: 10 }}>
                   
                        <Text style={{ fontSize: 20, marginVertical: 20, color: 'black', fontWeight: 'bold', marginLeft: '35%' }}>Students</Text>
                        {/* <Pressable
                onPress={() => setFilterModalVisible(true)} style={{ borderRadius:20,width:'30%',elevation: 2, backgroundColor:'#dba600',position:'absolute',top:0,right:2}}><Text style={{fontSize:17,paddingVertical:5,paddingHorizontal:10,alignSelf:'center',fontWeight:'bold'}}>Filter</Text></Pressable> */}
                        <Pressable style={{ borderRadius: 20, width: '30%', elevation: 2, backgroundColor: '#dba600', position: 'absolute', top: 0, right: 2 }}><Text style={{ fontSize: 17, paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center', fontWeight: 'bold', color: "white" }}>Manage</Text></Pressable>
                        <ScrollView width='100%'>
                        
                             <View style={{backgroundColor:"yellow",marginTop:30,marginHorizontal:20,borderRadius:20}}> 
                        {
                            
                stdata!=undefined?
                stdata.map((v,i)=>{
                    return(
                       

                        <Text style={{color:"black" , fontSize:20,fontWeight:"bold" , paddingLeft:30 , paddingVertical:20}} key={i}>First Name:{v.firstName}{"\n"}Last Name:{v.LastName}{"\n"}Age:{v.age}{"\n"}Email:{v.email}{"\n"}Field:{v.field}{"\n"}Password:{v.password}{"\n"}Percentage:{v.percentile}{"\n"}Grade:{v.selectedValue} </Text>
                        
                        
                       
                        )
                  
                })
                :null


            }
            </View>
                        </ScrollView>
                  
                </View>

                <View style={{ flex: 5, borderRadius: 20, backgroundColor: 'yellow', marginVertical: 20, marginHorizontal: 10 }}>
                   
                   <Text style={{ fontSize: 20, marginVertical: 20, color: 'black', fontWeight: 'bold', marginLeft: '35%' }}>Students</Text>
                   {/* <Pressable
           onPress={() => setFilterModalVisible(true)} style={{ borderRadius:20,width:'30%',elevation: 2, backgroundColor:'#dba600',position:'absolute',top:0,right:2}}><Text style={{fontSize:17,paddingVertical:5,paddingHorizontal:10,alignSelf:'center',fontWeight:'bold'}}>Filter</Text></Pressable> */}
                   <Pressable style={{ borderRadius: 20, width: '30%', elevation: 2, backgroundColor: '#dba600', position: 'absolute', top: 0, right: 2 }}><Text style={{ fontSize: 17, paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center', fontWeight: 'bold', color: "white" }}>Manage</Text></Pressable>
                   <ScrollView width='100%'>
                   
                        <View style={{backgroundColor:"yellow",marginTop:30,marginHorizontal:20,borderRadius:20}}> 
                        {
                comdata!=undefined?
                comdata.map((v,y)=>{
                    return(
                        
                        <View style={{backgroundColor:"yellow",marginTop:30,marginHorizontal:20,borderRadius:20}}>

<Text style={{color:"black" , fontSize:20,fontWeight:"bold" , paddingLeft:30 , paddingVertical:20}} key={y}>Company Name:{v.companyName}{"\n"}Email:{v.email}{"\n"}Password:{v.password}{"\n"}Registration Number:{v.regNumber} </Text>

                        </View>
                       
                        )
                  
                })
                :null
            }
       </View>
                   </ScrollView>
             
           </View>


            </ImageBackground>
        </View>
    )
}

export default DashboardScreen;