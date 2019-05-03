import React, { PropTypes, Fragment } from 'react';
import { View  } from 'react-native';
import { ListItem, Text, Icon, Left, Right, Thumbnail, Body, Badge } from 'native-base';
import Colors from '../../../../native-base-theme/variables/commonColor';
import { formatPracticeMetadata } from '../../../lib'

const Practice = ({ practice, practice: { name, present, members = [] }}) => (
  <ListItem noIndent icon>
    <Left>
      <Thumbnail square small source={{ uri: 'https://via.placeholder.com/40' }} />
      {
        present && (
          <Icon
            name="radio-button-on"
            style={{
              position: 'absolute',
              fontSize: 15,
              color: Colors.brandSuccess,
              top: 3,
              right: 2.5
            }}
          />
        )
      }
    </Left>
    <Body>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ marginRight: 5 }} >{name}</Text>
        {
          members.length > 1 && (
            <Fragment>
              <Text style={{ fontSize: 11, marginRight: 1, color: Colors.listNoteColor }}>{members.length}</Text>
              <Icon style={{ fontSize: 11, paddingTop: 1, color: Colors.listNoteColor }} name="person" />
            </Fragment>
          )
        }
      </View>
      <Text numberOfLines={1} ellipsizeMode="tail" note>{formatPracticeMetadata(practice)}</Text>
    </Body>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
);

Practice.propTypes = {
};

export default Practice;
