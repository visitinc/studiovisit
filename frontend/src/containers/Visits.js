import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class VisitContainer extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
  }

  static defaultProps = {
  }

  state = {
    error: null,
    loading: false,
  }

  // componentDidMount = () => this.fetchData();

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
    const { Layout } = this.props;
    const { loading, error } = this.state;

    return (
      <Layout
        error={error}
        loading={loading}
        reFetch={() => this.fetchData()}
      />
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(VisitContainer);
