import React from 'react';

import Title from './Title';
import List, { Item } from './List';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0
    }
  },
  entryContainer: {
    marginBottom: 10
  },
  detailContainer: {
    flexDirection: 'row'
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10
  },
  bulletPoint: {
    fontSize: 12
  },
  details: {
    fontSize: 12
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none'
  }
});

const SyllabusDetailsEntry = ({ category, details }) => {
  const title = `${category}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <List>
        <Item style={styles.detailContainer}>{details}</Item>
      </List>
    </View>
  );
};

const SyllabusDetails = props => (
  <View style={styles.container}>
    <Title>Catalog Information</Title>
    <SyllabusDetailsEntry
      category={'Catalog Description'}
      details={props.syllabus.courseDesc}
    />
    <SyllabusDetailsEntry
      category={'Prereqs'}
      details={props.syllabus.prereqs ? `${props.syllabus.prereqs}` : 'N/A'}
    />
    <SyllabusDetailsEntry
      category={'Coreqs'}
      details={props.syllabus.coreqs ? `${props.syllabus.coreqs}` : 'N/A'}
    />
    <SyllabusDetailsEntry
      category={'Delivery Method'}
      details={props.syllabus.deliveryMethod}
    />
    <Title>Course Purpose & Objectives</Title>
    <SyllabusDetailsEntry
      category={'Goals'}
      details={props.syllabus.courseGoals}
    />
    <SyllabusDetailsEntry
      category={'Expected Learning Outcomes'}
      details={props.syllabus.learningOutcomes}
    />
    <SyllabusDetailsEntry
      category={'Major Course Topics'}
      details={props.syllabus.courseTopics}
    />
  </View>
);

export default SyllabusDetails;
