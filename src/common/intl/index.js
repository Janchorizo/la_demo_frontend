export const AppLanguage = {
  English: 'en',
  Spanish: 'es',
};

export const AppRoute = {
  Home: 'routes.home',
  Myself: 'routes.myself',
  Knowledge: 'routes.knowledge',
  Parkings: 'routes.parkings',
  TheOffer: 'routes.offer',
};

export const AppRouteTitle = {
  [AppRoute.Home]: 'home.title',
  [AppRoute.Myself]: 'myself.title',
  [AppRoute.Knowledge]: 'knowledge.title',
  [AppRoute.Parkings]: 'parkings.title',
  [AppRoute.TheOffer]: 'offer.title',
};

import en from './en.js';
import es from './es.js';
export const appStrings = {en, es};
