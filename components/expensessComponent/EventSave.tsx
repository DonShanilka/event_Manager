import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function EventManagementForm() {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate: new Date(),
    location: '',
    description: '',
    price:'',
    mobile:'',
    organizerEmail: 'shanilka@gmail.com',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setEventData({ ...eventData, eventDate: selectedDate });
    }
  };

  const handleSubmit = () => {
    console.log('Event Data:', eventData);
    // Add API call or database save logic here
  };

  return (
    <View style={styles.form}>
      <View style={styles.field}>
        <Text style={styles.label}>Event Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter event name"
          value={eventData.eventName}
          onChangeText={(text) => setEventData({ ...eventData, eventName: text })}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Event Date</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <Text>{eventData.eventDate.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={eventData.eventDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={eventData.location}
          onChangeText={(text) => setEventData({ ...eventData, location: text })}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter event description"
          value={eventData.description}
          onChangeText={(text) => setEventData({ ...eventData, description: text })}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Organizer Email</Text>
        <TextInput
          style={styles.input}
          value={eventData.organizerEmail}
          editable={false}
        />
      </View>

      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitBtnText}>SAVE EVENT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { padding: 16, width: '100%' },
  field: { marginBottom: 16 },
  label: { fontSize: 16, color: '#374151', marginBottom: 4 },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    justifyContent: 'center',
    color: '#0D9488',
  },
  submitBtn: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#34D399',
    borderRadius: 8,
    backgroundColor: '#34D399',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
});

export default EventManagementForm;
