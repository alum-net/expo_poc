# Monorepo poc

This monorepo contains an **Expo mobile app** (Android/iOS) and a **web app** for an educational platform, as well as shared packages for components, hooks, types, and services.

## Project Structure

```
my-vle-monorepo/
├── apps/
│   ├── mobile/          # React Native / Expo mobile app (students only)
│   └── web/             # Expo web app (all profiles)
├── packages/
│   ├── ui/              # Shared UI components
│   ├── hooks/           # Shared hooks
│   ├── types/           # Shared TypeScript types
│   └── services/        # Shared API services
├── package.json         # Monorepo root
└── yarn.lock
```

---

## 1️⃣ How to Add a New Package

1. Create the folder:

```
mkdir -p packages/my-new-package/src
cd packages/my-new-package
```

2. Initialize the package:

```
yarn init -y
```

3. Set `react` and `react-native` as **peerDependencies**:

```json
{
  "name": "@my-vle/my-new-package",
  "version": "0.1.0",
  "main": "src/index.ts",
  "peerDependencies": {
    "react": "*",
    "react-native": "*"
  }
}
```

4. Add your code in `src/` and export via `src/index.ts`:

```ts
export * from "./MyComponent";
```

5. Install dependencies from root to link the package:

```
cd ../../
yarn install
```

---

## 2️⃣ How to Make Changes to a Package

1. Navigate to the package folder:

```
cd packages/ui
```

2. Edit your components/hooks:

```ts
// src/Button.tsx
export function Button(props) { ... }
```

3. Changes are automatically reflected in apps via Yarn workspace symlinks.

4. If using TypeScript:

```
yarn tsc --noEmit --watch
```

5. Restart Expo with cache clear if needed:

```
cd apps/mobile
expo start -c
```

---

## 3️⃣ How to Run Each Project Individually

### Mobile App

```
cd apps/mobile
yarn install
yarn start
```

- Press `a` → Android emulator/device
- Press `i` → iOS (optional)
- Press `w` → Web (for testing only, mobile entry point ignores web-only code)

### Web App

```
cd apps/web
yarn install
yarn web
```

- Opens in browser (`localhost:19006`)
- Full access to all profiles (students, teachers, admins)

---

## 4️⃣ How to Add a Dependency for All Projects/Packages

From the root of the monorepo:

```
yarn add <dependency-name> -W
```

- Adds the dependency in the **root package.json**
- All apps and packages can use it

---

## 5️⃣ How to Add a Dependency to Only One Project or Package

Navigate to the app or package folder:

```
cd apps/mobile
yarn add <dependency-name>
```

- Only this project receives the dependency

Or for a package:

```
cd packages/hooks
yarn add <dependency-name>
```

---

## 6️⃣ How to Build Each App Locally (without EAS)

### Mobile Android APK

1. Install Android Studio & emulator OR connect a device.
2. From the mobile folder:

```
cd apps/mobile
expo run:android
```

- Builds and installs the app on the emulator/device

To generate a standalone APK:

```
expo build:android -t apk
```

You can always go find the apk in the directory: _android/app/build/outputs/apk/release/_

### Web Build

1. From the web folder:

```
cd apps/web
expo build:web
```

- Outputs static files in `web-build/` folder

---

## 7️⃣ Recommended Workflow

1. Add or update packages in `packages/`.
2. Use shared components/hooks in apps (`apps/mobile`, `apps/web`).
3. Test apps individually via `expo start`.
4. Build mobile APK or web bundle when ready.
5. Add dependencies globally (`-W`) or locally per project/package.

---

## 8️⃣ Notes & Tips

- **Metro & Hooks:** Always use `react` and `react-native` as peer dependencies in packages to avoid “Invalid hook call”.
- **Workspace Linking:** Yarn workspaces automatically link packages; no need for manual `npm link`.
- **Cache:** Use `expo start -c` to clear cache if you see strange behavior.
- **TypeScript:** Use path aliases in `tsconfig.json` for cleaner imports:

```json
{
  "paths": {
    "@my-vle/ui": ["packages/ui/src"],
    "@my-vle/hooks": ["packages/hooks/src"]
  }
}
```

---

This README ensures new developers can **add packages, update shared code, run apps, and build them locally** with a clear workflow.

---

I can also make a **diagram showing how changes in packages propagate to mobile and web apps** if you want a visual workflow for the team. Do you want me to do that?
