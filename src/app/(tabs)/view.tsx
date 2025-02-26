import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
// import ExpensessCard from '@/components/expensessComponent/ExpensessCard';
import axios from 'axios';
import EventCard from '@/src/components/eventsComponent/EventCard';

const NotificationsScreen = () => {
  
  return (
    <View style={styles.container}>
      <EventCard/>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
