import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';

/// We can make anything touchable using Touchable

/// Press the image, and the touchable will confirm press by reducing opacity for limited time

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Well done, you've made it!</Text>
    
      <TouchableOpacity onPress={() => console.log("You pressed me :)")}>
          <Image 
            fadeDuration={1000} /// Fade Duration is in milliseconds
        
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
            }}
          />
      </TouchableOpacity>
            
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
