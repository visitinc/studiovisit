import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUsers } from '../actions/users';

class UserListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    fetchUsers: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false,
  }

  componentDidMount = () => this.fetchData();

  fetchData = async (data) => {
    const { fetchUsers } = this.props;

    this.setState({ loading: true });

    try {
      const users = await fetchUsers();
      this.setState({
        loading: false,
        error: null,
      })
    } catch (err) {
      this.setState({
        loading: false,
        error: err,
      })
    }
  }

  render = () => {
    const { Layout, users, match } = this.props;
    const { loading, error } = this.state;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        recipeId={id}
        error={error}
        loading={loading}
        recipes={recipes}
        reFetch={() => this.fetchData()}
      />
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users || {},
});

const mapDispatchToProps = {
  fetchUsers: getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
