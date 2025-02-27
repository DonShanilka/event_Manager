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
  container: { padding: 20 },
  card: { backgroundColor: '#fff', padding: 15, marginVertical: 10, borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4 },
  title: { fontSize: 18, fontWeight: 'bold' },
  infoText: { marginTop: 5 },
  infoLabel: { fontWeight: 'bold' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  updateButton: { backgroundColor: '#d9d9d9', borderWidth:1 ,borderColor:'#cccccc', padding: 10, borderRadius: 5, width:'100%' },
  updateButtonText: {color:'#0000ff', textAlign: 'center', fontWeight:'bold'},
  deleteButton: { position: 'absolute', top: '8%', right: '1%' },
  deleteIcon: { width: 24, height: 24 },
  buttonText: { color: '#fff', textAlign: 'center' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalView: { backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5, width: '100%', borderRadius: 5 },
  datePickerText: { marginVertical: 10, color: 'blue' },
  saveButton: { backgroundColor: 'green', padding: 10, borderRadius: 5, marginTop: 10 },
  closeButton: { backgroundColor: 'gray', padding: 10, borderRadius: 5, marginTop: 10 },
});

export default EventCard;
