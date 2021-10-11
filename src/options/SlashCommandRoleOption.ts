import { ApplicationCommandOptionTypes } from '../interfaces';

import SlashCommandOption from '../commons/SlashCommandOption';

/*
|--------------------------------------------------------------------------
| SlashCommandBuilder::Options -> SlashCommandRoleOption
|--------------------------------------------------------------------------
|
| ...
|
*/

export default class SlashCommandRoleOption extends SlashCommandOption {
  public override readonly type = ApplicationCommandOptionTypes.Role;

  constructor() {
    super(ApplicationCommandOptionTypes.Role);
  }
}
