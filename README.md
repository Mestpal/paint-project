# paint-project

![image-paint-app](https://raw.githubusercontent.com/Mestpal/paint-project/master/assets/Screenshot_2020-01-29%20paint-project%20-%20paint-project.png)

Small paint like app, using the [Nuxt](https://nuxtjs.org/) framework (a Vue.js framework) and the vector graphics scripting framework [paperjs](http://paperjs.org/) which works on top of the HTML5 Canvas. Also it will use the UI framework [Vuetify](https://vuetifyjs.com/en/), so this paint-project will use some of Vuetify components to avoid some Vue component development, specially the atomic ones, and for the default layout

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

# run tests
$ npm run test
```

## Project Structure

The project structure follows the structure given by a new nuxt project with some extra folders. The following ones are the most used in this application:

- **components** :
    In this folder are available all the Vue components used by this app, including the atomics ones.

- **config**:
    custom folder where you can find the conf of the default values that will be used by some Vue components, you can add or remove more default options modifying these.

- **mixins**:
    Here you can find some js files with the common code used by other files, thanks to mixins we can write code in one place and use it in many other places.

- **layout**
    It is where you can find the HTML common to all the pages or the selected ones. In this project we only have one page and one layout

- **pages**
    Nuxt will take all the vue files paths inside this folder as routes and will do its route magic only with that. Here we only have the index page so the root route will be the one aill work

- **store**
    Here we can find the stores, seme ones that Vuex uses, but here we only need to export and export the state, getters, mutations and actions and no more. Thank to this stores we can control the variables status allong all the components.

- **test**
    Here you can find some test made with Jest. This is not my stroggest asset so this part can be improved a lot.
