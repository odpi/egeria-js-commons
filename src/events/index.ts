export const eNavigateTo = (path: string): void => {
  const event = new CustomEvent('EGERIA_EVENTS', {
    'detail': {
      path: path,
      type: 'EGERIA_NAVIGATE_TO'
    }
  });

  document.dispatchEvent(event);
};