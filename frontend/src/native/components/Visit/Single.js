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
  DatePicker
} from 'native-base';
import { errorMessages } from '../../../constants/messages';
import { getUsers } from '../../../selectors';
import Error from '../UI/Error';
import Spacer from '../UI/Spacer';
import Emoji from 'react-native-emoji';

const VisitView = ({
  error, visitDraft, visitDraft: { targetUserId }, users
}) => {
  if (error) return <Error content={error} />;
  const targetUser = users.find(u => u.id === targetUserId);

  return (
    <Container>
      <Content>
        <Form>
          <Item picker>
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
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={visitDraft.practiceId}
              onValueChange={() => {}}
            >
              { targetUser.practices.map(p => <Picker.Item key={p.id} label={p.name} value={p.id} />) }
            </Picker>
          </Item>
          <Item>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={this.setDate}
              disabled={false}
            />
          </Item>
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
  users: getUsers(state)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(VisitView);
