import React from "react";
import { Button, Image, StyleSheet, Text, View,ImageBackground  } from "react-native";
import Detail from "./Detail";

function App() {
  return (
    <View style={styles.app}>
      <ImageBackground style={styles.bgImage} source={{uri: 'https://i.imgur.com/27iwIwO_d.webp?maxwidth=760&fidelity=grand'}}/>
     
     <View style={styles.position_container} >
        <Image
        style={styles.image}
        source={{
          uri:
            "https://i.imgur.com/F0ObALD_d.webp?maxwidth=760&fidelity=grand"
        }}
      />

      <Detail title='Motor' value='Tümosan' />
      <Detail title='Nominal Motor Gücü (HP)' value='76/85/95' />
      <Detail title='Silindir Sayısı/Aspirasyon' value='4/Turbo Intercooler' />
      <Detail title='Silindir Hacmi(Litre)' value='3.9' />
      <Detail title='Yakıt Depo Kapasitesi (Litre)' value='60' />
      <Detail title='Vites Seçeneği' value='12 ileri 12 geri' />
      <Detail title='Kuyruk Milli Devri' value='540-540E' />
      <Detail title='Kaldırma Kapasitesi (kg)' value='2200' />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  app: { 
    backgroundColor: "white",
    flex:1
   },
   bgImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  position_container:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    marginTop:40,
    width: '100%',
    height: 350,
    resizeMode: "contain",
    alignSelf: "center",
    backgroundColor: 'transparent'
  },
 

});

export default App;
