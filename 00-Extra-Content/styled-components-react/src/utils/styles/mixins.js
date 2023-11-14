export const setFlex = ( {xF='center', yF='center' } = {} ) => `
  display:flex;
  align-items:${yF};
  justify-content:${xF}
`; 