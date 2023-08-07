import {
  AirPlane,
  BirdsTree,
  BrownNoise,
  BrownNoise2,
  BrownNoise3,
  Cave,
  Coffee,
  Drops,
  Fire,
  Leaves,
  Night,
  Rain,
  Storm,
  StreamWater,
  Train,
  Underwater,
  WashingMachine,
  Waterfall,
  Waves,
  Wind
} from '@/components/sound-icons'

export const sounds = [
  {
    id: 'rain',
    title: 'Rain',
    icon: Rain,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/rain.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'storm',
    title: 'Storm',
    icon: Storm,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/storm.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'drops',
    title: 'Drops',
    icon: Drops,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/drops.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'wind',
    title: 'Wind',
    icon: Wind,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/wind.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'waves',
    title: 'Waves',
    icon: Waves,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/waves.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'underwater',
    title: 'Underwater',
    icon: Underwater,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/underwater.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'stream-water',
    title: 'Stream Water',
    icon: StreamWater,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/stream-water.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'waterfall',
    title: 'Waterfall',
    icon: Waterfall,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/waterfall.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'birds-tree',
    title: 'Birds on Tree',
    icon: BirdsTree,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/birds-tree.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'leaves',
    title: 'Leaves',
    icon: Leaves,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/leaves.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'fire',
    title: 'Bonfire',
    icon: Fire,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/fire.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'cave',
    title: 'Cave Sounds',
    icon: Cave,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/cave-drops.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'night',
    title: 'Night',
    icon: Night,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/night.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'coffee',
    title: 'Coffee shop',
    icon: Coffee,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/coffee.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'train',
    title: 'Train',
    icon: Train,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/train.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'air-plane',
    title: 'Airplane',
    icon: AirPlane,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/air-plane.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'washing-machine',
    title: 'Washing machine',
    icon: WashingMachine,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/washing-machine.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'brown-noise',
    title: 'Brown Noise',
    icon: BrownNoise,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/brown-noise.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'brown-noise2',
    title: 'Brown Noise 2',
    icon: BrownNoise2,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/brown-noise2.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'brown-noise3',
    title: 'Brown Noise 3',
    icon: BrownNoise3,
    file: {
      url: 'https://storage.googleapis.com/ambience-sounds/brown-noise3.ogg',
      type: 'audio/ogg'
    }
  }
]

export type Sound = (typeof sounds)[0]