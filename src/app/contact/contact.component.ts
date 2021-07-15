import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  map: Mapboxgl.Map | undefined;
  marker: Mapboxgl.Marker | undefined;

  constructor() { }

  ngOnInit(): void {
    // Setting the Mapbox access token
    (Mapboxgl as any).accessToken = environment.mapboxKey;

    // Getting the map and adding it to #map-mapbox
    this.map = new Mapboxgl.Map({
      container: 'map-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [28.034088, -26.195246], // Longitude, Latitude
      zoom: 9
    });

    // Adding a marker to the map
    this.marker = new Mapboxgl.Marker({
      color: "#000",
      draggable: true
    }).setLngLat([28.034088, -26.195246])
    .addTo(this.map);
  }
}
