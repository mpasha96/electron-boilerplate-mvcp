# electron-boilerplate - MVCP Design

A minimalistic boilerplate for [electron](http://electron.atom.io) - MVCP Design.

This project contains only bare minimum of dependencies and skeleton hierarchy for MVCP design, to provide you with nice development environment. Doesn't impose on you any frontend technologies, so you can pick your favourite.

# Quick start

Make sure you have [Node.js](https://nodejs.org) installed, then type the following commands known to every Node developer...
```
git clone https://github.com/mpasha96/electron-boilerplate.git
cd electron-boilerplate
npm install
npm start
```
...and you have a running desktop application on your screen.


# Adding npm modules to your app

Remember to respect the split between `dependencies` and `devDependencies` in `package.json` file. Your distributable app will contain modules listed in `dependencies` after running the pack script.

# Making a release

To package your app into an installer use command:
```
npm pack
```

Once the packaging process finished, the `dist` directory will contain your distributable file.

We use [electron-builder](https://github.com/electron-userland/electron-builder) to handle the packaging process. It has a lot of [customization options](https://www.electron.build/configuration/configuration), which you can declare under `"pack"` key in `package.json`.

You can package your app cross-platform from a single operating system, [electron-builder kind of supports this](https://www.electron.build/multi-platform-build), but there are limitations and asterisks.

# Contributors

[Sayam Qazi](https://github.com/devqazi)
[Mukarram Pasha](https://github.com/mpasha96)
[Aqeel Altaf](https://github.com/aqeelaltaf)

