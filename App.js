import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleInputSubmit = () => {
    const value = parseFloat(inputValue);

    if (isNaN(value)) {
      // Do nothing if the input value is not a valid number
      return;
    }

    // Check if the input value contains a multiplication or addition operator
    if (inputValue.includes('*')) {
      setCount(count * value);
    } else if (inputValue.includes('+')) {
      setCount(count + value);
    } else {
      setCount(value);
    }

    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.count}>Count: {count}</Text>
      <View style={styles.buttonsContainer}>
        <Button title="+" onPress={handleIncrement} />
        <Button title="-" onPress={handleDecrement} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter value"
          value={inputValue}
          onChangeText={handleInputChange}
          onSubmitEditing={handleInputSubmit}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    fontSize: 16,
  },
});

export default Counter;
