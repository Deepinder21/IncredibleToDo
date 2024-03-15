
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

function ToDoList({ tasks }) {
  return (
    <>
        <ScrollView>
            <view>
              {tasks.map((task, index) => (
                <Pressable
                  key={index}>
                  <view style={[styles.task, styles.completed]}>
                  <Text style={styles.taskText}>{task}</Text>
                  </view>
                </Pressable>
              ))}
            </view>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    task: {
      padding: 15,
      borderBottomWidth: 5,
      borderColor: '#black',
    },
    completed: {
      backgroundColor: '#grey',
    },
    taskText: {
      fontSize: 20,
    },
    });

export default ToDoList;
