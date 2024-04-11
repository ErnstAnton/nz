let lat = -41.293056;
let lng = 174.001944;
let zoom = 13;

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});

L.control.scale({
    imperial:false
}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup(`
<h2>Picton<h2>
<ul>
<li>Breite: ${lat.toFixed(5)} </li>
<li>Länge: ${lng.toFixed(5)} </li>
</ul>
`).openPopup();



