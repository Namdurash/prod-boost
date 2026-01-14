import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useTablesPopulate } from './src/hooks/useTablesPopulate';
import { COLORS } from './src/constants/Colors';
import { AppNavigation } from './src/navigation/AppNavigation';
import { StyleSheet } from 'react-native';

function App() {
  useTablesPopulate();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.tealGreen },
});

export default App;
