import { getallEvent } from '@/src/reducer/EventSlice';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const EventCard = () => {
    const dispatch = useDispatch();
  const events = useSelector((state) => state.event || []);

  useEffect(() => {
    dispatch(getallEvent());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {events.map((event : any) => (
        <View key={event.eventId} style={styles.card}>
          <Text style={styles.title}>{event.eventId}</Text>
          <Text>Date: {event.eventDate}</Text>
          <Text>Location: {event.location}</Text>
          <Text>Description: {event.description}</Text>
          <Text>Price: {event.price}</Text>
          <Text>Mobile: {event.mobile}</Text>
          <Text>Organizer: {event.organizerEmail}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default EventCard;
