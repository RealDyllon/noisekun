import {
  AirPlane,
  BirdsTree,
  Boat,
  BrownNoise,
  Cave,
  Coffee,
  Drops,
  Fire,
  Leaves,
  Night,
  PinkNoise,
  Playground,
  Rain,
  RainOnTent,
  Storm,
  StreamWater,
  Train,
  Underwater,
  WashingMachine,
  Waterfall,
  Waves,
  WhiteNoise,
  Wind
} from './icons'

export const sounds = [
  {
    id: 'rain',
    title: 'Rain',
    icon: Rain,
    file: {
      url: 'https://noise.dyllon.io/sounds/rain.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'storm',
    title: 'Storm',
    icon: Storm,
    file: {
      url: 'https://noise.dyllon.io/sounds/storm.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'drops',
    title: 'Drops',
    icon: Drops,
    file: {
      url: 'https://noise.dyllon.io/sounds/drops.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'wind',
    title: 'Wind',
    icon: Wind,
    file: {
      url: 'https://noise.dyllon.io/sounds/wind.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'waves',
    title: 'Waves',
    icon: Waves,
    file: {
      url: 'https://noise.dyllon.io/sounds/waves.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'underwater',
    title: 'Underwater',
    icon: Underwater,
    file: {
      url: 'https://noise.dyllon.io/sounds/underwater.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'stream-water',
    title: 'Stream Water',
    icon: StreamWater,
    file: {
      url: 'https://noise.dyllon.io/sounds/stream-water.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'waterfall',
    title: 'Waterfall',
    icon: Waterfall,
    file: {
      url: 'https://noise.dyllon.io/sounds/waterfall.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'birds-tree',
    title: 'Birds on Tree',
    icon: BirdsTree,
    file: {
      url: 'https://noise.dyllon.io/sounds/birds-tree.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'leaves',
    title: 'Leaves',
    icon: Leaves,
    file: {
      url: 'https://noise.dyllon.io/sounds/leaves.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'fire',
    title: 'Bonfire',
    icon: Fire,
    file: {
      url: 'https://noise.dyllon.io/sounds/fire.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'cave',
    title: 'Cave Sounds',
    icon: Cave,
    file: {
      url: 'https://noise.dyllon.io/sounds/cave-drops.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'night',
    title: 'Night',
    icon: Night,
    file: {
      url: 'https://noise.dyllon.io/sounds/night.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'coffee',
    title: 'Coffee shop',
    icon: Coffee,
    file: {
      url: 'https://noise.dyllon.io/sounds/coffee.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'train',
    title: 'Train',
    icon: Train,
    file: {
      url: 'https://noise.dyllon.io/sounds/train.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'air-plane',
    title: 'Airplane',
    icon: AirPlane,
    file: {
      url: 'https://noise.dyllon.io/sounds/air-plane.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'washing-machine',
    title: 'Washing machine',
    icon: WashingMachine,
    file: {
      url: 'https://noise.dyllon.io/sounds/washing-machine.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'playground',
    title: 'Playground',
    icon: Playground,
    file: {
      url: 'https://noise.dyllon.io/sounds/playground.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'boat',
    title: 'Boat',
    icon: Boat,
    file: {
      url: 'https://noise.dyllon.io/sounds/boat.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'rain-on-tent',
    title: 'Rain on Tent',
    icon: RainOnTent,
    file: {
      url: 'https://noise.dyllon.io/sounds/rain-on-tent.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'brown-noise',
    title: 'Brown Noise',
    icon: BrownNoise,
    file: {
      url: 'https://noise.dyllon.io/sounds/brown-noise.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'white-noise',
    title: 'White Noise',
    icon: WhiteNoise,
    file: {
      url: 'https://noise.dyllon.io/sounds/white-noise.m4a',
      type: 'audio/mp4'
    }
  },
  {
    id: 'pink-noise',
    title: 'Pink Noise',
    icon: PinkNoise,
    file: {
      url: 'https://noise.dyllon.io/sounds/pink-noise.m4a',
      type: 'audio/mp4'
    }
  }
]

export type Sound = (typeof sounds)[0]
