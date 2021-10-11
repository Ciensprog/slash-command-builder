require('module-alias/register');

import SlashCommandBooleanOption from '@option/SlashCommandBooleanOption';
import SlashCommandChannelOption from '@option/SlashCommandChannelOption';
import SlashCommandIntegerOption from '@option/SlashCommandIntegerOption';
import SlashCommandMentionableOption from '@option/SlashCommandMentionableOption';
import SlashCommandNumberOption from '@option/SlashCommandNumberOption';
import SlashCommandRoleOption from '@option/SlashCommandRoleOption';
import SlashCommandStringOption from '@option/SlashCommandStringOption';
import SlashCommandUserOption from '@option/SlashCommandUserOption';

/*
|--------------------------------------------------------------------------
| Export: Interfaces
|--------------------------------------------------------------------------
|
| ...
|
*/

export {
  ApplicationCommandInteractionDataOptionStructure,
  ApplicationCommandJSON,
  ApplicationCommandOptionChoiceStructure,
  ApplicationCommandOptionStructure,
  ApplicationCommandOptionTypes,
  ApplicationCommandStructure,
  ApplicationCommandTypes,
  ChannelTypes,
  Choices,
  Snowflake,
} from '@src/interfaces';

/*
|--------------------------------------------------------------------------
| Export: Builder
|--------------------------------------------------------------------------
|
| ...
|
*/

import { SlashCommandBuilder } from '@src/main';

export default SlashCommandBuilder;

/*
|--------------------------------------------------------------------------
| Export: Options
|--------------------------------------------------------------------------
|
| ...
|
*/

export {
  SlashCommandSubcommand,
  SlashCommandSubcommandGroup,
} from '@src/main';

export {
  SlashCommandBooleanOption,
  SlashCommandChannelOption,
  SlashCommandIntegerOption,
  SlashCommandMentionableOption,
  SlashCommandNumberOption,
  SlashCommandRoleOption,
  SlashCommandStringOption,
  SlashCommandUserOption,
};
