import { ApplicationCommandOptionTypes } from '@src/interfaces';

import SlashCommandOptionWithChoices from '@common/SlashCommandOptionWithChoices';

/*
|--------------------------------------------------------------------------
| SlashCommandBuilder::Options -> SlashCommandIntegerOption
|--------------------------------------------------------------------------
|
| ...
|
*/

export default class SlashCommandIntegerOption extends SlashCommandOptionWithChoices<number> {
  public override readonly type = ApplicationCommandOptionTypes.Integer;

  constructor() {
    super(ApplicationCommandOptionTypes.Integer);
  }
}
