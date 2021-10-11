import { ApplicationCommandOptionTypes } from '@src/interfaces';

import SlashCommandOption from '@common/SlashCommandOption';

/*
|--------------------------------------------------------------------------
| SlashCommandBuilder::Options -> SlashCommandUserOption
|--------------------------------------------------------------------------
|
| ...
|
*/

export default class SlashCommandUserOption extends SlashCommandOption {
  public override readonly type = ApplicationCommandOptionTypes.User;

  constructor() {
    super(ApplicationCommandOptionTypes.User);
  }
}
