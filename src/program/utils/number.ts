import _ from 'lodash';

import type {CommandPrimaryArg} from '../command';

export function parseNumber(value: CommandPrimaryArg):
  | {
      number: number;
      isFloat: boolean;
    }
  | undefined {
  const number = _.toNumber(value);

  if (_.isNaN(number)) {
    return undefined;
  }

  const isFloat = !!(number % 1);

  return {number, isFloat};
}
