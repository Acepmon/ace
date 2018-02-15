# ACE (Angular/Cordova/Electron) Boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Pre requirements
1. Install electron globally `npm install -g electron`
2. Install cordova globally `npm install -g cordova`
3. Go to `cd cordova` and add platforms using `cordova platform add android`
4. Open port 4200 on your local machine firewall
5. Change content source IP in `.env` to your local machine IP
6. Now you are good to go! just execute command `npm start` to start web version

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm run cordova-run-android` to test on android. You need android device or AVD.
Run `npm run cordova-run-ios` to test on ios. You may need XCode.
To change IP address, change `HOST` from `.env` file.

Run `npm run elecron-run` to test on desktop.

## Live build

Live Build:

For Cordova, run `npm run cordova-live-android`.

For Electron, run `npm run electron-live`.

If live reload doesn't work, make sure you have a dev server running. (By `ng serve`).

NOTE: Cordova and Electron build doesn't work simultaneously.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run `npm run cordova-build-android` to build apk file. Built file will be stored in `cordova/platforms/android/app/build/outputs/apk/debug` with the name `app-debug`.

Run `npm run electron-build-platform` to build desktop app after changing PACKAGE from `.env` file to `true`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
