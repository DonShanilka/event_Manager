import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { saveEvent } from '@/src/reducer/EventSlice';

function EventManagementForm() {

  const dispatch = useDispatch();

  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate: new Date(),  // Initialize with current date
    location: '',
    description: '',
    price: '',
    mobile: '',
    organizerEmail: '',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setEventData({ ...eventData, eventDate: selectedDate });
    }
  };

  const handleSubmit = () => {
    dispatch(saveEvent(eventData));
    console.log('Event Data:', eventData);
  };

  return (
    <View style={styles.form}>
      <View style={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="Enter event name"
          value={eventData.eventName}
          onChangeText={(text) => setEventData({ ...eventData, eventName: text })}
        />
      </View>

      <View style={styles.field}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <Text>{eventData.eventDate ? new Date(eventData.eventDate).toDateString() : 'Select Date'}</Text>
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
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={eventData.location}
          onChangeText={(text) => setEventData({ ...eventData, location: text })}
        />
      </View>

      <View style={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="Enter event description"
          value={eventData.description}
          onChangeText={(text) => setEventData({ ...eventData, description: text })}
        />
      </View>

      <View style={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="Enter event price"
          keyboardType="numeric"
          value={eventData.price}
          onChangeText={(text) => setEventData({ ...eventData, price: text })}
        />
      </View>

      <View style={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          keyboardType="phone-pad"
          value={eventData.mobile}
          onChangeText={(text) => setEventData({ ...eventData, mobile: text })}
        />
      </View>

      <View style={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="Enter organizer email"
          value={eventData.organizerEmail}
          onChangeText={(text) => setEventData({ ...eventData, organizerEmail: text })}
        />
      </View>

      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitBtnText}>SAVE EVENT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { padding: 16, width: '100%',backgroundColor:'#1e001e' },
  field: { marginBottom: 16 },
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
    backgroundColor: '#ff0055',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
});

export default EventManagementForm;
