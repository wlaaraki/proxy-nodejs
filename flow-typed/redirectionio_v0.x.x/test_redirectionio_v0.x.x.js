// @flow

import express from 'express';
import http from 'http';
import rio, { Connection } from '@redirectionio/proxy';

// Test `Connection` type
const connection: Connection = {name: 'default', host: 'localhost', port: 3100};
// $ExpectError
const _connection: Connection = {name: 'default', host: 'localhost', port: '3100'};
// $ExpectError
const _connection2: Connection = {name: 'default', host: 'localhost'};

// Test `handleExpressRequest()` method
const app: express$Application = express();
rio.handleExpressRequest(app);
rio.handleExpressRequest(app, [connection]);
// $ExpectError
rio.handleExpressRequest(app, connection);
const _app: express$Router = express();
// $ExpectError
rio.handleExpressRequest(_app);

// Test `handleHttpRequest()` method
const msg: http$IncomingMessage = new IncomingMessage();
rio.handleHttpRequest(msg, msg);
rio.handleHttpRequest(msg, msg, [connection]);
// $ExpectError
rio.handleHttpRequest(msg);
// $ExpectError
rio.handleHttpRequest(msg, msg, connection);
const _msg: http$ClientRequest = new IncomingMessage();
// $ExpectError
rio.handleHttpRequest(_msg, _msg);
