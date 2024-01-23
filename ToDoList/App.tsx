import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Routes from './src/routes';
import { theme } from './src/theme/index';

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
    backgroundColor: theme.colors.background.bgpattern,
  },

});
