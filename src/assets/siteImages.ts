import heroSplash from './images/portraits/artist-portrait-stairs.jpg';
import showreelVideo from './images/VID-20260216-WA0071.mp4';
import heroAbout from './images/work/work-painting-portrait.jpg';
import heroWorkshops from './images/work/work-event-host-speaking.jpg';
import homeAboutPortrait from './images/portraits/artist-portrait-serious.jpg';

import projectWorkSurf from './images/work/work-music-dj.jpg';
import projectWorkFishing from './images/work/work-media-interview-circle.jpg';
import projectWorkCommercial from './images/work/work-product-presentation-stage.jpg';
import projectWorkArctic from './images/work/work-gallery-speaking.jpg';
import projectWorkMusic from './images/work/work-dj-booth-performance.jpg';
import projectWorkPortrait from './images/portraits/artist-portrait-piano.jpg';

import blogGear from './images/work/work-close-interview.jpg';
import blogBehindScenes from './images/work/work-interview-pink-dress.jpg';
import blogIndustryTalk from './images/work/work-stage-seated-guests.jpg';
import blogLenses from './images/portraits/portrait-gallery-man-sideview.jpg';
import blogTravel from './images/art/art-gallery-outdoor-display.jpg';

import stockNature from './images/art/art-forest-path-painting.jpg';
import stockOcean from './images/art/art-dove-sunrise-painting.jpg';
import stockTravel from './images/events/event-branded-walkway-empty.jpg';
import stockUrban from './images/work/work-dj-booth-performance.jpg';
import stockHumanStories from './images/events/event-garden-group-portrait.jpg';
import stockAerial from './images/art/art-birds-flowers-painting.jpg';

export const siteImages = {
  heroSplash,
  showreelVideo,
  heroAbout,
  heroWorkshops,
  homeAboutPortrait,
  projects: {
    workSurf: projectWorkSurf,
    workFishing: projectWorkFishing,
    workCommercial: projectWorkCommercial,
    workArctic: projectWorkArctic,
    workMusic: projectWorkMusic,
    workPortrait: projectWorkPortrait,
  },
  blog: {
    gear: blogGear,
    behindScenes: blogBehindScenes,
    industryTalk: blogIndustryTalk,
    lenses: blogLenses,
    travel: blogTravel,
  },
  stock: {
    nature: stockNature,
    ocean: stockOcean,
    travel: stockTravel,
    urban: stockUrban,
    humanStories: stockHumanStories,
    aerial: stockAerial,
  },
} as const;


