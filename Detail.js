import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";



const Detail = ({title, value}) => {
  return (
    <View style={styles.app}>

      <View style={styles.text_info}>
        <Text style={styles.info}> {title} </Text>
        <Text style={styles.answer}> {value} </Text>
      </View>
      <View style={styles.seperator} />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  app: { 
    marginHorizontal :10,

},


  text_info: {
    flexDirection: "row",

  },

  info: {
    fontWeight: "bold",
    color: "#525252",
    flex: 1,
    fontSize:15,

  },

  answer: {
    color: "#537791",
    fontSize:15,

  },

  seperator: {
    borderWidth: 1,
    borderColor: "#e7e6e1",
    marginVertical:7
  }
});
