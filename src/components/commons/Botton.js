import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ButtonWrapper: {
        color: 'red',
    },
    buttonText: {
        brackgroundColor: "#ff5", 
    },
});

const Button = () => {


    return(

        <>
        <Text style={Styles.ButtonWrapper} >que onda!</Text>
        <Text style={{color: 'blue'}}>todo bien</Text>
        <Text style={[style.ButtonWrapper, styles.buttonText]}>great</Text>
        </>
    );
};

export default Button;