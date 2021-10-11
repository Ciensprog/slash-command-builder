import { isUndefined } from 'lodash';

import {
  ApplicationCommandJSON,
  ApplicationCommandOptionStructure,
  ApplicationCommandOptionTypes,
  ApplicationCommandTypes,
  CommonPropertiesAndMethods,
} from '@src/interfaces';

import SlashCommandMethods from '@common/SlashCommandMethods';

/*
|--------------------------------------------------------------------------
| SlashCommandSubcommand
|--------------------------------------------------------------------------
|
| ...
|
*/

export class SlashCommandSubcommand extends SlashCommandMethods implements CommonPropertiesAndMethods {
  public readonly type: ApplicationCommandOptionTypes = ApplicationCommandOptionTypes.Subcommand;
  public readonly name: string = '';
  public readonly description: string = '';

  public setName(value: string): this {
    Reflect.set(this, 'name', value);

    return this;
  }

  public setDescription(value: string): this {
    Reflect.set(this, 'description', value);

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
      options: this.options,
    };

    return response;
  }
}

/*
|--------------------------------------------------------------------------
| SlashCommandSubcommandGroup
|--------------------------------------------------------------------------
|
| ...
|
*/

export class SlashCommandSubcommandGroup implements CommonPropertiesAndMethods {
  public readonly type: ApplicationCommandOptionTypes = ApplicationCommandOptionTypes.SubcommandGroup;
  public readonly name: string = '';
  public readonly description: string = '';
  public readonly options: Array<ApplicationCommandOptionStructure> = [];

  public setName(value: string): this {
    Reflect.set(this, 'name', value);

    return this;
  }

  public setDescription(value: string): this {
    Reflect.set(this, 'description', value);

    return this;
  }

  public addSubcommand(
    callback: (builder: SlashCommandSubcommand) => SlashCommandSubcommand
  ): this {
    this.options.push(callback(new SlashCommandSubcommand()).toJSON());

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
      options: this.options,
    };

    return response;
  }
}

/*
|--------------------------------------------------------------------------
| SlashCommandBuilder
|--------------------------------------------------------------------------
|
| ...
|
*/

export class SlashCommandBuilder extends SlashCommandMethods implements CommonPropertiesAndMethods {
  public readonly type: ApplicationCommandTypes = ApplicationCommandTypes.ChatInput;
  public readonly name: string = '';
  public readonly description: string = '';
  public readonly defaultPermission: boolean = true;

  public setType(value: ApplicationCommandTypes): this {
    Reflect.set(this, 'type', value);

    return this;
  }

  public setName(value: string): this {
    Reflect.set(this, 'name', value);

    return this;
  }

  public setDescription(value: string): this {
    Reflect.set(this, 'description', value);

    return this;
  }

  public setDefaultPermission(value: boolean): this {
    Reflect.set(this, 'defaultPermission', value);

    return this;
  }

  public addSubcommand(
    callback: (builder: SlashCommandSubcommand) => SlashCommandSubcommand
  ): this {
    this.options.push(callback(new SlashCommandSubcommand()).toJSON());

    return this;
  }

  public addSubcommandGroup(
    callback: (builder: SlashCommandSubcommandGroup) => SlashCommandSubcommandGroup
  ): this {
    this.options.push(callback(new SlashCommandSubcommandGroup()).toJSON());

    return this;
  }

  public toJSON(): ApplicationCommandJSON {
    return {
      type: this.type,
      name: this.name,
      description: this.description,
      options: this.options,
      default_permission: this.defaultPermission,
    };
  }
}
