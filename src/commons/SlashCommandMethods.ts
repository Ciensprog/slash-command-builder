import { isFunction } from 'lodash';

import { ApplicationCommandOptionStructure } from '@src/interfaces';

import SlashCommandOption from '@common/SlashCommandOption';

import SlashCommandBooleanOption from '@option/SlashCommandBooleanOption';
import SlashCommandChannelOption from '@option/SlashCommandChannelOption';
import SlashCommandIntegerOption from '@option/SlashCommandIntegerOption';
import SlashCommandMentionableOption from '@option/SlashCommandMentionableOption';
import SlashCommandNumberOption from '@option/SlashCommandNumberOption';
import SlashCommandRoleOption from '@option/SlashCommandRoleOption';
import SlashCommandStringOption from '@option/SlashCommandStringOption';
import SlashCommandUserOption from '@option/SlashCommandUserOption';

/*
|--------------------------------------------------------------------------
| SlashCommandBuilder::Commons -> SlashCommandMethods
|--------------------------------------------------------------------------
|
| ...
|
*/

export default class SlashCommandMethods {
  public readonly options: Array<ApplicationCommandOptionStructure> = [];

  public addBooleanOption(
    callback: (builder: SlashCommandBooleanOption) => SlashCommandBooleanOption
  ): this {
    this.addNewOption(callback, SlashCommandBooleanOption);

    return this;
  }

  public addChannelOption(
    callback: (builder: SlashCommandChannelOption) => SlashCommandChannelOption
  ): this {
    this.addNewOption(callback, SlashCommandChannelOption);

    return this;
  }

  public addIntegerOption(
    callback: (builder: SlashCommandIntegerOption) => SlashCommandIntegerOption
  ): this {
    this.addNewOption(callback, SlashCommandIntegerOption);

    return this;
  }

  public addMentionableOption(
    callback: (builder: SlashCommandMentionableOption) => SlashCommandMentionableOption
  ): this {
    this.addNewOption(callback, SlashCommandMentionableOption);

    return this;
  }

  public addNumberOption(
    callback: (builder: SlashCommandNumberOption) => SlashCommandNumberOption
  ): this {
    this.addNewOption(callback, SlashCommandNumberOption);

    return this;
  }

  public addRoleOption(
    callback: (builder: SlashCommandRoleOption) => SlashCommandRoleOption
  ): this {
    this.addNewOption(callback, SlashCommandRoleOption);

    return this;
  }

  public addStringOption(
    callback: (builder: SlashCommandStringOption) => SlashCommandStringOption
  ): this {
    this.addNewOption(callback, SlashCommandStringOption);

    return this;
  }

  public addUserOption(
    callback: (builder: SlashCommandUserOption) => SlashCommandUserOption
  ): this {
    this.addNewOption(callback, SlashCommandUserOption);

    return this;
  }

  private addNewOption<A extends SlashCommandOption>(
    callback: (builder: A) => A,
    Instance: new () => A,
  ): this {
    if (!isFunction(callback)) {
      throw new Error('The `callback` parameter is not a function');
    }

    this.options.push(callback(new Instance()).toJSON());

    return this;
  }
}
