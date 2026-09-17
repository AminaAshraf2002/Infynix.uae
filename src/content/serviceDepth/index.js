import { mediaDepth } from './media.js';
import { agencyDepth } from './agency.js';

// Depth content for the service pages, keyed by slug and rendered by
// ServiceDepth inside SolutionsPage. Written per market so the .ae, .co.uk
// and .com service pages stop being cross-domain duplicates of each other.
export const serviceDepth = {
  ...mediaDepth,
  ...agencyDepth,
};
