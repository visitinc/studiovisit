import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, TouchableOpacity, RefreshControl, Image,
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
          items={{'2018-05-01': [{ text: 'lorem ipsum' }] }}
          renderItem={(item, firstItemInDay) => {return (<Card />);}}
          renderDay={(day, item) => {return (<Card />);}}
          // specify how empty date content with no items should be rendered
          renderEmptyDate={() => {return (<Card />);}}
          // specify how agenda knob should look like
          renderKnob={() => {return (<Card />);}}
          // specify what should be rendered instead of ActivityIndicator
          renderEmptyData = {() => {return (<Card />);}}
        />
        <Spacer size={1} />
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
