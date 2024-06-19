import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Featured_cards from "./Featured_cards";

const Featured_jobs = () => {
    return (
        <View>
            <View flexDirection='row'>
                <Text style={styles.Categories}>Featured Jobs</Text>
                <Text style={styles.seeall}>See all</Text>
                </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardsSection}>
                <Featured_cards imageSource={require('./assets/fcbook.png')}  JobTitle={'Software Engineer'} salary={'$100,000/y'} employer={'Facebook'} location={'Accra, Ghana'} backgroundColor={'#5386e4'} />
                <Featured_cards imageSource={require('./assets/googlelogo.png')}  JobTitle={'Frontend Developer'} salary={'$90,000/y'} employer={'Google'} location={'LA, USA'} backgroundColor={'#04284a'}/>
            </ScrollView>
        
        </View>

    );

}

export default Featured_jobs;

const styles = StyleSheet.create({

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