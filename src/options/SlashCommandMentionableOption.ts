import { ApplicationCommandOptionTypes } from '@src/interfaces';

import SlashCommandOption from '@common/SlashCommandOption';

/*
|--------------------------------------------------------------------------
| SlashCommandBuilder::Options -> SlashCommandMentionableOption
|--------------------------------------------------------------------------
|
| ...
|
*/

export default class SlashCommandMentionableOption extends SlashCommandOption {
  public override readonly type = ApplicationCommandOptionTypes.Mentionable;

  constructor() {
    super(ApplicationCommandOptionTypes.Mentionable);
  }
}
