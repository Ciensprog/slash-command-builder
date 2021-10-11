import { ApplicationCommandOptionTypes } from '@src/interfaces';

import SlashCommandOptionWithChoices from '@common/SlashCommandOptionWithChoices';

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
