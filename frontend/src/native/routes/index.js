import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { View } from 'react-native';
import { Icon, Text } from 'native-base';

import DefaultProps from '../constants/navigation';

import UserContainer from '../../containers/Users';
import UserListingComponent from '../components/User/Listing';
import UserSingleComponent from '../components/User/Single';

import VisitContainer from '../../containers/Visits';
import VisitListingComponent from '../components/Visit/Listing';
import VisitSingleComponent from '../components/Visit/Single';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/User/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/User/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/User/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/User/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/User/Profile';

import AboutComponent from '../components/About';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title="CONTACTS"
          icon={() => <Text style={{ fontFamily: 'Cairo', color: 'white', fontSize: 42 }}>{'"'}</Text>}
          tabBarLabel="Contacts"
          {...DefaultProps.navbarProps}
        >
          <Scene key="users" component={UserContainer} Layout={UserListingComponent} />
        </Stack>

        <Stack
          key="calendar"
          title="VISITS"
          icon={() => <Text style={{ fontFamily: 'Cairo', color: 'white', fontSize: 42 }}>{'<'}</Text>}
          {...DefaultProps.navbarProps}
        >
          <Scene key="visits" component={VisitContainer} Layout={VisitListingComponent} />
          <Scene title="SCHEDULE" key="visit" component={VisitContainer} Layout={VisitSingleComponent} />
        </Stack>

        <Stack
          key="profile"
          title="ME"
          icon={() => <Text style={{ fontFamily: 'Cairo', color: 'white', fontSize: 42 }}>{'o'}</Text>}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
          <Scene
            back
            key="signUp"
            title="SIGN UP"
            {...DefaultProps.navbarProps}
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="login"
            title="LOGIN"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          />
          <Scene
            back
            key="forgotPassword"
            title="FORGOT PASSWORD"
            {...DefaultProps.navbarProps}
            component={ForgotPasswordContainer}
            Layout={ForgotPasswordComponent}
          />
          <Scene
            back
            key="updateProfile"
            title="UPDATE PROFILE"
            {...DefaultProps.navbarProps}
            component={UpdateProfileContainer}
            Layout={UpdateProfileComponent}
          />
        </Stack>
      </Tabs>
    </Scene>
    <Scene
      back
      clone
      key="user"
      title="PERSON"
      {...DefaultProps.navbarProps}
      component={UserContainer}
      Layout={UserSingleComponent}
    />
  </Stack>
);

export default Index;
