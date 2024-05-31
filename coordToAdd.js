/**
 * @license
 * Copyright 2024 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
    const geocoder = new google.maps.Geocoder();
    const map = document.querySelector('gmp-map').innerMap;
    const infoWindow = new google.maps.InfoWindow();
  
    document.getElementById('submit').addEventListener('click', () => {
      geocodeLatLng(geocoder, map, infoWindow);
    });
  }
  
  async function geocodeLatLng(geocoder, map, infoWindow) {
    const input = document.getElementById('latlng').value;
    const latlngStr = input.split(',', 2);
    const latlng = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1]),
    };
  
    try {
      const response = await geocoder.geocode({location: latlng});
      const marker = document.querySelector('gmp-advanced-marker');
  
      map.setZoom(11);
      marker.position = latlng;
      infoWindow.setContent(response.results[0].formatted_address);
      infoWindow.open({anchor: marker});
    } catch (e) {
      window.alert(`Geocoder failed due to: ${e}`);
    }
  }
  
  window.initMap = initMap;