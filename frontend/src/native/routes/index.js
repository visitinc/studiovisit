import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

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
          icon={() => <Icon name="contacts" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="users" component={UserContainer} Layout={UserListingComponent} />
        </Stack>

        <Stack
          key="calendar"
          title="VISITS"
          icon={() => <Icon name="calendar" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="visits" component={VisitContainer} Layout={VisitListingComponent} />
        </Stack>

        <Stack
          key="profile"
          title="PRACTICE"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
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
      title="PRACTICES"
      {...DefaultProps.navbarProps}
      component={UserContainer}
      Layout={UserSingleComponent}
    />
  </Stack>
);

export default Index;
