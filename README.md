# StoryKit Storytelling Template

A template interactive for storytelling using StoryKit.

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development
server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

You can also open the `dist/index.html` file in a web browser (note that if using `LottieAnimation`,
you must pass the animation directly through the `animationData` prop rather than as a file via
`src`). To distribute this local static build, send the entire `dist` folder.

For the build to work directly in browser without a local server, it compiles all code into one
`index.html` file using the third-party
[vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile) library. See
[here](https://github.com/richardtallent/vite-plugin-singlefile#limitations) for its limitations,
including routing restrictions.

## Code Quality

This project uses linting and auto-formatting to ensure our code is well-formatted.

To run all the checks:

```shell
npm run check
```

To run a specific check:

- `npm check:format` - prettier
- `npm check:lint` - eslint

Note that `check-format` and `check-lint` will both automatically fix any errors that they can, so
don't be surprised if you have a few changes to your code after running those commands.
