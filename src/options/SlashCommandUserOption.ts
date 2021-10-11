import { ApplicationCommandOptionTypes } from '../interfaces';

import SlashCommandOption from '../commons/SlashCommandOption';

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
