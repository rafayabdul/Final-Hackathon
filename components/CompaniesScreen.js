import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, Alert, Modal, Pressable, View, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, SectionList, StatusBar } from 'react-native';


const Companies = (props) => {

    return (
        <View style={{ flex: 1 }}>
           <ImageBackground source={require('./assets/backgroundimg.jpg')} resizeMode={'cover'} style={{ flex: 1, width: null, height: null, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>
                    <Image source={require('./assets/mainlogo.png')} style={{ height: 100, width: 100 }}></Image>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#b24000', alignSelf: 'center' }}>RAF's Collegiate</Text>

                </View>

                <View style={{ flex: 5, borderRadius: 20, backgroundColor: 'green', marginVertical: 20, marginHorizontal: 10 }}>
                    <ScrollView width='100%'>
                        <Text style={{ fontSize: 20, marginVertical: 20, color: 'white', fontWeight: 'bold', marginLeft: '35%' }}>Companies</Text>
                        {/* <Pressable
                onPress={() => setFilterModalVisible(true)} style={{ borderRadius:20,width:'30%',elevation: 2, backgroundColor:'#dba600',position:'absolute',top:0,right:2}}><Text style={{fontSize:17,paddingVertical:5,paddingHorizontal:10,alignSelf:'center',fontWeight:'bold'}}>Filter</Text></Pressable> */}
                    </ScrollView>
                </View>




            </ImageBackground>


        </View>
    )
}
export default Companies;