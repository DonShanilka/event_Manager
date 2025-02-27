import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import { updateEvent, deteleEvent, getallEvent } from '@/src/reducer/EventSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

const EventCard = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event || []);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    dispatch(getallEvent());
  }, [dispatch]);

  const handleUpdate = () => {
    if (selectedEvent) {
      dispatch(updateEvent(selectedEvent));
      setModalVisible(false);
    }
  };

  const handleDelete = (eventId) => {
    dispatch(deteleEvent(eventId));
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedEvent({ ...selectedEvent, eventDate: selectedDate.toISOString() });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {events.map((event) => (
        <View key={event.eventId} style={styles.card}>
          <Text style={styles.title}>{event.eventName}</Text>
          <Text style={styles.infoText}><Text style={styles.infoLabel}>Date               : </Text>{new Date(event.eventDate).toDateString()}</Text>
          <Text style={styles.infoText}><Text style={styles.infoLabel}>Location        : </Text>{event.location}</Text>
          <Text style={styles.infoText}><Text style={styles.infoLabel}>Description   : </Text>{event.description}</Text>
          <Text style={styles.infoText}><Text style={styles.infoLabel}>Price              : </Text>{event.price}</Text>
          <Text style={styles.infoText}><Text style={styles.infoLabel}>Mobile           : </Text>{event.mobile}</Text>
          <Text style={styles.infoText}><Text style={styles.infoLabel}>Organizer      : </Text>{event.organizerEmail}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.updateButton} onPress={() => { setSelectedEvent(event); setModalVisible(true); }}>
              <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(event.eventId)}>
            <Icon name="trash" size={20} color="red" style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      ))}

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Update Event</Text>
            <TextInput
              style={styles.input}
              placeholder="Event Name"
              value={selectedEvent?.eventName || ''}
              onChangeText={(text) => setSelectedEvent({ ...selectedEvent, eventName: text })}
            />
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Text style={styles.datePickerText}>Select Date: {selectedEvent?.eventDate ? new Date(selectedEvent.eventDate).toDateString() : 'Pick a date'}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={selectedEvent?.eventDate ? new Date(selectedEvent.eventDate) : new Date()}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={selectedEvent?.location || ''}
              onChangeText={(text) => setSelectedEvent({ ...selectedEvent, location: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={selectedEvent?.description || ''}
              onChangeText={(text) => setSelectedEvent({ ...selectedEvent, description: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={selectedEvent?.price || ''}
              onChangeText={(text) => setSelectedEvent({ ...selectedEvent, price: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Mobile"
              value={selectedEvent?.mobile || ''}
              onChangeText={(text) => setSelectedEvent({ ...selectedEvent, mobile: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Organizer Email"
              value={selectedEvent?.organizerEmail || ''}
              onChangeText={(text) => setSelectedEvent({ ...selectedEvent, organizerEmail: text })}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    backgroundColor: '#1A1A31' 
  },
  card: { 
    backgroundColor: '#242442', 
    padding: 15, 
    marginVertical: 10, 
    borderRadius: 12, 
    shadowColor: '#000', 
    shadowOpacity: 0.3, 
    shadowRadius: 5,
    borderLeftWidth: 0,
    position: 'relative',
    overflow: 'hidden'
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8
  },
  infoText: { 
    marginTop: 5,
    color: 'rgba(255, 255, 255, 0.8)'
  },
  infoLabel: { 
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.9)'
  },
  buttonContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 15 
  },
  updateButton: { 
    backgroundColor: 'transparent', 
    borderWidth: 1,
    borderColor: '#4EDB79', 
    padding: 8, 
    borderRadius: 20, 
    width: '100%' 
  },
  updateButtonText: {
    color: '#4EDB79', 
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 13
  },
  deleteButton: { 
    position: 'absolute', 
    top: 15, 
    right: 15 
  },
  deleteIcon: { 
    width: 24, 
    height: 24 
  },
  buttonText: { 
    color: '#fff', 
    textAlign: 'center' 
  },
  modalContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.7)' 
  },
  modalView: { 
    backgroundColor: '#242442', 
    padding: 20, 
    borderRadius: 16, 
    width: '80%' 
  },
  modalTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 15,
    color: 'white'
  },
  input: { 
    borderWidth: 1, 
    borderColor: 'rgba(255, 255, 255, 0.2)', 
    padding: 12, 
    marginVertical: 6, 
    width: '100%', 
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white'
  },
  datePickerText: { 
    marginVertical: 10, 
    color: '#4EDB79',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  saveButton: { 
    backgroundColor: '#ff7733', 
    padding: 12, 
    borderRadius: 25, 
    marginTop: 15 
  },
  closeButton: { 
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    padding: 12, 
    borderRadius: 25, 
    marginTop: 10 
  },
});

export default EventCard;
