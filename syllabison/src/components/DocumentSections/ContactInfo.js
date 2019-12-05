import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
  title: {
    fontSize: 10,
    paddingTop: 10
  },
  container: {
    marginBottom: 10
  },
  info: {
    fontSize: 10,
    marginBottom: 10
  }
});

export default props => (
  <View style={styles.container}>
    <Title style={styles.title}>Dept. Contact Info</Title>
    <Text style={styles.info}>{props.syllabus.deptContactInfo}</Text>
  </View>
);
