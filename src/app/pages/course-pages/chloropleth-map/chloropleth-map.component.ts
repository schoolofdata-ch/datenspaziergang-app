import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../../services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-chloropleth-map',
  templateUrl: './chloropleth-map.component.html',
  styleUrls: ['./chloropleth-map.component.scss']
})
export class ChloroplethMapComponent implements OnInit {

  nextLink: string;
  title: string;
  Object = Object; // workaround to access `Object` in template

  defaultText: string = "Wähle eine Kategorie und einen Bezirk";
  mapData: Object = { name: this.defaultText };
  activeMap: string;
  theMapStyles: any;

  legend = [
    ['0-5', '#FFEDA0'],
    ['5-15', '#FED976'],
    ['15-25', '#FEB24C'],
    ['25-40', '#FD8D3C'],
    ['40-55', '#FC4E2A'],
    ['55-75', '#E31A1C'],
    ['75-90', '#BD0026'],
    ['90-110', '#800026'],
    ['110+', '#420014']
  ];

  mapKeysToLayer: Object = {
    society: 'Gesellschaft / Partizipation',
    craft: 'Handwerk',
    culture: 'Kunst / Kultur',
    literature: 'Literatur / Medien',
    music: 'Musik / Tanz',
    stem: 'Naturwissenschaft / Technik',
    sports: 'Sport',
    language: 'Sprachen',
    environment: 'Umwelt'
  };

  mapOption: any = {
    center: [13.4190634, 52.4945314],
    zoom: [9],
    style: environment.mapboxTiles.chloropleth,
    sources: {
      berlinBorders: "https://raw.githubusercontent.com/berlinermorgenpost/Berlin-Geodaten/master/berlin_bezirke.geojson",
      schoolActivities: "/assets/data/schools.json"
    }
  };

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const course_id = +this.route.snapshot.paramMap.get('course');
    const station_id = +this.route.snapshot.paramMap.get('station');
    const subject_id = +this.route.snapshot.paramMap.get('subject');
    const page_id = +this.route.snapshot.paramMap.get('page');
    this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe((page) => {
      this.title = page.name;
      this.coursesService.getNextPageLink(course_id, station_id,subject_id, page.next).subscribe((nextPage) => {
        this.nextLink = nextPage;
      });
    });
  }

  hoverFilter = ['==', 'name', ''];

  activateHoverOn(evt: any) {
    this.mapData = evt.features[0].properties;
    this.hoverFilter = ['==', 'name', evt.features[0].properties.name];
  }

  disableHover() {
    this.mapData = {};
    this.mapData['name'] = this.defaultText;
    this.hoverFilter = ['==', 'name', ''];
  }

  moveLayerToTop(evt: any) {
    let mapId = evt.target.value;
    this.activeMap = mapId;
    let layerId = mapId.toUpperCase();
    this.theMapStyles = this.theMapStyles.moveLayer(layerId, 'outline');
  }

  onLoad(evt: any) {
    this.theMapStyles = evt;
  }

}