export const eNavigateTo = (path: string): void => {
  const event = new CustomEvent('EGERIA_NAVIGATE_TO', {
    'detail': {
      path: path
    }
  });

  document.dispatchEvent(event);
};