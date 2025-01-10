/**
 * The function `requestFullscreen` enables full-screen mode for the document's root element in a
 * TypeScript React application.
 */
export const requestFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(
        `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
      );
    });
  }
};

/**
 * The function `exitFullscreen` checks if the document is in full-screen mode and exits it if so,
 * handling any errors that may occur.
 */
export const exitFullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen().catch((err) => {
      console.error(
        `Error attempting to exit full-screen mode: ${err.message} (${err.name})`
      );
    });
  }
};

/**
 * The function `toggleFullScreen` checks if the document is in fullscreen mode and either requests
 * fullscreen if not, or exits fullscreen if already in fullscreen mode.
 */
export const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    requestFullscreen();
  } else {
    exitFullscreen();
  }
};

/* The `export const screenUtils` object is creating a module-level export in the TypeScript React
application. It is essentially exporting an object that contains references to the
`requestFullscreen`, `exitFullscreen`, and `toggleFullScreen` functions defined earlier in the code. */
export const screenUtils = {
  request: requestFullscreen,
  exit: exitFullscreen,
  toggle: toggleFullScreen,
};
