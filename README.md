# Ace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm run cordova-run-android` to test on android. You need android device or AVD.
Run `npm run cordova-run-ios` to test on ios. You need XCode.

Run `npm run elecron-run` to test on desktop.
For production build, change PACKAGE from `.env` file to `true`.
For live reload during development, change PACKAGE from `.env` file to `false`.

Cordova and Electron build doesn't work simultaneously.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run `npm run cordova-build-android` to build apk file. Built file will be stored in `cordova/platforms/android/app/build/outputs/apk/debug` with the name `app-debug`.

Run `npm run electron-build-platform` to build desktop app after changing PACKAGE from `.env` file to `true`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
