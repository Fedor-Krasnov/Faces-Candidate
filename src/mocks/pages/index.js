import {
  advantagesData,
  agitationData,
  candidatesData,
  directionOfWorkData,
  subscribeToTheDatabaseData,
} from '../sections';

export const pages = [
  {
    pathname: '/',
    seo: {
      title: 'Faces-Candidate',
      description: '',
      keywords: '',
    },
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
        content: subscribeToTheDatabaseData,
        type: 'subscribe-to-the-database',
      },
    ],
  },
  {
    pathname: '/user-profile',
    seo: {
      title: 'User profile - Faces-Candidate',
      description: '',
      keywords: '',
    },
    sections: [
      {
        content: '',
        type: 'user-profile',
      },
    ],
  },
];
