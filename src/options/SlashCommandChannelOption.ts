import { isArray, isEmpty, isNumber } from 'lodash';

import {
  ApplicationCommandOptionStructure,
  ApplicationCommandOptionTypes,
  ChannelTypes,
} from '../interfaces';

import SlashCommandOption from '../commons/SlashCommandOption';

/*
|--------------------------------------------------------------------------
| SlashCommandBuilder::Options -> SlashCommandChannelOption
|--------------------------------------------------------------------------
|
| ...
|
*/

const allowTypes: Array<number> = [
  ChannelTypes.GUILD_TEXT,
  ChannelTypes.DM,
  ChannelTypes.GUILD_VOICE,
  ChannelTypes.GROUP_DM,
  ChannelTypes.GUILD_CATEGORY,
  ChannelTypes.GUILD_NEWS,
  ChannelTypes.GUILD_STORE,
  ChannelTypes.GUILD_NEWS_THREAD,
  ChannelTypes.GUILD_PUBLIC_THREAD,
  ChannelTypes.GUILD_PRIVATE_THREAD,
  ChannelTypes.GUILD_STAGE_VOICE,
];

export default class SlashCommandChannelOption extends SlashCommandOption {
  public override readonly type = ApplicationCommandOptionTypes.Channel;
  public readonly channelTypes: Array<ChannelTypes> = [];

  constructor() {
    super(ApplicationCommandOptionTypes.Channel);
  }

  public addFilterBy(value: Array<ChannelTypes>| ChannelTypes): this {
    let deny: boolean = true;

    if (isArray(value)) {
      deny = isEmpty(value);
    } else {
      deny = !isNumber(value);
    }

    if (deny) {
      throw new Error('The `value` parameter is not an array/ChannelType or is empty');
    }

    if (isArray(value)) {
      for (const item of value) {
        if (!this.channelTypes.includes(item)) {
          if (!this.checkType(item)) {
            break;
          }

          this.channelTypes.push(item);
        }
      }
    } else if (!this.channelTypes.includes(value)) {
      if (!this.checkType(value)) {
        return this;
      }

      this.channelTypes.push(value);
    }

    return this;
  }

  public override toJSON(): ApplicationCommandOptionStructure {
    return {
      ...super.toJSON(),
      channel_types: this.channelTypes,
    };
  }

  private checkType(type: ChannelTypes): boolean {
    let validate: boolean = allowTypes.includes(type);

    if (!validate) {
      throw new Error('The `value` parameter is not a ChannelType');
    }

    return validate;
  }
}
