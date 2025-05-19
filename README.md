# ReactNativeBioLoginDemo
React Native Biometric with Face ID demo
Great! Let’s build a detailed, production-ready React Native login app with:

✅ Username/password login

🔐 Face ID / biometric authentication

📦 Secure credential storage with react-native-keychain

📱 Navigation using @react-navigation/native

✨ Clean UI and helpful prompts


npx @react-native-community/cli init projectName


Install all of these in your project folder:

npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-reanimated react-native-screens react-native-safe-area-context react-native-gesture-handler

npm install react-native-biometrics
npm install react-native-keychain
npx pod-install
File Structure

/BiometricLoginApp
│
├── App.js
└── /screens
    ├── LoginScreen.js
    └── HomeScreen.js


    Run Your App

iOS: npx react-native run-ios

Android: npx react-native run-android
