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

const Skills = props => (
  <View>
    <Title style={styles.title}>Prereqs/coreqs</Title>
    <Text style={styles.reqs}>
      {props.syllabus.prereqs || props.syllabus.coreqs
        ? `${props.syllabus.prereqs}\n${props.syllabus.coreqs}`
        : 'N/A'}
    </Text>
  </View>
);

export default Skills;
