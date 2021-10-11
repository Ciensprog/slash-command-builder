import { ApplicationCommandOptionTypes } from '../interfaces';

import SlashCommandOption from '../commons/SlashCommandOption';

/*
|--------------------------------------------------------------------------
| SlashCommandBuilder::Options -> SlashCommandBooleanOption
|--------------------------------------------------------------------------
|
| ...
|
*/

export default class SlashCommandBooleanOption extends SlashCommandOption {
  public override readonly type = ApplicationCommandOptionTypes.Boolean;

  constructor() {
    super(ApplicationCommandOptionTypes.Boolean);
  }
}
