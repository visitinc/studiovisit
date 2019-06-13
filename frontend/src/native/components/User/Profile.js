import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Container, Content, List, ListItem, Body, Left, Text, Icon, Right, Spacer
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from '../UI/Header';
import CairoIcon from '../../../lib/CairoIcon';
import { APP_COLOR } from '../../../constants/config';

const Profile = ({ member, logout }) => (
  <Container>
    <Content>
      <List>
        {(member && member.username)
          ? (
            <View>
              <Content padder>
                <Header
                  title={`Hello, ${member.username}`}
                  content="Welcome to work."
                />
              </Content>
              <ListItem icon>
                <Left>
                  <CairoIcon name="pencil" style={{ color: 'black', fontSize: 42 }} />
                </Left>
                <Body>
                  <Text>
                    Update My Practices
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={logout} icon>
                <Left>
                  <CairoIcon name="wine" style={{ color: 'black', fontSize: 42 }} />
                </Left>
                <Body>
                  <Text>
                    Sign Out
                  </Text>
                </Body>
              </ListItem>
            </View>
          )
          : (
            <View>
              <Content padder>
                <Header
                  title="Studio Visit"
                  content="Create an account to document your work and organize your practice."
                />
              </Content>

              <ListItem onPress={Actions.login} icon>
                <Left>
                  <CairoIcon name="key" style={{ color: 'black', fontSize: 42 }} />
                </Left>
                <Body>
                  <Text>
                    Sign In
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.signUp} icon>
                <Left>
                  <CairoIcon name="match" style={{ color: 'black', fontSize: 42 }} />
                </Left>
                <Body>
                  <Text>
                    Sign Up
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.forgotPassword} icon>
                <Left>
                  <CairoIcon name="bandaid" style={{ color: 'black', fontSize: 42 }} />
                </Left>
                <Body>
                  <Text>
                    Forgot Password
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.forgotPassword} icon>
                <Left>
                  <CairoIcon name="dynamite" style={{ color: 'black', fontSize: 42 }} />
                </Left>
                <Body>
                  <Text>Delete Account</Text>
                </Body>
              </ListItem>
            </View>
          )
        }
      </List>
    </Content>
  </Container>
);

Profile.propTypes = {
  member: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  member: {},
};

export default Profile;
