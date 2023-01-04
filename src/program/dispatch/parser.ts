import _ from 'lodash';

interface ArgsTypes {
  date: Date;
  json: object;
  number: number;
  undefined: undefined;
}

type _SeparatedArgTypesC<T extends keyof ArgsTypes = keyof ArgsTypes> =
  T extends any ? {[TKey in T]: ArgsTypes[T]} : never;

type SeparatedArgTypes = _SeparatedArgTypesC;

function _parseArgType(arg: unknown): SeparatedArgTypes[] | SeparatedArgTypes {
  if (typeof arg === 'undefined' || arg === null) {
    return {undefined};
  }

  if (typeof arg === 'string' && !Number.isNaN(Number.parseInt(arg))) {
    return {date: new Date(Number.parseInt(arg))};
  }

  return {undefined};
}

// TODO: Type for cast array

export const parseArgType: typeof _parseArgType = args => {
  return _.castArray(_parseArgType(args));
};
