import React from 'react';
import PropTypes from 'prop-types';
import { Image, FlatList } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, List, ListItem, Text, Button
} from 'native-base';
import { errorMessages } from '../../../constants/messages';
import Error from '../UI/Error';
import Spacer from '../UI/Spacer';
import PracticeListing from '../Practice/Listing';

const UserView = ({
  error, users, userId,
}) => {
  // Error
  if (error) return <Error content={error} />;
  const keyExtractor = item => `${item.id}`;

  let user = null;
  if (userId && users) {
    user = users.find(item => parseInt(item.id, 10) === parseInt(userId, 10));
  }

  // Recipe not found
  if (!user) return <Error content={errorMessages.user404} />;

  return (
    <Container>
      <Content padder>
        <Image source={{ uri: user.image }} style={{ height: 100, width: null, flex: 1 }} />

        <Spacer size={25} />
        <H3>{user.name}</H3>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>{user.description}</Text>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>Practices</Text>
          </CardItem>
          <CardItem>
            <Content>
              {
                !user.practices.length
                  ? <CardItem><Text note>{user.name} has no practices.</Text></CardItem>
                  : (
                    <FlatList
                      data={user.practices}
                      renderItem={i => <PracticeListing practice={i.item} />}
                      keyExtractor={keyExtractor}
                    />
                  )
              }
            </Content>
          </CardItem>
        </Card>

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

UserView.propTypes = {
  error: PropTypes.string,
  userId: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

UserView.defaultProps = {
  error: null,
};

export default UserView;
