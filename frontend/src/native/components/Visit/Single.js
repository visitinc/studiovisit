import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, List, ListItem, Text, Button
} from 'native-base';
import { errorMessages } from '../../../constants/messages';
import Error from '../UI/Error';
import Spacer from '../UI/Spacer';

const VisitView = ({
  error, users, userId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  let user = null;
  if (userId && users) {
    user = users.find(item => parseInt(item.id, 10) === parseInt(userId, 10));
  }

  // Recipe not found
  if (!user) return <Error content={errorMessages.user404} />;

  // Build Ingredients listing
  const practices = user.practices.map(item => (
    <ListItem key={item.name} rightIcon={{ style: { opacity: 0 } }}>
      <Text>{item.name}</Text>
      <Spacer size={10} />
      <Text>{item.location}</Text>
      <Button
        block
        bordered
        small
        onPress={() => onPress(item)}
      >
        <Text>
          Schedule
        </Text>
      </Button>
    </ListItem>
  ));

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
              <List>{practices}</List>
            </Content>
          </CardItem>
        </Card>

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

VisitView.propTypes = {
  error: PropTypes.string,
  userId: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

VisitView.defaultProps = {
  error: null,
};

export default VisitView;
