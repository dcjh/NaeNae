// Example data: array of lat/lng objects
const locations = [
    {lat: 1.416731, lng: 103.833805},
    {lat: 1.413880, lng: 103.830782},
    {lat: 1.424419, lng: 103.840357},
    {lat: 1.425689, lng: 103.826680},
    {lat: 1.416918, lng: 103.832456},
    {lat: 1.416566, lng: 103.834993},
    {lat: 1.425026, lng: 103.838591},
    {lat: 1.430034, lng: 103.830139},
    {lat: 1.419160, lng: 103.849335},
    {lat: 1.433093, lng: 103.838156},
    {lat: 1.421469, lng: 103.830900},
    {lat: 1.413011, lng: 103.826557},
    {lat: 1.417793, lng: 103.836289},
    {lat: 1.428091, lng: 103.844159},
    {lat: 1.429530, lng: 103.837508},
    {lat: 1.415970, lng: 103.847873},
    {lat: 1.434853, lng: 103.826151},
    {lat: 1.416823, lng: 103.840194},
    {lat: 1.427101, lng: 103.837664},
    {lat: 1.418643, lng: 103.827548},
    {lat: 1.433819, lng: 103.837473},
    {lat: 1.413947, lng: 103.825287},
    {lat: 1.431062, lng: 103.833992},
    {lat: 1.420346, lng: 103.835189},
    {lat: 1.415661, lng: 103.840053},
    {lat: 1.423764, lng: 103.826953},
    {lat: 1.422147, lng: 103.840218},
    {lat: 1.422614, lng: 103.834725},
    {lat: 1.434564, lng: 103.828820},
    {lat: 1.433668, lng: 103.829046},
    {lat: 1.415473, lng: 103.832431},
    {lat: 1.420016, lng: 103.842146},
    {lat: 1.426395, lng: 103.846802},
    {lat: 1.426167, lng: 103.839306},
    {lat: 1.413916, lng: 103.849589},
    {lat: 1.429529, lng: 103.847177},
    {lat: 1.419405, lng: 103.842326},
    {lat: 1.414612, lng: 103.827761},
    {lat: 1.426243, lng: 103.827561},
    {lat: 1.415743, lng: 103.831069},
    {lat: 1.419935, lng: 103.835228},
    {lat: 1.424252, lng: 103.842251},
    {lat: 1.424129, lng: 103.849955},
    {lat: 1.422158, lng: 103.846228},
    {lat: 1.426170, lng: 103.845557},
    {lat: 1.415980, lng: 103.826630},
    {lat: 1.422613, lng: 103.846904},
    {lat: 1.416680, lng: 103.827346},
    {lat: 1.417984, lng: 103.829080},
    {lat: 1.416561, lng: 103.842307},
    {lat: 1.429497, lng: 103.830901},
    {lat: 1.425679, lng: 103.838381},
    {lat: 1.416658, lng: 103.844918},
    {lat: 1.433903, lng: 103.844703},
    {lat: 1.421898, lng: 103.825608},
    {lat: 1.414842, lng: 103.835824},
    {lat: 1.413141, lng: 103.833132},
    {lat: 1.424241, lng: 103.841553},
    {lat: 1.430672, lng: 103.833852},
    {lat: 1.434081, lng: 103.839765},
    {lat: 1.433080, lng: 103.835509},
    {lat: 1.414974, lng: 103.839585},
    {lat: 1.432853, lng: 103.832788},
    {lat: 1.432040, lng: 103.836108},
    {lat: 1.423600, lng: 103.834498},
    {lat: 1.419952, lng: 103.834862},
    {lat: 1.424778, lng: 103.835156},
    {lat: 1.431511, lng: 103.834170},
    {lat: 1.434929, lng: 103.833476},
    {lat: 1.431448, lng: 103.839821},
    {lat: 1.413041, lng: 103.836108},
    {lat: 1.414184, lng: 103.836545},
    {lat: 1.421184, lng: 103.837710},
    {lat: 1.418328, lng: 103.847071},
    {lat: 1.433804, lng: 103.840133},
    {lat: 1.418828, lng: 103.835842},
    {lat: 1.421642, lng: 103.841944},
    {lat: 1.432519, lng: 103.846584},
    {lat: 1.421287, lng: 103.838407},
    {lat: 1.416086, lng: 103.835980},
    {lat: 1.426556, lng: 103.826434},
    {lat: 1.417567, lng: 103.827181},
    {lat: 1.415109, lng: 103.834474},
    {lat: 1.431003, lng: 103.833652},
    {lat: 1.418336, lng: 103.847911},
    {lat: 1.420642, lng: 103.829856},
    {lat: 1.432204, lng: 103.840931},
    {lat: 1.428864, lng: 103.838561},
    {lat: 1.423841, lng: 103.826762},
    {lat: 1.430634, lng: 103.834055},
    {lat: 1.420809, lng: 103.848362},
    {lat: 1.433999, lng: 103.848829},
    {lat: 1.431342, lng: 103.838342},
    {lat: 1.417503, lng: 103.827966},
    {lat: 1.419842, lng: 103.834869},
    {lat: 1.426916, lng: 103.830768},
    {lat: 1.433341, lng: 103.830992},
    {lat: 1.413109, lng: 103.837469},
    {lat: 1.418126, lng: 103.843088},
    {lat: 1.413315, lng: 103.831292}
] 




