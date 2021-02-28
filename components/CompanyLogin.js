import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, Alert, Modal, Pressable, View, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, SectionList, StatusBar } from 'react-native';

const CompanyLogin = () => {
    const [filterModalVisible, setFilterModalVisible] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={filterModalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setFilterModalVisible(!filterModalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {/* <Text style={styles.modalText}>Hello World!</Text> */}
                        <TextInput placeholder="Field" placeholderTextColor='black' style={
                            { fontSize: 20, width: 250, borderBottomColor: 'blue', borderBottomWidth: 1, paddingBottom: 3 }
                        }></TextInput>
                        <TextInput placeholder="Percentile" keyboardType="decimal-pad" placeholderTextColor='black' style={
                            { fontSize: 20, width: 250, borderBottomColor: 'blue', borderBottomWidth: 1, paddingBottom: 3, marginTop: 18, marginBottom: 10 }
                        }></TextInput>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                        // onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Search</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setFilterModalVisible(!filterModalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        {/* <Text style={{fontSize:15, color:'blue', marginTop:20}}>New Student? SignUp Here!</Text> */}
                    </View>
                </View>
            </Modal>


            <ImageBackground source={require('./assets/backgroundimg.jpg')} resizeMode={'cover'} style={{ flex: 1, width: null, height: null, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>
                    <Image source={require('./assets/mainlogo.png')} style={{ height: 100, width: 100 }}></Image>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#b24000', alignSelf: 'center' }}>RAF's Collegiate</Text>

                </View>

                <View style={{ flex: 5, borderRadius: 20, backgroundColor: 'green', marginVertical: 20, marginHorizontal: 10 }}>
                    <ScrollView width='100%'>
                        <Text style={{ fontSize: 20, marginVertical: 10, color: 'white', fontWeight: 'bold', marginLeft: '30%' }}>Students List</Text>
                        <Pressable
                            onPress={() => setFilterModalVisible(true)} style={{ borderRadius: 20, width: '30%', elevation: 2, backgroundColor: 'blue', position: 'absolute', top: 0, right: 2 }}><Text style={{ fontSize: 17, paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center', fontWeight: 'bold',color:"white" }}>Filter</Text></Pressable>
                    </ScrollView>
                </View>




            </ImageBackground>
        </View>
    )



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
        backgroundColor: "#e6bf00",
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
        backgroundColor: "#F194FF",
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
export default CompanyLogin;