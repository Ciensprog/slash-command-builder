/*
|--------------------------------------------------------------------------
| Type definitions
|--------------------------------------------------------------------------
|
| @url https://discord.com/developers/docs/interactions/application-commands
|
*/

export type Snowflake = string;

export type ApplicationCommandJSON = Omit<ApplicationCommandStructure, 'id' | 'application_id' | 'version'>;

/**
 * @url https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
 */
export enum ApplicationCommandOptionTypes {
  Subcommand = 1,
  SubcommandGroup = 2,
  String = 3,
  /**
   * Any integer between -2^53 and 2^53
   */
  Integer = 4,
  Boolean = 5,
  User = 6,
  /**
   * Includes all channel types + categories
   */
  Channel = 7,
  Role = 8,
  /**
   * Includes users and roles
   */
  Mentionable = 9,
  /**
   * Any double between -2^53 and 2^53
   */
  Number = 10,
}

/**
 * @url https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
 */
export enum ApplicationCommandTypes {
  /**
   * Slash commands; a text-based command that shows up when a user types /
   */
  ChatInput = 1,
  /**
   * A UI-based command that shows up when you right click or tap on a user
   */
  User = 2,
  /**
   * A UI-based command that shows up when you right click or tap on a message
   */
  Message = 3,
}

/**
 * @url https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export enum ChannelTypes {
  /**
   * A text channel within a server
   */
  GUILD_TEXT = 0,
  /**
   * A direct message between users
   */
  DM = 1,
  /**
   * A voice channel within a server
   */
  GUILD_VOICE = 2,
  /**
   * A direct message between multiple users
   */
  GROUP_DM = 3,
  /**
   * An organizational category that contains up to 50 channels
   */
  GUILD_CATEGORY = 4,
  /**
   * A channel that users can follow and crosspost into their own server
   */
  GUILD_NEWS = 5,
  /**
   * A channel in which game developers can sell their game on Discord
   */
  GUILD_STORE = 6,
  /**
   * A temporary sub-channel within a GUILD_NEWS channel
   */
  GUILD_NEWS_THREAD = 10,
  /**
   * A temporary sub-channel within a GUILD_TEXT channel
   */
  GUILD_PUBLIC_THREAD = 11,
  /**
   * A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission
   */
  GUILD_PRIVATE_THREAD = 12,
  /**
   * A voice channel for hosting events with an audience
   */
  GUILD_STAGE_VOICE = 13,
}

/**
 * @url https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export interface ApplicationCommandStructure {
  /**
   * Unique id of the command
   */
  id: Snowflake;
  /**
   * The type of command, defaults 1 if not set
   */
  type?: ApplicationCommandTypes;
  /**
   * Unique id of the parent application
   */
  application_id: Snowflake;
  /**
   * Guild id of the command, if not global
   */
  guild_id?: Snowflake;
  /**
   * 1-32 character name
   */
  name: string;
  /**
   * 1-100 character description for CHAT_INPUT commands, empty string for USER and MESSAGE commands
   */
  description: string;
  /**
   * The parameters for the command, max 25
   */
  options?: Array<ApplicationCommandOptionStructure>;
  /**
   * Whether the command is enabled by default when the app is added to a guild
   */
  default_permission?: boolean;
  /**
   * Autoincrementing version identifier updated during substantial record changes
   */
  version: Snowflake;
}

/**
 * @url https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOptionStructure {
  /**
   * The type of option
   */
  type: ApplicationCommandOptionTypes;
  /**
   * 1-32 character name
   */
  name: string;
  /**
   * 1-100 character description
   */
  description: string;
  /**
   * If the parameter is required or optional--default `false`
   */
  required?: boolean;
  /**
   * Choices for `STRING`, `INTEGER`, and `NUMBER` types for the user to pick from, max 25
   */
  choices?: Array<ApplicationCommandOptionChoiceStructure>;
  /**
   * If the option is a subcommand or subcommand group type, this nested options will be the parameters
   */
  options?: Array<ApplicationCommandOptionStructure>;
  /**
   * If the option is a channel type, the channels shown will be restricted to these types
   */
  channel_types?: Array<ChannelTypes>;
}

/**
 * @url https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export interface ApplicationCommandOptionChoiceStructure {
  /**
   * 1-100 character choice name
   */
  name: string;
  /**
   * Value of the choice, up to 100 characters if string
   */
  value: number | string;
}

/**
 * @url https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-interaction-data-option-structure
 */
export interface ApplicationCommandInteractionDataOptionStructure {
  /**
   * The name of the parameter
   */
  name: string;
  /**
   * Value of application command option type
   */
  type: number;
  /**
   * The value of the pair
   */
  value?: ApplicationCommandOptionTypes;
  /**
   * Present if this option is a group or subcommand
   */
  options?: Array<ApplicationCommandInteractionDataOptionStructure>;
}

export interface CommonPropertiesAndMethods {
  type: ApplicationCommandOptionTypes | ApplicationCommandTypes;
  name: string;
  description: string;
  setName(value: string): this;
  setDescription(value: string): this;
  toJSON(): ApplicationCommandJSON | ApplicationCommandOptionStructure;
}

export interface Choices<A> {
  name: string;
  value: A;
}
