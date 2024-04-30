import { advantagesData, agitationData } from '../sections';

export const pages = [
  {
    pathname: '/',
    sections: [
      {
        content: agitationData,
        type: 'agitation',
      },
      {
        content: '',
        type: 'direction-of-work',
      },
      {
        content: advantagesData,
        type: 'advantages',
      },
      {
        content: '',
        type: 'candidates',
      },
      {
        content: '',
        type: 'subscribe-to-the-database',
      },
    ],
  },
];
