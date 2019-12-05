import React from 'react';

import Title from './Title';
import List, { Item } from './List';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontSize: 10,
    marginBottom: 10
  },
  reqs: {
    fontSize: 12,
    marginBottom: 10
  }
});

const Requisites = props => (
  <View>
    <Title style={styles.title}>Prereqs</Title>
    <Text style={styles.reqs}>
      {props.syllabus.prereqs ? `${props.syllabus.prereqs}` : 'N/A'}
    </Text>
    <Title style={styles.title}>Coreqs</Title>
    <Text style={styles.reqs}>
      {props.syllabus.coreqs ? `${props.syllabus.coreqs}` : 'N/A'}
    </Text>
  </View>
);

export default Requisites;
