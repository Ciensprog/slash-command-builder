import { ApplicationCommandOptionTypes } from '@src/interfaces';

import SlashCommandOptionWithChoices from '@common/SlashCommandOptionWithChoices';

/*
|--------------------------------------------------------------------------
| SlashCommandBuilder::Options -> SlashCommandStringOption
|--------------------------------------------------------------------------
|
| ...
|
*/

export default class SlashCommandStringOption extends SlashCommandOptionWithChoices<string> {
  public override readonly type = ApplicationCommandOptionTypes.String;

  constructor() {
    super(ApplicationCommandOptionTypes.String);
  }
}
