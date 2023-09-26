# UI Lib Picker for Vue 3 / Nuxt 3

Choosing the right UI library is hard! There are many things to consider. This project is a simple tool to have an overview of different UI frameworks, and help you pick the right one.

[![social preview](https://ui-libs.vercel.app/img/social_small.png)](https://ui-libs.vercel.app/)

### How does it work?

- Hover features to know about them, and click them to filter libraries which implement it
- For any library, you can see the detail of available components.

## Contributions

### How to Contribute

Contributions are very welcome especially because UI libraries change a lot over time. In particular, here are particularly useful contributions:

- Editing existing content (new components for an existing UI)
- Suggesting a new filter
- Improving the tool itself

There is no database. To suggest a data update, simply change data into `data/` folder and make a PR.

### How to setup the project on your own machine

The project itself is a Nuxt 3 project using Nuxt UI and Tailwind CSS.

This repository is based on a [Dev Container](https://code.visualstudio.com/docs/devcontainers/containers). If you're using VS Code, you can run this project easily on your own machine using the `Clone Repository` command on your IDE.

Once installed, run `npm run dev` to start the project.

## FAQ

### Why Library X is not listed?

This tool is **made to help** people make a choice. A huge list of every single UI libs rather than a currated list may be counterproductive, while I understand it can feel _unfair_ or _frustrating_ that some libraries are absent of this list.

Here are some reasons that automatically discard the library to be listed:

- It does not support the latest Vue or Nuxt version.
- It seems unmaintained (e.g., [iView](https://github.com/iview/iview))
- It looks like more an "in progress" that final work (e.g., [Radix-vue](https://www.radix-vue.com/))
- It aims to mirror Android / iOS UIs (e.g., [Ionic Framework](https://ionicframework.com/), [Framework7](https://framework7.io/)).

Here are some (potentially subjective) reasons that could discard the library to be listed:

- It is not popular enough and doesn't bring anything new or cool to the table (specific component or feature, very high quality, ...)
- Majority of discussions (PR, issues) are in Chinese.

With all that being said, I'm open to discussion and new libraries evaluation, so feel free to open a PR.

### Why Component X is not listed?

- It's too basic to be relevant (e.g., a Loading Spinner)
- It's a Group component (e.g., a Button Group)
- It's mobile only (e.g., Pull To Refresh)
- It's listed with a different name (libraries don't always use the exact same names for same components)
- It's a "block" (a composition of different UI components like a Hero or a Nav bar) rather than a component
- It's a pure utility which could or should live in a collection of utilities like [VueUse](https://vueuse.org/).
- It's a broad familiy of dedicated components that make sense to have apart (e.g. Charts).

## About me

I'm David, 35, living in Paris, and <b>available for hire</b>.
Visit [my website](https://david-dahan.com) to know more about me, or [contact me](https://david-dahan.com/contact).

### Want to support?

If you want to show your support, you can [buy me a coffee](https://www.buymeacoffee.com/ddahan), it will be very appreciated.

### Disclaimer

While every effort has been made to ensure the accuracy of the information provided, the author assumes no responsibility for any errors or omissions.
