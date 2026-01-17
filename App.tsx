import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from './src/constants/Colors';
import { useTablesPopulate } from './src/hooks/useTablesPopulate';
import { AppNavigation } from './src/navigation/AppNavigation';

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
