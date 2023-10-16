import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

/** There are two ways to load images
 * Method 1: Upload image to explorer in VS Code, local images
 * Here, we do not need to use <image></image>, we can make it more tidier by using <image />
 * 
 * Example ----> <Image source={require('./assets/icon.png')}/>
 * 
 *
 * Method 2: Use Network, beyond VS code local images
 * 
 * For this one, you have to specify the width and height of the images, unlike local
 * Pay attention to code below
 */

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Well done, you've made it!</Text>
      <Image 
      fadeDuration={1000} /// Fade Duration is in milliseconds
      
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300",
      }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
