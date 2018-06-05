import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress = async () => {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  };

  render() {
    // console.log(this.props.name);
    console.log(this.props.employee);
    // console.log(this.props);

    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

// const mapStateToProps = (state) => {
//   const { name, phone, shift } = state.employeeForm;
//   return { name, phone, shift };
// };

const mapStateToProps = state => ({
  name: state.employeeForm.name,
  phone: state.employeeForm.phone,
  shift: state.employeeForm.shift,
});
export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate,
})(EmployeeCreate);
