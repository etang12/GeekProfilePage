# **Approachable Geek Take-Home Project**

## Installation

This app was built using React Native, Node.js and Android Studio so these must be installed on your local machine.
Follow this [link](https://reactnative.dev/docs/environment-setup) for step-by-step installation guides to set-up the development environment for Android.

Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) on your local machine as this was the chosen package manager when creating this project.

Install all modules and dependencies for this project after cloning the repo and installing yarn by typing in your CLI:

`yarn install`

There are still some modifications that need to be made before being able to run the application. A file

`local.properties`

needs to be added to the /android folder in the root directory of the project. Inside the file, the path to your installed android SDK file should be written down.

`sdk.dir = /home/user/Android/Sdk`

Everything should be good to go if all of these steps are followed properly.

## Running the application

In order to run this application, an android emulator must be running using Android Studio.
Use this [link](https://developer.android.com/studio/run/emulator) to setup an android emulator.
Note: I emulated a Pixel 6 running Android 13 (SDK / API Level 33 Version Code TIRAMISU) to test my application.

After getting the android emulator up and running, two terminals should be open with both of them being located in the root directory of the project. In one terminal run the command:

`npx react-native start`

and in the other terminal run the command:

`npx react-native run-android`

If all is well, the app should be displayed on the screen of the android emulator!