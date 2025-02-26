import React from 'react';
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name='index' options={{
        title: 'Home',
        tabBarIcon: ({color}) => (
          <Ionicons name='home-outline' size={22} color={color} />
        )
      }} />
      <Tabs.Screen name='add' options={{
        title: 'Add',
        tabBarIcon: ({color}) => (
          <Ionicons name='add-outline' size={22} color={color} />
        )
      }} />
      <Tabs.Screen name='view' options={{
        title: 'View',
        tabBarIcon: ({color}) => (
          <Ionicons name='eye-outline' size={22} color={color} />
        )
      }} />
      {/* <Tabs.Screen name='cart' options={{
        title: 'Cart',
        tabBarBadge: 3,
        tabBarIcon: ({color}) => (
          <Ionicons name='cart-outline' size={22} color={color} />
        )
      }} /> */}
      <Tabs.Screen name='profile' options={{
        title: 'Profile',
        tabBarIcon: ({color}) => (
          <Ionicons name='person-outline' size={22} color={color} />
        )
      }} />
    </Tabs>
  );
}