import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, TouchableOpacity, RefreshControl, Image, View
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';

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
              <CardItem cardBody>
                <TouchableOpacity onPress={() => onUserPress(item)} style={{ flex: 1 }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      height: 100,
                      width: null,
                      flex: 1,
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              </CardItem>
              <CardItem button cardBody>
                <Body>
                  <Spacer size={10} />
                  <Spacer size={15} />
                  <Text>
                    {item.description}
                  </Text>
                  <Spacer size={15} />
                  <View style={{ flexDirection: 'row' }}>
                    <Button
                      small
                      onPress={() => onSchedulePress(item)}
                    >
                      <Text>
                        Schedule
                      </Text>
                    </Button>
                  </View>
                  <Spacer size={8} />
                </Body>
              </CardItem>
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
