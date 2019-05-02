import React, { PropTypes } from 'react';
import { ListItem, Text, Icon, Left, Right, Thumbnail, Body } from 'native-base';
import Colors from '../../../native-base-theme/variables/commonColor';

const Practice = ({ practice: { name, present }}) => (
  <ListItem noIndent icon>
    <Left>
      <Thumbnail square small source={{ uri: 'https://via.placeholder.com/40' }} />
      {
        present && (
          <Icon
            name="radio-button-on"
            style={{
              position: 'absolute',
              fontSize: 16,
              color: Colors.brandSuccess,
              top: 0,
              right: 0
            }}
          />
        )
      }
    </Left>
    <Body>
      <Text>{name}</Text>
      <Text note>Going m wn way</Text>
    </Body>
    <Right>
      <Text>Visit </Text>
      <Icon name="arrow-forward" />
    </Right>
  </ListItem>
);

Practice.propTypes = {
};

export default Practice;
