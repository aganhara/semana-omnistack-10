import React, { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export default function Main() {
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
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    }

    grantPermission();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return <MapView style={{ flex: 1 }} initialRegion={currentRegion} />;
}
