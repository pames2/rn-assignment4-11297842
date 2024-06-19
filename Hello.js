import React from "react";
import { StyleSheet, Text, View } from "react-native"; 

const Hello = () => {

    return (
        <View>
        <View style={styles.helloSection}>
          <Text style={styles.jobizz}>Jobizz</Text>
          <Text style={styles.Hello}>Hello Back 👋</Text>
          <Text style={styles.subText}>Let’s log in. Apply to jobs!</Text>
        </View>
        </View>

    )

};

export default Hello;

const styles = StyleSheet.create({
    
      helloSection: {
        marginTop: 100,
    
    },
    
      jobizz: {
        fontSize: 22,
        color: '#356899',
        marginBottom: 20,
      },
    
      Hello: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },

      subText: {
        fontSize: 14,
        color: '#c2c2c2',
        fontWeight: 'light',
      },
    
    

});