function getDistance(point1, point2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (point2.lat - point1.lat) * Math.PI / 180;
    const dLng = (point2.lng - point1.lng) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

function kMeansClustering(data, k, maxIterations) {
    const centroids = data.slice(0, k);
    let clusters = Array(k);
    let prevCentroids = [];

    for (let iteration = 0; iteration < maxIterations; iteration++) {
        clusters = data.map(point => {
            const distances = centroids.map(centroid => getDistance(point, centroid));
            const clusterIndex = distances.indexOf(Math.min(...distances));
            return clusterIndex;
        });

        prevCentroids = centroids.map(centroid => ({ ...centroid }));

        centroids.forEach((centroid, i) => {
            const clusterPoints = data.filter((_, index) => clusters[index] === i);
            if (clusterPoints.length > 0) {
                centroid.lat = clusterPoints.reduce((sum, point) => sum + point.lat, 0) / clusterPoints.length;
                centroid.lng = clusterPoints.reduce((sum, point) => sum + point.lng, 0) / clusterPoints.length;
            }
        });

        if (centroids.every((centroid, i) => centroid.lat === prevCentroids[i].lat && centroid.lng === prevCentroids[i].lng)) {
            break;
        }
    }

    return { centroids, clusters };
}



const k = 6; // Number of clusters
const maxIterations = 100;
const { centroids, clusters } = kMeansClustering(locations, k, maxIterations);

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let centroids_markers = [];
let points_markers = [];

let centroids_showing = false;
let points_showing = false;
let route_showing = false;


    document.getElementById('show_centroids').onclick = function() {    
        if (centroids_showing) {
            for (let i = 0; i < centroids_markers.length; i++) {
            centroids_markers[i].setMap(null);
            }
            centroids_markers = [];

            centroids_showing = false;
        } else {
            centroids.forEach((centroid, index) => {
            const centroid_marker = new google.maps.Marker({
                position: centroid,
                map: map,
                title: `Centroid ${index + 1}`,
                icon: {
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    scale: 8,
                    fillColor: colors[index % colors.length],
                    fillOpacity: 0.6,
                    strokeColor: colors[index % colors.length],
                    strokeWeight: 2,
                }
            });
            centroids_markers.push(centroid_marker);
            centroids_showing = true;
            });
        };
    };

    document.getElementById('show_points').onclick = function() {
        if (points_showing) {
            for (let i = 0; i < points_markers.length; i++) {
            points_markers[i].setMap(null);
            }
            points_markers = [];

            points_showing = false;
        } else {
        // Example data: array of lat/lng objects      
        clusters.forEach((cluster, index) => {
            const point_marker = new google.maps.Marker({
                position: locations[index],
                map: map,
                title: `Cluster ${cluster + 1}`,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 5,
                    fillColor: colors[cluster % colors.length],
                    fillOpacity: 1,
                    strokeColor: colors[cluster % colors.length],
                    strokeWeight: 1,
                }
            });
            points_markers.push(point_marker);
            points_showing = true;
            });
        }
    };

    document.getElementById('optimised_route').onclick = function() {

        if (route_showing) {
            directionsRenderer.setMap(null);
            directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);

            var summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = " "

            route_showing = false;
            document.getElementById('directions-panel').style.display = 'none';

        } else {

            var directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        var request = {
            origin: {lat: 1.430388103767296, lng: 103.8403735688216},
            destination: {lat: 1.430388103767296, lng: 103.8403735688216},
            waypoints: [
                {location: centroids[0]},
                {location: centroids[1]},
                {location: centroids[2]},
                {location: centroids[3]},
                {location: centroids[4]},
                {location: centroids[5]}
            ],
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING
        };

        directionsService.route(request, function(result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
                // Extract total distance and duration
                var totalDistance = 0;
                var totalDuration = 0;

                var legs = result.routes[0].legs;
                for (var i = 0; i < legs.length; i++) {
                    totalDistance += legs[i].distance.value; // in meters
                    totalDuration += legs[i].duration.value; // in seconds
                }

                totalDistance = totalDistance / 1000; // convert to kilometers
                totalDuration = totalDuration / 60; // convert to minutes

                console.log('Total Distance: ' + totalDistance + ' km');
                console.log('Total Duration: ' + totalDuration + ' minutes');

                // Display the distance and duration on the map
                var summaryPanel = document.getElementById('directions-panel');
                summaryPanel.innerHTML = '';
                summaryPanel.innerHTML += 'Total Distance: ' + totalDistance.toFixed(2) + ' km<br>';
                summaryPanel.innerHTML += 'Total Duration: ' + totalDuration.toFixed(2) + ' minutes<br>';

    
            } else {
                console.error('Directions request failed due to ' + status);
            }
        });

        route_showing = true;
        document.getElementById('directions-panel').style.display = 'flex';

        
        }   
    


    };

map = new google.maps.Map(document.getElementById('map'));
var heatmapDisplayed = false;
var heatmap;

document.getElementById('heatmap').onclick = function() {
    if (heatmapDisplayed) {
        // If the heatmap is currently displayed, hide it
        heatmap.setMap(null);
        heatmapDisplayed = false;
    } else {
        // If the heatmap is not currently displayed, show it
        if (!heatmap) {
            // If the heatmap has not been created yet, create it

            var heatmapData = locations.map(function(location) {
                return new google.maps.LatLng(location.lat, location.lng);
            });

            heatmap = new google.maps.visualization.HeatmapLayer({
                data: heatmapData,
                map: map
            });

            heatmap.set('radius', 25);
            heatmap.set('opacity', 0.6);
            heatmap.set('gradient', [
                'rgba(0, 128, 0, 0)',   // Green, transparent
                'rgba(0, 128, 0, 1)',   // Green, opaque
                'rgba(255, 255, 0, 1)', // Yellow, opaque
                'rgba(255, 165, 0, 1)', // Orange, opaque
                'rgba(255, 0, 0, 1)'    // Red, opaque
            ]);
        } else {
            // If the heatmap has already been created, just display it
            heatmap.setMap(map);
        }

        heatmapDisplayed = true;
    }
}

    
    