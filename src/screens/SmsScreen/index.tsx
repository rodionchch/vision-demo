import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {List, Text} from 'react-native-paper';

const SmsScreen = () => {
  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Unified Folders</List.Subheader>
        <List.Item
          title="Conversations"
          onPress={() => {}}
          left={() => <List.Icon icon="chat" style={{paddingLeft: 16}} />}
          right={() => <Text>659</Text>}
        />
        <List.Item
          title="All Unread"
          onPress={() => {}}
          left={() => (
            <List.Icon icon="email-mark-as-unread" style={{paddingLeft: 16}} />
          )}
          right={() => <Text>653</Text>}
        />
        <List.Item
          title="All Trash"
          onPress={() => {}}
          left={() => <List.Icon icon="delete" style={{paddingLeft: 16}} />}
          right={() => <Text>0</Text>}
        />
        <List.Item
          title="All Favorites"
          onPress={() => {}}
          left={() => <List.Icon icon="heart" style={{paddingLeft: 16}} />}
          right={() => <Text>0</Text>}
        />
      </List.Section>

      <List.Section>
        <List.Accordion
          title="Phone Numbers"
          left={() => (
            <List.Icon icon="account-group" style={{paddingLeft: 8}} />
          )}>
          <List.Item
            title="DEV TEST SIM"
            description={'+971608856211'}
            onPress={() => {}}
            left={() => (
              <List.Icon icon="file-account" style={{paddingLeft: 32}} />
            )}
          />
          <List.Item
            title="LOIM ALEXANDER ON HANDS"
            description={'+971608856211'}
            onPress={() => {}}
            left={() => (
              <List.Icon icon="file-account" style={{paddingLeft: 32}} />
            )}
          />
          <List.Item
            title="TOKARCHUK ANDREI"
            description={'+971608856211'}
            onPress={() => {}}
            left={() => (
              <List.Icon icon="file-account" style={{paddingLeft: 32}} />
            )}
          />
        </List.Accordion>
        <List.Accordion
          title="Companies"
          left={() => (
            <List.Icon icon="account-group" style={{paddingLeft: 8}} />
          )}>
          <List.Item
            title="LOIM ALEXANDER ON HANDS"
            description={'+971608856211'}
            onPress={() => {}}
            left={() => (
              <List.Icon icon="file-account" style={{paddingLeft: 32}} />
            )}
          />
          <List.Item
            title="TOKARCHUK ANDREI"
            description={'+971608856211'}
            onPress={() => {}}
            left={() => (
              <List.Icon icon="file-account" style={{paddingLeft: 32}} />
            )}
          />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

export default SmsScreen;
