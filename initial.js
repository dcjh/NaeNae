let map;
    
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 1.4227212643654814, lng: 103.84024168286498}, // Centered at Yishun
        zoom: 14.5
    });

    const police_station = new google.maps.Marker({
        position: {lat: 1.430388103767296, lng: 103.8403735688216},
        map: map,
        title: `Police Station`,
        icon: {url:'./assets/police.png', scaledSize: new google.maps.Size(40,40)}
    });
}