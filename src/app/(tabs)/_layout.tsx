import React from 'react';
import { View } from 'react-native';
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
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-between', 
          }, 
          tabBarActiveTintColor: '#1A1A31',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
          tabBarItemStyle: {
            marginHorizontal: 15,
          },
          tabBarActiveBackgroundColor: 'transparent',
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen 
          name='index' 
          options={{
            title: '',
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                backgroundColor: focused ? '#4EDB79' : 'transparent',
                borderRadius: 50,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Ionicons 
                  name={focused ? 'home' : 'home-outline'} 
                  size={24} 
                  color={focused ? '#1A1A31' : 'white'} 
                />
              </View>
            )
          }} 
        />
        <Tabs.Screen 
          name='add' 
          options={{
            title: '',
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                backgroundColor: focused ? '#4EDB79' : 'transparent',
                borderRadius: 50,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Ionicons 
                  name={focused ? 'add-circle' : 'add-circle-outline'} 
                  size={24}  
                  color={focused ? '#1A1A31' : 'white'} 
                />
              </View>
            ),
            tabBarItemStyle: {
              marginTop: -15, 
            }
          }} 
        />
        <Tabs.Screen 
          name='calendar' 
          options={{
            title: '',
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                backgroundColor: '#4EDB79',
                borderRadius: 50,
                width: 55,
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: focused ? 3 : 0,
                borderColor: '#1A1A31',
                marginBottom: 25,
              }}>
                <Ionicons 
                  name={focused ? 'calendar' : 'calendar-outline'} 
                  size={28} 
                  color="#1A1A31"
                />
              </View>
            ),
            tabBarItemStyle: {
              marginTop: -15,
            }
          }} 
        />
        <Tabs.Screen 
          name='view' 
          options={{
            title: '',
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                backgroundColor: focused ? '#4EDB79' : 'transparent',
                borderRadius: 50,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Ionicons 
                  name={focused ? 'search' : 'search-outline'} 
                  size={24} 
                  color={focused ? '#1A1A31' : 'white'} 
                />
              </View>
            )
          }} 
        />
        <Tabs.Screen 
          name='profile' 
          options={{
            title: '',
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                backgroundColor: focused ? '#4EDB79' : 'transparent',
                borderRadius: 50,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Ionicons 
                  name={focused ? 'person' : 'person-outline'} 
                  size={24} 
                  color={focused ? '#1A1A31' : 'white'} 
                />
              </View>
            )
          }} 
        />
      </Tabs>
    </Provider>
  );
}
