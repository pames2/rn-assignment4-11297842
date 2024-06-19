import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Popular_cards from './Popular_cards';

const Popular_jobs = () => {
    return (
            
  <View style={styles.container}>
    <View flexDirection='row'>
                <Text style={styles.Categories}>Popular Jobs</Text>
                <Text style={styles.seeall}>See all</Text>
                </View>
  <Popular_cards  imageSource={require('./assets/bgking.png')}  JobTitle={'Jr Executive'} salary={'$96,000/y'} employer={'Burger King'} location={'Los Angeles, US'} />
  <Popular_cards  imageSource={require('./assets/fcbook.png')}  JobTitle={'Product Manager'} salary={'$84,000/y'} employer={'Facebook'} location={'Florida, US'} />
  <Popular_cards  imageSource={require('./assets/beatz.png')}  JobTitle={'Product Manager'} salary={'$86,000/y'} employer={'Beats'} location={'Florida, US'} />

</View>




)
};

export default Popular_jobs;


const styles = StyleSheet.create({

    title: {
        fontWeight: 'bold',
        fontSize: 17,
        margin: 20,
        marginLeft: 20,
    },

    Categories: {

      fontWeight: 'bold',
      fontSize: 17,
      margin: 20,
      marginLeft: 20,
  },
  seeall: {
      margin: 20,
      marginLeft: 140,
      justifyContent: 'space-between',
      color: '#95969D',
  },



 
});