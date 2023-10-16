import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

/** You can use number of lines to limit teh number of lines in text, however, they can be truncated (ex: My name is ryu, and I... [The dots are the truncation]) */

/// Do Number of lines by <Text numberOfLines={LineNo}>

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Well done, you've made it!</Text>
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
