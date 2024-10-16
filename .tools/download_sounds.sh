#!/bin/bash

sounds=(
  "rain"
  "storm"
  "drops"
  "wind"
  "waves"
  "underwater"
  "stream-water"
  "waterfall"
  "birds-tree"
  "leaves"
  "fire"
  "cave-drops" # Note the correction here
  "night"
  "coffee"
  "train"
  "air-plane"
  "washing-machine"
  "playground"
  "boat"
  "rain-on-tent"
  "brown-noise"
  "white-noise"
  "pink-noise"
)

for sound in "${sounds[@]}"; do
  curl -L -O "https://cdn.noisekun.com/sounds/${sound}.ogg"
done
