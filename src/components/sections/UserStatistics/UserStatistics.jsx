import React from 'react';
import { Link } from 'react-router-dom';
import { userProfileData } from '../../../mocks/sections';
import { Title } from '../../units';
import userStatisticsStyles from './UserStatistics.module.scss';

const userStatisticsClassName = 'user-statistics';

const UserStatistics = () => {
  const {
    titleStatistic,
    titleButtonContact,
    currentAmountSubscribe,
    numberLimitSubscribe,
    titleCandidates,
    numberLimitCandidates,
    currentAmountCandidates,
    titleButtonCandidate,
  } = userProfileData;

  return (
    <section className={userStatisticsStyles[userStatisticsClassName]}>
      <div className={userStatisticsStyles[`${userStatisticsClassName}__container`]}>
        <div className={userStatisticsStyles[`${userStatisticsClassName}__contacts`]}>
          <Title title={titleStatistic} titleLevel="h4" />
          <div className={userStatisticsStyles[`${userStatisticsClassName}__contacts-container`]}>
            <div>
              {currentAmountSubscribe}/{numberLimitSubscribe}
            </div>
            <Link to="tmp">
              <div dangerouslySetInnerHTML={{ __html: titleButtonContact }} />
            </Link>
          </div>
        </div>
        <div className={userStatisticsStyles[`${userStatisticsClassName}__candidates`]}>
          <Title title={titleCandidates} titleLevel="h4" />
          <div className={userStatisticsStyles[`${userStatisticsClassName}__candidates-container`]}>
            <div>
              {currentAmountCandidates}/{numberLimitCandidates}
            </div>
            <Link to="tmp">
              <div dangerouslySetInnerHTML={{ __html: titleButtonCandidate }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { UserStatistics };
