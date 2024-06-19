import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Popular_cards = ({ JobTitle, salary, employer, location, imageSource }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.row}>
                    <Text style={styles.title}>{JobTitle}</Text>
                    <Text style={styles.salary}>{salary}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.employer}>{employer}</Text>
                    <Text style={styles.location}>{location}</Text>
                </View>
            </View>
        </View>
    );
};

export default Popular_cards;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    image: {
        width: 47,
        height: 47,
    },
    textContainer: {
        flex: 1,
        padding: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        marginHorizontal: 10,
    },
    employer: {
        fontSize: 13,
        color: 'grey',
        marginLeft: 10,
    },
    location: {
        fontSize: 13,
        color: 'grey',
    }
});
