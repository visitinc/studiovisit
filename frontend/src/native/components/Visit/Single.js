import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  H3,
  List,
  ListItem,
  Text,
  Button,
  Form,
  Item,
  Picker,
  Icon,
  Footer,
  FooterTab,
  Title,
  Header,
  Left,
  Right,
  DatePicker,
  Label,
  Radio,
  Switch
} from 'native-base';
import { View, DatePickerIOS } from 'react-native';
import { errorMessages } from '../../../constants/messages';
import { getUsers } from '../../../selectors';
import { setFavTime } from '../../../actions/visitDraft';
import Error from '../UI/Error';
import Spacer from '../UI/Spacer';
import Emoji from 'react-native-emoji';

const VisitView = ({
  error, visitDraft, visitDraft: { targetUserId }, users, setFavTime
}) => {
  if (error) return <Error content={error} />;
  const targetUser = users.find(u => u.id === targetUserId);
  console.log(visitDraft.favTime)

  return (
    <Container>
      <Content>
        <Form>
          <Item picker>
            <Label>Where?</Label>
            <Picker
              mode="dropdown"
              renderHeader={backAction =>
                <Header style={{ height: 100 }}>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title>Select Practice (Location)</Title>
                  </Body>
                  <Right />
                </Header>
              }
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select Practice (Location)"
              placeholderStyle={{ color: '#666', fontWeight: 'normal', paddingLeft: -2 }}
              placeholderIconColor="#007aff"
              selectedValue={visitDraft.practiceId}
              onValueChange={() => {}}
            >
              { targetUser.practices.map(p => <Picker.Item key={p.id} label={`${p.name} (${p.location})`} value={p.id} />) }
            </Picker>
          </Item>
          <Item>
            <Label>Day?</Label>
            <View style={{ flex: 1 }}>
              <DatePickerIOS
                date={new Date()}
                mode={'date'}
              />
            </View>
          </Item>
          <Spacer size={10} />
          <Item>
            <Label>4:30PM?</Label>
            <Switch
              style={{ marginBottom: 15 }}
              value={visitDraft.favTime}
              onValueChange={setFavTime.bind(null, !visitDraft.favTime)}
            />
          </Item>
          <Spacer size={15} />
          {
            !visitDraft.favTime &&
              <Item style={{ paddingTop: 15 }}>
                <Label>Time?</Label>
                <View style={{ flex: 1 }}>
                  <DatePickerIOS
                    date={new Date()}
                    minuteInterval={'15'}
                    mode={'time'}
                  />
                </View>
              </Item>
          }
        </Form>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Title>Studio Visit?</Title>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

VisitView.propTypes = {
  error: PropTypes.string,
};

VisitView.defaultProps = {
  error: null,
};

const mapStateToProps = state => ({
  visitDraft: state.visitDraft,
  users: getUsers(state),
  favTime: state.visitDraft.favTime
})

const mapDispatchToProps = {
  setFavTime
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitView);
