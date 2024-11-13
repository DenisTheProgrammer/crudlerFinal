import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import initialModules from '../../data/modules.js';

export const ModuleCrudlerScreen = () => {
  // Initialisations -------------------
  const modules = initialModules;

  // State -----------------------------

  // Handlers --------------------------

  // View ------------------------------
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModuleCrudlerScreen;