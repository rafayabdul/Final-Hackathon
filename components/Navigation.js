import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./homescreen"
import SignUpModel from "./signupmodelscreen"
import ManageStudents from "./ManageStudents"
import Companies from "./CompaniesScreen"
import DashboardScreen from "./Dashbord"
import CompSign from "./companysign";
import ManageCompanies from "./ManageCompanies"

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
      <Stack.Screen name="dashboard" component={DashboardScreen} />
      <Stack.Screen name="managecompanies" component={ManageCompanies} />
      <Stack.Screen name="companysign" component={CompSign} />
       
        <Stack.Screen name="managestudents" component={ManageStudents} />
        <Stack.Screen name="signup" component={SignUpModel} />
        <Stack.Screen name="company" component={Companies} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;