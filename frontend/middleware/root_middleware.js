import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import createLogger from 'redux-logger';
import GroupMiddleware from './group_middleware';
import EventMiddleware from './event_middleware';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  GroupMiddleware,
  EventMiddleware,
  logger
);

export default RootMiddleware;
