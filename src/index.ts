require('module-alias/register');

import SlashCommandBooleanOption from './options/SlashCommandBooleanOption';
import SlashCommandChannelOption from './options/SlashCommandChannelOption';
import SlashCommandIntegerOption from './options/SlashCommandIntegerOption';
import SlashCommandMentionableOption from './options/SlashCommandMentionableOption';
import SlashCommandNumberOption from './options/SlashCommandNumberOption';
import SlashCommandRoleOption from './options/SlashCommandRoleOption';
import SlashCommandStringOption from './options/SlashCommandStringOption';
import SlashCommandUserOption from './options/SlashCommandUserOption';

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
} from './interfaces';

/*
|--------------------------------------------------------------------------
| Export: Builder
|--------------------------------------------------------------------------
|
| ...
|
*/

import { SlashCommandBuilder } from './main';

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
} from './main';

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
