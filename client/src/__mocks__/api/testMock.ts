import { rest } from 'msw';

import { testMockData } from './data/testMockData';

const handlers = [
  rest.get('/test', (_, res, ctx) => res(ctx.json(testMockData))),
];

export default handlers;
