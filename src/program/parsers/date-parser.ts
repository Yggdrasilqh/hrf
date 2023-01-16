import _ from 'lodash';

import type {CommandPrimaryArg} from '../command';
import {parseNumber} from '../utils';

import type {ParsedResult} from './@common';

function date(value: CommandPrimaryArg): ParsedResult<Date> {
  const number = parseNumber(value);

  if (number && !number.isFloat && number.number) {
  }
}
