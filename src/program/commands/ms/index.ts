import {Command} from '@oclif/core';

export default class MS extends Command {
  async run(): Promise<any> {
    this.log('ms');
  }
}
