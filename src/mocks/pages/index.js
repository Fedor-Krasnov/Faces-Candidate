import { advantagesData, agitationData, candidatesData, directionOfWorkData } from '../sections';

export const pages = [
  {
    pathname: '/',
    sections: [
      {
        content: agitationData,
        type: 'agitation',
      },
      {
        content: directionOfWorkData,
        type: 'direction-of-work',
      },
      {
        content: advantagesData,
        type: 'advantages',
      },
      {
        content: candidatesData,
        type: 'candidates',
      },
      {
        content: '',
        type: 'subscribe-to-the-database',
      },
    ],
  },
];
