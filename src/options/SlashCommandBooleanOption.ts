import { ApplicationCommandOptionTypes } from '@src/interfaces';

import SlashCommandOption from '@common/SlashCommandOption';

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
