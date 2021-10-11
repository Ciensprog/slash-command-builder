import { isArray, isEmpty } from 'lodash';

import {
  ApplicationCommandOptionChoiceStructure,
  ApplicationCommandOptionStructure,
  ApplicationCommandOptionTypes,
  Choices,
} from '../interfaces';

import SlashCommandOption from './SlashCommandOption';

/*
|--------------------------------------------------------------------------
| SlashCommandBuilder::Commons -> SlashCommandOptionWithChoices
|--------------------------------------------------------------------------
|
| ...
|
*/

export default class SlashCommandOptionWithChoices<A extends number | string> extends SlashCommandOption {
  private static readonly MAX_ITEMS: number = 25;

  constructor(type: ApplicationCommandOptionTypes) {
    super(type);
  }

  public readonly choices: Array<ApplicationCommandOptionChoiceStructure> = [];

  public addChoice(name: string, value: A): this {
    const maxItems: number = SlashCommandOptionWithChoices.MAX_ITEMS - 1;

    if (this.choices.length > maxItems) {
      throw new Error(`Choices cannot exceed ${SlashCommandOptionWithChoices.MAX_ITEMS} items`);
    }

    Reflect.set(this, 'choices', [
      ...this.choices,
      { name, value },
    ]);

    return this;
  }

  public addChoices(choices: Array<Choices<A>>): this {
    if (isEmpty(choices) || !isArray(choices)) {
      throw new Error('The `value` parameter is not an array or is empty');
    }

    for (const { name, value } of choices) {
      this.addChoice(name, value);
    }

    return this;
  }

  public override toJSON(): ApplicationCommandOptionStructure {
    return {
      ...super.toJSON(),
      choices: this.choices,
    };
  }
}
