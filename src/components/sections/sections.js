import { Advantages, Agitation, Candidates, DirectionOfWork, SubscribeToTheDatabase, UserProfile } from '../sections';

export const SectionType = {
  advantages: 'advantages',
  agitation: 'agitation',
  candidates: 'candidates',
  directionOfWork: 'direction-of-work',
  subscribeToTheDatabase: 'subscribe-to-the-database',
  userProfile: 'user-profile',
};

export const sectionTypeToComponentMap = {
  [SectionType.advantages]: Advantages,
  [SectionType.agitation]: Agitation,
  [SectionType.candidates]: Candidates,
  [SectionType.directionOfWork]: DirectionOfWork,
  [SectionType.subscribeToTheDatabase]: SubscribeToTheDatabase,
  [SectionType.userProfile]: UserProfile,
};
