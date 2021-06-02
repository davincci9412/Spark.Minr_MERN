import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Flex } from '@blockstack/ui';

import Menu from '../components/dashboard/Menu';
import WalletsTracked from '../components/dashboard/Tracker/WalletsTracked';
import { logoutUser } from '../actions/authActions';

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <Flex alignItems="stretch">
        <Menu ActivePage={0} />
        <Box
          flex={['0 0 100%', '0 0 calc(100% - 230px)']}
          maxWidth={['100%', 'calc(100% - 230px)']}
        >
          <Box>          
            <WalletsTracked />
          </Box>
        </Box>
      </Flex>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);

