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
      backgroundColor: "lavender",
      flex: 1,
      flexDirection: "row-reverse", 
      justifyContent: "center",
      alignItems: "flex-end",
      }
    }> 

      <View style={{
        backgroundColor: "darksalmon",
        width: 100,
        height: 300,
      }}/>
      
      <View style={{
        backgroundColor: "cornsilk",
        width: 100,
        height: 200,
      }}/>

      <View style={{
        backgroundColor: "darkorchid",
        width: 100,
        height: 100,
        alignSelf: "flex-start",
      }}/>

    </View>
  );
}


/** Flex Direction:
 * -row
 * -row-reverse
 * -column
 * -column-reverse
 */

/** Justify Content: 
 * -flex-start
 * -flex-end
 * -center
 * -space-between
 * -space-around
 * -space-evenly
*/

/** Align Items:
 * -Center
 * -Baseline
 * -Flex-end
 * -Flex-start
 */

/// Justify content and Align items obeys flex direction
