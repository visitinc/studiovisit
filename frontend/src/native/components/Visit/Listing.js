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
import { Agenda } from 'react-native-calendars';

const VisitListing = ({
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

  const onPress = item => Actions.user({ match: { params: { id: String(item.id) } } });

  return (
    <Container>
        <Agenda
          items={{'2019-04-30': [{ text: 'lorem ipsum'}], '2019-05-01': [{ text: 'lorem ipsum' }, ] }}
          renderItem={(item, firstItemInDay) => <Card><Text>{item.text}</Text></Card>}
          // specify how empty date content with no items should be rendered
          // specify what should be rendered instead of ActivityIndicator
          renderEmptyData = {() => {return (<View />);}}
          rowHasChanged={(r1, r2) => r1.text !== r2.text}
        />
    </Container>
  );
}

VisitListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  reFetch: PropTypes.func,
};

VisitListing.defaultProps = {
  error: null,
  reFetch: null,
};

export default VisitListing;
