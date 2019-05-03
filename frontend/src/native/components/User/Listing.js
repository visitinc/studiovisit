import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FlatList, TouchableOpacity, RefreshControl, Image, View
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button, List, ListItem, Badge, Left, Right, H3
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';
import PracticeListing from '../Practice/Listing';
import { setVisitDraftTargetUserId } from '../../../actions/visitDraft';

const UserListing = ({
  error,
  loading,
  users,
  reFetch,
  setVisitDraftTargetUserId
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => `${item.id}`;

  const onUserPress = item => Actions.user({ match: { params: { id: String(item.id) } } });
  const onSchedulePress = userId => {
    setVisitDraftTargetUserId(userId)
    Actions.visit({ });
  }

  return (
    <Container>
      <Content>
        <FlatList
          numColumns={1}
          data={users}
          renderItem={({ item }) => (
            <Card transparent>
              <CardItem header bordered>
                <Left>
                  <Button small dark onPress={() => onUserPress(item)} transparent>
                    <Text style={{ fontSize: 18, fontWeight: '800' }} >
                      {item.name}
                    </Text>
                  </Button>
                </Left>
                <Right>
                  <Button onPress={() => onSchedulePress(item.id)} small dark bordered>
                    <Text>Visit?</Text>
                  </Button>
                </Right>
              </CardItem>
              {
                !item.practices.length
                  ? <CardItem><Text note>{item.name} has no practices.</Text></CardItem>
                  : (
                    <FlatList
                      data={item.practices}
                      renderItem={i => <PracticeListing practice={i.item} />}
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

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  setVisitDraftTargetUserId,
}
export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
