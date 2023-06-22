import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import TouchID from 'react-native-touch-id';

function App() {
  React.useEffect(() => {
    TouchID.authenticate(
      'to demo this react-native component',
      // optionalConfigObject,
    )
      .then(success => {
        Alert.alert('Authenticated Successfully');
      })
      .catch(error => {
        Alert.alert('Authentication Failed');
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>HI, MY NAME IS SAIF</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
