/*
 * Package Import
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Layout from 'src/components/Layout';
import Home from 'src/components/Home';
import Login from 'src/containers/Login';
import Note from 'src/containers/Note';
import Add from 'src/containers/Add';
import Edit from 'src/containers/Edit';
// import routes from './routes';

/*
 * Component
 */
class App extends React.Component {
  static propTypes = {
    logged: PropTypes.bool.isRequired,
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  }

  componentDidMount() {
    const { connectSocket } = this.props.actions;
    connectSocket();
  }

  render() {
    const { logged } = this.props;
    return (
      <Layout>
        <Switch>
          {logged && <Route exact path="/" component={Home} />}
          {logged && <Route exact path="/note/add" component={Add} />}
          {logged && <Route exact path="/note/:id" component={Note} />}
          {logged && <Route exact path="/note/edit/:id" component={Edit} />}
          {!logged && <Route path="/" component={Login} />}
        </Switch>
      </Layout>
    );
  }
}

/*
 * Export
 */
export default App;
