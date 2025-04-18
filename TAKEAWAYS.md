# Setting Up a React Native (Expo) Project with NativeWind & Tailwind CSS

This guide walks you through creating a new Expo project and configuring NativeWind with Tailwind CSS for styling.

---

## 1. Create a New Expo Project

```sh
npx create-expo-app@latest movies
cd movies
```

## 2. (Optional) Reset the Project

If you need to reset the project to its initial state:

```sh
npm run reset-project
```

## 3. Run the App

```sh
npx expo start
```

## 4. Install NativeWind and Peer Dependencies

```sh
npx create-expo-stack@latest --nativewind
npm install nativewind tailwindcss@^3.4.17 react-native-reanimated@3.16.2 react-native-safe-area-context
```

## 5. Initialize Tailwind CSS

```sh
npx tailwindcss init
```

Edit `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"], // Update this if your components are elsewhere
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 6. Create a Global CSS File

Create `app/global.css` and add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 7. Configure Babel

Edit `babel.config.js`:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

## 8. Configure Metro Bundler

Generate and edit `metro.config.js`:

```sh
npx expo customize metro.config.js
```

Replace contents with:

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });
```

## 9. Import the Global CSS File

In `app/_layout.tsx` (or your root layout file):

```ts
import "../global.css";

export default function RootLayout() {
  // Your App
}
```

## 10. Update `app.json` for Web Support

Edit `app.json`:

```json
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```

## 11. Add NativeWind Type Declarations

At the project root, create `nativewind.d.ts`:

```ts
/// <reference types="nativewind/types" />
```

---

**Notes:**
- Make sure your file paths in `tailwind.config.js` and imports match your project structure.
- If you use TypeScript, ensure your type declarations are correct.
- For more details, see the [NativeWind documentation](https://www.nativewind.dev/) and [Expo documentation](https://docs.expo.dev/).