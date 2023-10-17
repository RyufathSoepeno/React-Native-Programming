import React from "react"

import { View } from 'react-native';

/** like arranging items in a row or column, and they automatically adjust their size to fit the available space. 
 * It's great for creating responsive designs and aligning content within a container */

 /// flex: 0.5 takes half, you do the maths

 /** MAKE A COMPONENT IN REACT NATIVE
  *  <view>
  *     <view/>
  *     <view/>
  *  </view>
  */

export default function App() {
  return (
    <View style={{
      backgroundColor: "darksalmon",
      flex: 1,
      }
    }> 

      <View style={{
        backgroundColor: "darksalmon",
        flex: 1,
      }}/>
      
      <View style={{
        backgroundColor: "cornsilk",
        flex: 2,
      }}/>

      <View style={{
        backgroundColor: "darkorchid",
        flex: 1,
      }}/>

    </View>
  );
}
