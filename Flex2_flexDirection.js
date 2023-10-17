import React from "react"

import { View } from 'react-native';

/** like arranging items in a row or column, and they automatically adjust their size to fit the available space. 
 * It's great for creating responsive designs and aligning content within a container */

 /// flex: 0.5 takes half, you do the maths

export default function App() {
  return (
    <View style={{
      backgroundColor: "lavender",
      flex: 1,
      flexDirection: "row-reverse", /// PAY ATTENTION TO THIS ONE
      }
    }> 

      <View style={{
        backgroundColor: "darksalmon",
        width: 100,
        height: 100,
      }}/>
      
      <View style={{
        backgroundColor: "cornsilk",
        width: 100,
        height: 100,
      }}/>

      <View style={{
        backgroundColor: "darkorchid",
        width: 100,
        height: 100,
      }}/>

    </View>
  );
}
