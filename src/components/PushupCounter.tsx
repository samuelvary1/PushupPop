// src/components/PushupCounter.tsx

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PushupCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pushup Counter</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Add Pushup" onPress={incrementCounter} />
        <Button title="Reset" onPress={resetCounter} color="#FF6347" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    marginBottom: 30,
    color: '#4CAF50',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default PushupCounter;
