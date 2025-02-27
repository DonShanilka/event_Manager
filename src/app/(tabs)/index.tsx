import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const events = [
    {
      id: '1',
      title: 'Music Festival',
      date: 'March 10, 2025',
      image: 'https://via.placeholder.com/150',
      color: '#FF6B6B',
    },
    {
      id: '2',
      title: 'Tech Conference',
      date: 'April 22, 2025',
      image: 'https://via.placeholder.com/150',
      color: '#6BCB77',
    },
    {
      id: '3',
      title: 'Wedding Ceremony',
      date: 'May 15, 2025',
      image: 'https://via.placeholder.com/150',
      color: '#4D96FF',
    },
  ];

  return (
    <View style={styles.container}>
      {/* User Info Section */}
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/60' }} style={styles.avatar} />
        <Text style={styles.greeting}>{getGreeting()}, User! 👋</Text>
      </View>

      {/* Event List */}
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.eventCard, { backgroundColor: item.color }]}>
            <Image source={{ uri: item.image }} style={styles.eventImage} />
            <View style={styles.eventDetails}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDate}>{item.date}</Text>
            </View>
          </View>
        )}
      />

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#FF6B6B' }]}>
          <Ionicons name="add-circle" size={32} color="white" />
          <Text style={styles.buttonText}>Add Event</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#4D96FF' }]}>
          <Ionicons name="eye" size={32} color="white" />
          <Text style={styles.buttonText}>View Events</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A31',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  eventCard: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  eventImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    color: 'white',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});
