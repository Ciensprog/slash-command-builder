import { ApplicationCommandOptionTypes } from '../interfaces';

import SlashCommandOptionWithChoices from '../commons/SlashCommandOptionWithChoices';

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
