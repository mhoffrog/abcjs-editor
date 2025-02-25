![abcjs](https://paulrosen.github.io/abcjs/img/abcjs_comp_extended_08.svg)
# abcjs-editor

> Simple visual editing of ABC strings

For info on the underlying library, please go to [abcjs](https://github.com/paulrosen/abcjs).

This project can be used in two ways: 

1. The source code is here for you to deploy yourself or use as an example of how to use abcjs.

2. This project is deployed to [abcjs-editor](https://editor.drawthedots.com) so that you can immediately use it to compose or display tunes.

## Deploy
To deploy, just merge the code you want to deploy to production - Netlify does the rest. The following script will do it if you've checked in all your changes:
```
./deploy.sh
```

## Docker
To run under Docker on your local machine, create an environment variable `$abcjs_editor_web` with the port you'd like to run on (possibly by adding the following to your system profile: `export abcjs_editor_web=3001`)

The first time, do `./docker-build.sh`. Then to start, do `./docker-start.sh` and you will be in a shell to run the `npm` commands.

## Contributing
Contributions and issues are welcome. Create a pull request to the `main` branch. 

Before contributing a new feature please create an issue so we can discuss - it might be something I'm working on already or it might be something that would conflict with something I'm working on.

This is intended to be a simple app for quick editing. A few additional pieces of functionality are welcome, but if you are looking for a full-fledged music editor, feel free to fork this and just use it as a starting place.

If you come up with something cool and it is fairly generic and either shows off abcjs or is a useful tool for using abcjs, please consider hosting it in this organization. Contact me for details.

## Creation
```bash
$ npx nuxi@latest init abcjs-editor-nuxt3
 Which package manager would you like to use? npm
 Initialize git repository? yes
```
- Add Pinia store framework (replacement for vuex):
  ```bash
  $ npx nuxi module add pinia
  ```
  - did update:
    - package.json:
      ```json
      ...
      "dependencies": {
        ...
        "@pinia/nuxt": "^0.9.0",
        "pinia": "^2.3.0",
        ...
      },
      ...
      ```
    - nuxt.config.ts:
      ```typescript
      export default defineNuxtConfig({
        ...
        modules: ['@pinia/nuxt'],
        ...
      })
      ```

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# generate GitHub Pages and serve locally
$ npm run ghpages
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Deploy to GitHub Pages

This repo provides a GitHub Action to deploy to GitHub Pages.
Enable GitHub Pages settings for this repo first and select `GitHub Actions` as the source for deployment.
See [Nuxt GitHub Pages](https://nuxt.com/deploy/github-pages) for further details.
