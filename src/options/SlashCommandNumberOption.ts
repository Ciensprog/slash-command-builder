import { ApplicationCommandOptionTypes } from '../interfaces';

import SlashCommandOptionWithChoices from '../commons/SlashCommandOptionWithChoices';

/*
|--------------------------------------------------------------------------
| SlashCommandBuilder::Options -> SlashCommandNumberOption
|--------------------------------------------------------------------------
|
| ...
|
*/

export default class SlashCommandNumberOption extends SlashCommandOptionWithChoices<number> {
  public override readonly type = ApplicationCommandOptionTypes.Number;

  constructor() {
    super(ApplicationCommandOptionTypes.Number);
  }
}
