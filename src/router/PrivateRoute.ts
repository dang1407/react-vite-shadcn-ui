import React from 'react';
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { PATH } from '@/constants/paths';

interface ReduxProps {
  isAuthenticated: boolean;
}
interface Props extends ReduxProps, RouteProps {
  component: React.ComponentType<RouteComponentProps>;
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

const _PrivateRoute = (props: Props) => {
  const { isAuthenticated, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props => {
        if (!isAuthenticated && !localStorage.getItem('user')) {
          return <Redirect to={PATH.LOGIN} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export const PrivateRoute = connector(_PrivateRoute);
