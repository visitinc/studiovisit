## 👋 Intro

The project is _super_ helpful to kick-start your next project, as it provides a lot of the common tools you may reach for, all ready to go. Specifically:
- A shared React and React Native structure
- __Flux architecture__
    - [Redux](https://redux.js.org/docs/introduction/)
- __Routing and navigation__
    - [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) for native mobile
    - [React Router](https://github.com/ReactTraining/react-router) for web
- __Data Caching / Offline__
    - [Redux Persist](https://github.com/rt2zz/redux-persist)
- __UI Toolkit/s__
    - [Native Base](https://nativebase.io/) for native mobile
    - [Bootstrap](https://getbootstrap.com/) for web
- __Simpler mobile app development__ through
    - [Expo](https://expo.io/)
- __Code Linting__ with
    - [Airbnb's JS Linting](https://github.com/airbnb/javascript) guidelines

---

## 📖 Docs

- [Understanding the file structure](/docs/file-structure.md)
- [FAQs & Opinions](/docs/faqs.md)
- [Testing, Deploying & Publishing](/docs/publishing.md)
- [Tests & testing](/docs/testing.md) (coming soon...)

---

## 🚀 Getting Started

#### 1. Clone and Install

_*It's recommended that you install [React Native Debugger](https://github.com/jhen0409/react-native-debugger/releases) and open before `npm run start`._

```bash
# Install dependencies
npm install
```

#### 2.1. Run the _React Native_ App

```bash
# Start the React Native packager
npm run start
```

Instructions are shown in the terminal. You can select to open it in:

- An emulator (either iOS or Android)
- Your mobile device with the [Expo app](https://expo.io/). It will reload if you save edits to your files and you will see build errors and logs in the terminal.

#### 2.2. Run the _Web_ App

```bash
# Starts are local live-reload server at:
# http://localhost:3001
npm run web
```

Via webpack, starts a localhost server on port 3001 [http://localhost:3001](http://localhost:3001).

- Save code and it auto refreshes
- Install [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) into Chrome to see the state of Redux

## 💡 Inspiration

- [This blog post](http://jkaufman.io/react-web-native-codesharing/) helped put the ideas into action

_If there's any other ideas presented in this repo, that you think worth mentioning - feel free open a pull request :)_
