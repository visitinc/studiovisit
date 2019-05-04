import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, TouchableOpacity, RefreshControl, Image, View
} from 'react-native';
import {
  Container, Content, Card, CardItem, Body, Text, Button, Thumbnail, Left, List, Right
} from 'native-base';
import { MapView } from 'expo';
import { APP_COLOR } from '../../../constants/config';
import { Actions } from 'react-native-router-flux';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';
import { Agenda } from 'react-native-calendars';
import PracticeListing from '../Practice/Listing';
import userStore from '../../../store/users';


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

  const computerLabPractice = userStore.users[0].practices[1]
  return (
    <Container>
        <Agenda
          items={{
            '2019-05-02': [{ place: 'Computer Lab', date: 'May 1st', time: '9am', context: '(link)'}],
            '2019-05-03': [{ place: 'Computer Lab', date: 'May 1st', time: '9am - 9pm', context: '(link)'}],
            '2019-05-04': [{ place: 'Computer Lab', date: 'May 1st', time: '9am - 9pm', context: '(link)'}],
          }}
          renderItem={(item, firstItemInDay) => (
            <Card>
              <FlatList
                data={[computerLabPractice]}
                renderItem={i => <PracticeListing practice={i.item} />}
                keyExtractor={keyExtractor}
              />
              <MapView
                style={{ height: 100 }}
                initialRegion={{
                  latitude: 40.720522,
                  longitude: -74.005695,
                  latitudeDelta: 0.0222,
                  longitudeDelta: 0.0121,
                }}
              >
                <MapView.Marker title="foo" description="foo" coordinate={{ latitude: 40.720522, longitude: -74.005695 }} />
              </MapView>
              <CardItem footer>
                <Left>
                  <Text>{item.time}</Text>
                </Left>
                <Right>
                  <Button onPress={() => onSchedulePress(item.id)} small dark bordered>
                    <Text>Flake?</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
            )
          }
          // specify how empty date content with no items should be rendered
          // specify what should be rendered instead of ActivityIndicator
          renderEmptyData = {() => {return (<View />);}}
          rowHasChanged={(r1, r2) => r1.text !== r2.text}
          theme={{ selectedDayBackgroundColor: APP_COLOR,  agendaTodayColor: APP_COLOR }}
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
