import {Course} from './model/course';

import {Point} from './model/point';
import {Stations} from './model/stations';
import OverviewStation = Stations.OverviewStation;
import PointToPointStation = Stations.PointToPointStation;
import BerlinTreeStation = Stations.BerlinTreeStation;
import {StoryComponent} from './pages/course-pages/story/story.component';
import StoryStation = Stations.StoryStation;
import QuizStation = Stations.QuizStation;
import SuccessStation = Stations.SuccessStation;

export const COURSES: Course[] = [
  {
    id: 1,
    location: 'Berlin-Mitte',
    title: 'erster Spaziergang',
    preview_image: '/assets/images/datawalk.png',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ' +
    'magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea ' +
    'takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
    'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea ' +
    'rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur ' +
    'sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos ' +
    'et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   ' +
    '\n' +
    '\n' +
    'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis ' +
    'at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla ' +
    'facilisi. Lorem ipsum dolor sit amet,',
    entry: 0,
    stations: [
      <OverviewStation>{
        id: 0, next: 1, title: 'Overview', waypoints: [{lat: 13.390789031982422, lon: 52.51833617387861},
          {lat: 13.394072055816649, lon: 52.51682151784933},
          {lat: 13.394308090209961, lon: 52.514209919312506},
          {lat: 13.391432762145996, lon: 52.51279959156077},
          {lat: 13.390467166900635, lon: 52.51426215280443},
          {lat: 13.385703563690186, lon: 52.51452331933267},
          {lat: 13.387548923492432, lon: 52.516024996747156},
          {lat: 13.386948108673096, lon: 52.51735687637764},
          {lat: 13.38883638381958, lon: 52.51905431150669}]
      },
      <PointToPointStation>{
        id: 1, title: 'First Section', start: {lat: 13.38883638381958, lon: 52.51905431150669},
        finish: {lat: 13.386948108673096, lon: 52.51735687637764}, next: 10, prev: 1
      },
      <BerlinTreeStation>{id: 10, address: 'Görlitzer Park', next: 2, prev: 1, title: 'Bäume und so'},
      <StoryStation>{
        id: 2, img: '/assets/images/datawalk.png', content: 'Künstler zu Kunstwerken der Sammlung des Museum Moderner Kunst ' +
        'Stiftung Ludwig Wien zu bereits aufbereiteten Kunstwerken, die sich auch in der Online-Sammlung des mumok befinden.',
        title: 'Museumsquartier', next: 3, prev: 10
      },
      <PointToPointStation>{
        id: 3, title: 'Nächste Etappe', prev: 2, next: 4, start: {lat: 13.38883638381958, lon: 52.51905431150669},
        finish: {lat: 13.386948108673096, lon: 52.51735687637764}
      },
      <StoryStation>{
        id: 4, next: 5, title: 'Story2', content: 'Künstler zu Kunstwerken der Sammlung des Museum Moderner Kunst Stiftung ' +
        'Ludwig Wien zu bereits aufbereiteten Kunstwerken, die sich auch in der Online-Sammlung des mumok befinden.', prev: 3,
        img: '/assets/images/datawalk.png'
      },
      <QuizStation>{id: 5, question: "How do you do ?", answers: ["Good", "Bad", "Fine"], correct: 0, next: 6, prev: 4, title: "Quiz"},
      <SuccessStation>{id: 6, message: "You made it!!!!", title: "Success", prev: 5}
    ]
  }
];
