## [React-Native: Udemy Course](https://www.udemy.com/the-complete-react-native-and-redux-course/) Notes

### Setup

To initialize your project, run:
```bash
react-native init {PROJECT_NAME}
react-native init albums
```

To run your app on iOS:
```bash
cd /albums
react-native run-ios
```

To run your app on Android:
```bash
cd /albums
# Have an Android emulator running (quickest way to get started), or a device connected
react-native run-android
```

Regarding the iOS Simulator:

- Press **Cmd+R** to reload.
- Press **Cmd+D** or shake to open up the development menu.

Within Atom: install Linter & ESlint
```bash
npm install --save-dev eslint-config-rallycoding
```

(My) Setup debug references:

- https://stackoverflow.com/questions/32105860/brew-install-watchman-not-working
- https://ponderingdeveloper.com/2013/09/03/listing-globally-installed-npm-packages-and-version/
- https://stackoverflow.com/questions/39778607/error-running-react-native-app-from-terminal-ios
- https://github.com/facebook/react-native/releases/tag/v0.49.0
- https://rallycoding.com/blog/troubleshooting-react-native-startup/

General references:

- https://facebook.github.io/react-native/docs/getting-started
- https://github.com/StephenGrider/ReactNativeReduxCasts

### Introduction: React & React-Native

You will nearly always make use of two Javascript libraries: **React** & **React-Native**.

- React
  - Knows how a component should behave
  - Knows how to take a bunch of components and make them work together
- React Native
  - Knows how to take the output from a component and place it on the screen
  - Provides default core components (image, text)

There are two types of Components: **Functional** & **Class**

- Functional Component
  - Used for presenting static data
  - Cannot handle fetching data
  - Easy to write
  - These are functions, so you can call props like `props.name`

```javascript
const Header = () => {
  return <Text>Hi there!</Text>
}
```

- Class Component
  - Used for dynamic sources of data
  - Handles any data that might change (fetching data, user events, etc), by updating the **State**
  - Knows when it gets rendered to the device (useful for data fetching)
  - More code to write
  - These are classes, so you can call props like `this.props.name`

```javascript
// Component is a base-class provided by react
class Header extends Component {
  render() {
    return <Text>Hi There!</Text>
  }
}
```

Rules of **State** within **Class Components**:

- Definition of **state**: a plain javascript object used to record and respond to user-triggered events.
- When we need to update what a Class component shows, call `this.setState`.
  - Only change state with 'setState', do not do `this.state = 123`.
- **States** are used for internal record keeping within class based components, whereas **props** are used to transfer data from parents to children (both classes). Both words are **keywords**!

Where to find logs?

- In the iOS simulator, press: **Cmd+D** to open up the development menu.
- Click on debug remotely, which will open up **http://localhost:8081/debugger-ui/**
  - Note that you need to visit the page via the Simulator, else it won't work.

Layout: Flex Box FAQ

- https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35
- https://codedaily.io/tutorials/34/React-Native-Layout-Examples
- http://flexboxfroggy.com/

Firebase

Run:

```bash
npm install --save firebase
```
