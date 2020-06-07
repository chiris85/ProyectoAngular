// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products/',
  firebase: {
    apiKey: 'AIzaSyBENGYfPIo1Rh9bCjLh3mzKfyzHvEnSoU0',
    authDomain: 'platzi-store-17d72.firebaseapp.com',
    databaseURL: 'https://platzi-store-17d72.firebaseio.com',
    projectId: 'platzi-store-17d72',
    storageBucket: 'platzi-store-17d72.appspot.com',
    messagingSenderId: '466073793384',
    appId: '1:466073793384:web:025a12d298e2d0d1721cdd'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
