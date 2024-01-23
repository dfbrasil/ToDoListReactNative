import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Routes from './src/routes';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='inverted' />
      <Routes />
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%',
    height: '100%',
    backgroundColor: '#141325',
  },
    taskStatus:{
      flexDirection:'row',
      gap:14,
    }

});
