import React, { useEffect, useRef, useState } from 'react'
import { useDeepCompareEffect } from 'react-use'

import type { Sound } from '~/data/sounds'

import { useThemeStore } from '~/stores/theme-store'
import { useGlobalVolumeStore } from '~/stores/global-volume-store'
import { PomodoroStatus, usePomodoroStore } from '~/stores/pomodoro-store'
import { SoundState, useSoundsStateStore } from '~/stores/sounds-state-store'
import { useUserInteractionStore } from '~/stores/user-interaction-store'

import { useQueryState } from '~/hooks/use-query-state'

import { VolumeController } from './volume-controller'

interface SoundButtonProps {
  sound: Sound
}

export const SoundButton: React.FC<SoundButtonProps> = ({ sound }) => {
  const globalVolume = useGlobalVolumeStore(state => state.globalVolume)
  const pomodoroStatus = usePomodoroStore(state => state.pomodoroStatus)
  const theme = useThemeStore(set => set.theme)
  const soundsStore = useSoundsStateStore(state => state.sounds)
  const getSoundState = useSoundsStateStore(state => state.getSound)
  const setSoundState = useSoundsStateStore(state => state.setSound)
  const userHasInteracted = useUserInteractionStore(
    state => state.userHasInteracted
  )

  const [querySounds, setQuerySounds] = useQueryState('sounds')

  const [localSoundState, setLocalSoundState] = useState<SoundState>({
    active: false,
    id: sound.id,
    volume: 1,
    loaded: false
  })

  const soundRef = useRef<HTMLAudioElement>()

  const sync = {
    active: (soundState: SoundState) => {
      if (soundState.active) soundRef.current.play()
      else soundRef.current.pause()
    },
    volume: (soundState: SoundState) => {
      soundRef.current.volume = soundState.volume * globalVolume
    }
  }

  useEffect(() => {
    const soundState = getSoundState(sound.id)

    let initialState = {
      id: sound.id,
      active: false,
      volume: 1,
      loaded: false
    }

    if (soundState) {
      initialState = {
        ...soundState,
        active: false,
        loaded: false
      }
    }

    if (querySounds.length) {
      decodeURIComponent(querySounds)
        .split(';')
        .forEach(item => {
          const [id, volume] = item.split(',')
          if (id === sound.id) {
            initialState = {
              id,
              volume: parseFloat(volume),
              active: true,
              loaded: false
            }
          }
        })
    }

    setSoundState(initialState)
    setLocalSoundState(initialState)
    soundRef.current.load()
  }, [])

  // https://github.com/mateusfg7/Noisekun/issues/608#issuecomment-1874096664
  useDeepCompareEffect(() => {
    const soundState = getSoundState(sound.id)

    if (!soundState || !localSoundState) return

    if (userHasInteracted) {
      sync.active(soundState)
      sync.volume(soundState)
    }

    setLocalSoundState(soundState)
    mountQueryParams()
  }, [soundsStore, userHasInteracted])

  const mountQueryParams = () => {
    const activeSounds = soundsStore
      .filter(item => item.active)
      .map(item => `${item.id},${item.volume}`)
      .join(';')

    setQuerySounds(activeSounds)
  }

  useEffect(() => {
    if (!getSoundState(sound.id).active) return

    switch (pomodoroStatus) {
      case PomodoroStatus.ticking:
      case PomodoroStatus.idle:
        if (soundRef.current.volume === 0) {
          soundRef.current.volume =
            getSoundState(sound.id).volume * globalVolume
        }
        break

      case PomodoroStatus.stopped:
        if (soundRef.current.volume > 0) {
          soundRef.current.volume = 0
        }
        break
    }
  }, [pomodoroStatus])

  useEffect(() => {
    soundRef.current.volume = getSoundState(sound.id).volume * globalVolume
  }, [globalVolume])

  const Icon = sound.icon

  return (
    <div
      title={sound.title}
      className="flex h-24 w-24 flex-col items-center justify-center"
    >
      <audio
        ref={soundRef}
        onWaiting={() => setSoundState({ ...localSoundState, loaded: false })}
        onCanPlayThrough={() =>
          setSoundState({ ...localSoundState, loaded: true })
        }
        preload="auto"
        loop
      >
        <source src={sound.file.url} type={sound.file.type} />
      </audio>
      <button
        data-umami-event={sound.title}
        data-active={
          localSoundState.active && localSoundState.loaded && userHasInteracted
        }
        data-loaded={localSoundState.loaded}
        // data-loaded={true}
        className="flex h-24 w-24 cursor-wait items-center justify-center rounded-xl text-primary-foreground/90 opacity-70 transition duration-300 disabled:hover:bg-transparent data-[loaded='false']:animate-loading data-[loaded='true']:cursor-pointer data-[active='true']:rounded-b-none data-[active='true']:opacity-100 md:hover:bg-primary-foreground/10 data-[active='true']:md:bg-primary-foreground/10 data-[active='true']:md:shadow-sound data-[loaded='true']:md:hover:opacity-100 data-[loaded='true']:md:hover:shadow-sound"
        onClick={() =>
          setSoundState({ ...localSoundState, active: !localSoundState.active })
        }
        disabled={!localSoundState.loaded}
        aria-label={sound.title}
      >
        <Icon className="h-20 w-20" />
      </button>
      <VolumeController
        isActive={
          localSoundState.active && localSoundState.loaded && userHasInteracted
        }
        soundName={sound.title}
        soundId={sound.id}
        handleSoundVolume={volume => {
          setSoundState({ ...localSoundState, volume })
        }}
      />
    </div>
  )
}
