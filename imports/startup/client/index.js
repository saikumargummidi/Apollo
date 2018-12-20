import React from "react";
import { Meteor } from "meteor/meteor";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { ApolloLink, from } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import mainReducer from "../../modules/redux/reducers";

import ReactDOM from "react-dom";
import App from "../../ui/layouts/App/App";
import "../../ui/stylesheets/App.scss";

//import Home from '../../ui/customPage/Home/Home';
const preloadedState = window._PRELOADED_STATE__;
delete window._PRELOADED_STATE__;
const store = createStore(mainReducer, preloadedState, applyMiddleware(thunk));

const httplink = new HttpLink({
  uri: Meteor.absoluteUrl("graphql")
});

const authLink = new ApolloLink((operation, forward) => {
  const token = Accounts._storedLoginToken();
  operation.setContext(() => ({
    headers: {
      "meteor-login-token": token
    }
  }));
  return forward(operation);
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: from([httplink,authLink]),
  cache
});

const theme = {};

Meteor.startup(() =>
  ReactDOM.render(
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <App />
            </Switch>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </ApolloProvider>,
    document.getElementById("react-root")
  )
);

//https://stackoverflow.com/questions/38293818/react-uncaught-referenceerror-reactdom-is-not-defined
