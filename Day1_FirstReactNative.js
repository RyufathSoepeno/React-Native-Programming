import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Well done, you've made it!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

/// Use SafeAreaView to reduce unnecesary margins on stuff not supposed to be touched, like on IOS, there is that top rectangle thingy

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/// Flex is like border margin for both horizontal and vertical, so 1 border for each app
/// React Native don't have html elements, so they have to stick to container
