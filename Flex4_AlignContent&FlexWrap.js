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

  /// We flexWrap contents to prevent shrinking items when they overload (too much capacity to fit in screen)
  /// Align content aligns entire content, not just the item

export default function App() {
  return (
    <View style={{
      backgroundColor: "lavender",
      flex: 1,
      flexDirection: "row", 
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      flexWrap: "wrap",
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

      <View style={{
        backgroundColor: "grey",
        width: 100,
        height: 100,
      }}/>

      <View style={{
        backgroundColor: "greenyellow",
        width: 100,
        height: 100,
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
