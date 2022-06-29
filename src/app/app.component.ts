import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, NavigationControl } from 'maplibre-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    // This API key is for use only in stackblitz.com
    // Get your Geoapify API key on https://www.geoapify.com/get-started-with-maps-api
    // The Geoapify service is free for small projects and the development phase.
    const myAPIKey = 'YOUR_MAPTILER_API_KEY_HERE';
    const mapStyle = 'https://api.maptiler.com/maps/streets/style.json';

    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 9,
    };

    const map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?key=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    map.addControl(new NavigationControl({}), 'top-left');
  }
}
