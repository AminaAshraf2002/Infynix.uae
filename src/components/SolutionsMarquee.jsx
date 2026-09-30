import React from 'react';
import WhatWeOffer from './WhatWeOffer';

/**
 * SolutionsMarquee legacy wrapper - forwards directly to the new 3D
 * interactive, high-converting WhatWeOffer service grid.
 */
const SolutionsMarquee = (props) => {
  return <WhatWeOffer {...props} />;
};

export default SolutionsMarquee;
