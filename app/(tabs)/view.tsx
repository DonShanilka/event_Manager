import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
// import ExpensessCard from '@/components/expensessComponent/ExpensessCard';
import axios from 'axios';

const NotificationsScreen = () => {
  const [expensesData, setExpensesData] = useState([]);

  useEffect(() => {
    // const fetchExpenses = async () => {
    //   try {
    //     const response = await axios.get('http://192.168.249.98:3000/api/getExpenses');
    //     setExpensesData(response.data);
    //   } catch (error) {
    //     console.error('Error fetching expenses:', error);
    //   }
    // };

    // fetchExpenses();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
      {/* <ExpensessCard expensesData={expensesData} /> */}
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
