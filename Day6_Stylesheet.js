import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Image, Button, Alert, SafeAreaView } from 'react-native';

/** We use array [] to input two constants on a single object */

/** Pay attention to [] yellow square brackets, you get what I mean <SafeAreaView style={[MyStyle.container, NewBackground]}> */

export default function App() {
  return (
    <SafeAreaView style={[MyStyle.container, NewBackground]}>
      
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

const NewBackground = { backgroundColor: "orange"};

const MyStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/// Container are like objects in JS and react native stylesheets

/// We use stylesheet because it validates proper objects later on
