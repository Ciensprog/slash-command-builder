import { ApplicationCommandOptionTypes } from '../interfaces';

import SlashCommandOptionWithChoices from '../commons/SlashCommandOptionWithChoices';

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
