import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress= () => {
    Actions.employeeEdit({ employee: this.props.employee });
  }
  render() {
    // console.log(this.props.employee);

    const { name } = this.props.employee;

    return (
      <CardSection>
        <TouchableWithoutFeedback onPress={this.onRowPress}>
          <View>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default ListItem;
