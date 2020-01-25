import React, { useEffect, useState } from 'react';
import {
  PermissionsAndroid,
  Alert,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export default function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  useEffect(() => {
    async function grantPermission() {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );

      if (!granted) {
        Alert.alert(
          'Erro',
          'Não foi possível carregar a localização do usuário'
        );
      } else {
        Geolocation.getCurrentPosition(
          position => {
            const {
              coords: { latitude, longitude },
            } = position;
            setCurrentRegion({
              latitude,
              longitude,
              latitudeDelta: 0.04,
              longitudeDelta: 0.04,
            });
          },
          error => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    }

    grantPermission();
  }, [navigation]);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView style={{ flex: 1 }} initialRegion={currentRegion}>
      <Marker coordinate={{ latitude: -22.2400967, longitude: -45.9467579 }}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars1.githubusercontent.com/u/13579453?s=460&v=4',
          }}
        />
        <Callout
          onPress={() => {
            //navegação
            navigation.navigate('Profile', { github_username: 'aganhara' });
          }}>
          <View style={styles.callout}>
            <Text style={styles.devName}>Anderson Ganhara</Text>
            <Text style={styles.devBio}>Software Engineer at Inatel</Text>
            <Text style={styles.devTechs}>ReactJS, React Native</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#fff',
  },

  callout: {
    width: 260,
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  devBio: {
    color: '#666',
    marginTop: 5,
  },

  devTechs: {
    marginTop: 5,
  },
});
