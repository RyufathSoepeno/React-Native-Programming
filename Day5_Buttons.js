import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Image, Button, Alert, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Button 
        color="green"
        title="Click Me" 
        onPress={() => 
          Alert.alert("Hello There", "How would you like to proceed?", 
            [
              {text: "Yes"},
              {text: "No"}
            ]
          )
        }
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

/// There is onPress and onLongPress in Touchable, thought you should know

/* onPress={(), the () means function*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
