import {Command, Flags, Interfaces} from '@oclif/core';
import type {Arg} from '@oclif/core/lib/interfaces/parser';

import {parseArgType} from '../../dispatch';

export default class MS extends Command {
  async run(): Promise<any> {
    const {
      args: {value},
      flags,
    } = await this.parse(MS);

    console.log(parseArgType(value));
  }

  static override flags = {
    force: Flags.boolean({char: 'f'}),
    file: Flags.string(),
  };

  static override args = [{name: 'value', required: true}];
}
