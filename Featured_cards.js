import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Featured_cards = ({ JobTitle, salary, employer, location, imageSource, backgroundColor }) => {
    return (
        <View style={styles.container} backgroundColor={backgroundColor} >
            
            <View style={styles.textContainer}>
                
                <View style={styles.toprow}>
                    <View style={styles.imageContainer}>
                        <Image source={imageSource} style={styles.image} />
                    </View>
                    <View>
                        <Text style={styles.title}>{JobTitle}</Text>
                        <Text style={styles.employer}>{employer}</Text>
                    </View>                    
                </View>
                <View style={styles.bottomrow}>
                    <Text style={styles.salary}>{salary}</Text>
                    <Text style={styles.location}>{location}</Text>
                </View>
            </View>
        </View>
    );
};

export default Featured_cards;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
        width: 280,
        height: 186,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    image: {
        width: 22,
        height: 22,
        padding: 5,
    },
    textContainer: {
        flex: 1,
        padding: 5,
    },
    toprow: {
        marginBottom: 75,
        flexDirection: 'row',

    },

    bottomrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    salary: {
        fontSize: 13,
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        marginHorizontal: 10,
        color: 'white',
    },
    employer: {
        fontSize: 13,
        color: 'white',
        marginLeft: 10,
    },
    location: {
        fontSize: 13,
        color: 'white',
    }
});
