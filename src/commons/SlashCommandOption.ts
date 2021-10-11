import { isUndefined } from 'lodash';

import {
  ApplicationCommandOptionTypes,
  ApplicationCommandOptionStructure,
} from '@src/interfaces';

/*
|--------------------------------------------------------------------------
| SlashCommandBuilder::Commons -> SlashCommandOption
|--------------------------------------------------------------------------
|
| ...
|
*/

export default class SlashCommandOption {
  public readonly type: ApplicationCommandOptionTypes;
  public readonly name: string = '';
  public readonly description: string = '';
  public readonly required: boolean = false;

  constructor(type: ApplicationCommandOptionTypes) {
    this.type = type;
  }

  public setName(value: string): this {
    Reflect.set(this, 'name', value);

    return this;
  }

  public setDescription(value: string): this {
    Reflect.set(this, 'description', value);

    return this;
  }

  public setRequired(value: boolean): this {
    Reflect.set(this, 'required', value);

    return this;
  }

  public toJSON(): ApplicationCommandOptionStructure {
    if (isUndefined(this.type)) {
      throw new Error('The `type` parameter should not be empty');
    }

    const response: ApplicationCommandOptionStructure = {
      type: this.type,
      name: this.name,
      description: this.description,
      required: this.required,
    };

    return response;
  }
}
