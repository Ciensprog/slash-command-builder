import { ApplicationCommandOptionTypes } from '../interfaces';

import SlashCommandOption from '../commons/SlashCommandOption';

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
