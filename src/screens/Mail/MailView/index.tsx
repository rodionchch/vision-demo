import React from 'react';

import MailActions from 'components/MailActions';
import Avatar from 'components/Avatar';

import * as s from './styles';

const MailView = () => {
  return (
    <>
      <s.MailView>
        <s.MailViewHeader>
          <Avatar label={'A'} />
          <s.MailViewHeaderContent>
            <s.MailViewHeaderInner>
              <s.MailViewHeaderTitle>Apple Developer</s.MailViewHeaderTitle>
              <s.MailViewHeaderDate>03.06.2023</s.MailViewHeaderDate>
            </s.MailViewHeaderInner>
            <s.MailViewHeaderSubTitle>
              <s.MailViewHeaderSubTitle white>To:</s.MailViewHeaderSubTitle>{' '}
              Rodion
            </s.MailViewHeaderSubTitle>
          </s.MailViewHeaderContent>
        </s.MailViewHeader>
        <s.MailViewDivider />

        <s.MailViewTitle>
          Reminder: The enhanced global pricing update is coming on May 9.
        </s.MailViewTitle>

        <s.MailViewContent>
          <s.MailViewContentTitle>Developer</s.MailViewContentTitle>
          <s.MailViewContentDivider />
          <s.MailViewContentText>
            Hello Родион, {'\n\n'}
            The App Store’s world-class commerce and payments system provides a
            convenient and effective way to set equalized prices across
            international markets, adapt to foreign exchange rate or tax
            changes, and manage prices per storefront. Last month, we introduced
            major pricing upgrades, including enhanced global pricing, across
            all purchase types. Now more customer friendly, the new price points
            follow the most common conventions in each country or region, and
            are globally equalized to your selected base country or region using
            publicly available exchange rate information from financial data
            providers. {'\n\n'}
            As a reminder, on May 9, 2023, pricing for existing apps and
            one-time in-app purchases will be updated across App Store
            storefronts using your current price in the United States as the
            basis — unless you’ve made relevant updates after March 8, 2023. You
            can update your base country or region at anytime using App Store
            Connect or the App Store Connect API. If you choose to do so, prices
            in your selected base country or region won’t be adjusted when
            prices are globally equalized on the App Store to account for
            foreign currency changes or new taxes. You can also choose to
            manually adjust prices on multiple storefronts of your choice
            instead of using the equalized price. {'\n\n'}
            Apple Developer Relations
          </s.MailViewContentText>
        </s.MailViewContent>
      </s.MailView>
      <MailActions />
    </>
  );
};

export default MailView;
