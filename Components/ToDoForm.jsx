import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

function ToDoForm() {
  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter your task here..."
        />
        <Button title="Add" />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
export default ToDoForm;
