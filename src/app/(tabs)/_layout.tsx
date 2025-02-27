import React from 'react';
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from '@/src/store/store';

export default function TabLayout() {
  return (
    <Provider store={store}>
      <Tabs 
        sceneContainerStyle={{ backgroundColor: '#1A1A31' }}
        screenOptions={{
          headerShown: false,
          tabBarStyle: { 
            backgroundColor: '#1A1A31', 
            borderTopWidth: 0,
            height: 70,
            paddingBottom: 10,
            paddingTop: 10,
          }, 
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
          tabBarItemStyle: {
            marginHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Tabs.Screen 
          name='index' 
          options={{
            title: '',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons 
                name={focused ? 'home' : 'home-outline'} 
                size={24} 
                color="white"
                style={{
                  backgroundColor: focused ? '#4EDB79' : 'transparent',
                  padding: 12,
                  borderRadius: 30,
                  overflow: 'hidden',
                }}
              />
            )
          }} 
        />
        <Tabs.Screen 
          name='saved' 
          options={{
            title: '',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons 
                name={focused ? 'bookmark' : 'bookmark-outline'} 
                size={24} 
                color="white"
                style={{
                  backgroundColor: focused ? '#4EDB79' : 'transparent',
                  padding: 12,
                  borderRadius: 30,
                  overflow: 'hidden',
                }}
              />
            )
          }} 
        />
        <Tabs.Screen 
          name='calendar' 
          options={{
            title: '',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons 
                name={focused ? 'calendar' : 'calendar-outline'} 
                size={24} 
                color="white"
                style={{
                  backgroundColor: focused ? '#4EDB79' : 'transparent',
                  padding: 12,
                  borderRadius: 30,
                  overflow: 'hidden',
                }}
              />
            ),
            tabBarItemStyle: {
              marginTop: -15, // Raises the middle button slightly
            }
          }} 
        />
        <Tabs.Screen 
          name='view' 
          options={{
            title: '',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons 
                name={focused ? 'search' : 'search-outline'} 
                size={24} 
                color="white"
                style={{
                  backgroundColor: focused ? '#4EDB79' : 'transparent',
                  padding: 12,
                  borderRadius: 30,
                  overflow: 'hidden',
                }}
              />
            )
          }} 
        />
        <Tabs.Screen 
          name='profile' 
          options={{
            title: '',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons 
                name={focused ? 'person' : 'person-outline'} 
                size={24} 
                color="white"
                style={{
                  backgroundColor: focused ? '#4EDB79' : 'transparent',
                  padding: 12,
                  borderRadius: 30,
                  overflow: 'hidden',
                }}
              />
            )
          }} 
        />
      </Tabs>
    </Provider>
  );
}
