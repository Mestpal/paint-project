# paint-project

> Small paint like app, using the [Nuxt](https://nuxtjs.org/) framework (a Vue.js framework) and the vector graphics scripting framework [paperjs](http://paperjs.org/) which works on top of the HTML5 Canvas.

Also it will use the UI framework [Vuetify](https://vuetifyjs.com/en/), so this paint-project will use some of Vuetify components to avoid some Vue component development, specially the atomic ones, and for the default layout

## Build Setup

The basic setup given by the Nuxt documentation should be enought to make this application works.

For detailed explanation check out [Nuxt.js docs](https://nuxtjs.org/guide/installation).

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
```

## Project Structure

The project structure follows the structure given by a new nuxt project with some extra folders. The following ones are the most used in this application:

- **components** :
    In this folder are available all the Vue components used by this app, including the atomics ones.

- **config**:
    custom folder where you can find the conf of the default values that will be used by some Vue components, you can add or remove more default options modifying these.

- **mixins**:
    Here you can find some js files with the common code used by other files, thanks to mixins we can write code in one place and use it in many other places.