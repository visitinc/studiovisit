import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, TouchableOpacity, RefreshControl, Image, View
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button, List, ListItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';
import Practice from '../Practice';

const UserListing = ({
  error,
  loading,
  users,
  reFetch,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => `${item.id}`;

  const onUserPress = item => Actions.user({ match: { params: { id: String(item.id) } } });
  const onSchedulePress = item => Actions.visits({  });

  return (
    <Container>
      <Content padder>
        <FlatList
          numColumns={1}
          data={users}
          renderItem={({ item }) => (
            <Card transparent style={{ paddingHorizontal: 6 }}>
              <CardItem header bordered onPress={() => onUserPress(item)} button>
                <Text style={{ fontWeight: '800', textDecorationLine: 'underline' }}>
                  {item.name}
                </Text>
              </CardItem>
              {
                !item.practices.length
                  ? <CardItem><Text note>{item.name} has no practices.</Text></CardItem>
                  : (
                    <FlatList
                      data={item.practices}
                      renderItem={i => <Practice practice={i.item} />}
                      keyExtractor={keyExtractor}
                    />
                  )
              }
            </Card>
          )}
          keyExtractor={keyExtractor}
          refreshControl={(
            <RefreshControl
              refreshing={loading}
              onRefresh={reFetch}
            />
          )}
        />
        <Spacer size={20} />
      </Content>
    </Container>
  );
}

UserListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

UserListing.defaultProps = {
  error: null,
  reFetch: null,
};

export default UserListing;
