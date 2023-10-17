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

/// Percentages makes a universal measurement count regardless of device

/* Use Console log to make measurement analysis, if u do not want to see it on app */

export default function App() {
  return (
    <SafeAreaView style={MyStyle.container}>
      <view style={{
          backgroundColor: 'darksalmon',
          width: '50%',
          height: 70,
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
