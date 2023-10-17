import { StatusBar } from 'expo-status-bar';

import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Image, 
  Dimensions,
  Platform, 
  StatusBar, 
  Button, 
  Alert, 
  View, 
  SafeAreaView } from 'react-native';

import { useDeviceOrientation } from '@react-native-community/hooks'

/// Percentages makes a universal measurement count regardless of device

/* Use Console log to make measurement analysis, if u do not want to see it on app */

/// { property_name }



/// Use JSON to see app orientation, basically real front-end

/// Change dimension in json eitehr by "landscape", "portrait", or "default"

/* There is because if we just use width 100% and height 30%, when we rotate, the element will not be as expected as the horizontal one */

/// See READme to see hooks: https://github.com/react-native-community/hooks

/// Hooks are use functions (useBack, useContainer, etc.)

/* Install hooks by "npm i @react-native-community/hooks" */

// then import { useDeviceOrientation } from '@react-native-community/hooks'


export default function App() {
  const {landscape} = useDeviceOrientation();
  
  return (
    <SafeAreaView style={MyStyle.container}>
      <view style={{
          backgroundColor: 'darksalmon',
          width: "100%",
          height: landscape ? "100%" : "30%",
      }
    }
    />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const MyStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
  },
});
