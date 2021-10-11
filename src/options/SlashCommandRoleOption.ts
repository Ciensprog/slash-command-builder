import { ApplicationCommandOptionTypes } from '@src/interfaces';

import SlashCommandOption from '@common/SlashCommandOption';

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
