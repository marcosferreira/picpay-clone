import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Pay: {
    lib: AntDesign,
    name: 'home',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  }
}

function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderBottomColor: 'rgba(255, 255, 255, 0.2)'
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Início' }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ title: 'Carteira' }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{ title: 'Pagamento' }}
      />
      <Tab.Screen
        name="Notifications"
        component={PayScreen}
        options={{ title: 'Notificações' }}
      />
      <Tab.Screen
        name="Settings"
        component={PayScreen}
        options={{ title: 'Ajustes' }}
      />
    </Tab.Navigator>
  );
}


export default Navigation;
