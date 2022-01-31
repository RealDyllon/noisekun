<div align="center">

# ![Noisekun :headphones:](.github/docs/favicon.png)

_Listen combinations of ambient sounds for **relaxing** or getting more **productive** on your task!_

</div>

<br/>

<div align="right">

_Inspired on [Noisli](https://www.noisli.com/)_

</div>

<br/>
<br/>

# Setup Project

### Install dependencies

_yarn_
```
yarn install
```
_npm_
```
npm install
```

### Setup environment variables
Create file `.env.local` on root of the project, and add the following variables

_see `.env.example`_
```
CDN_AUDIO_SERVER=https://cdn.example.com
```
> The cdn needs to have the audio files on the root of the server
> 
> e.g.: _https://cdn.example.com/coffee.mp3_
>
> To change this pattern, modify the file `src/components/Sound/index.tsx`

## Init Dev Environment

### Setup husky

Prepare husky for use git-hooks, to automate commits

_yarn_
```
yarn prepare
```
_npm_
```
npm run prepare
```


### Start dev server

_yarn_
```
yarn dev
```

_npm_
```
npm run Dev
```

## Init production environment

_yarn_
```
yarn build && yarn start
```

_npm_
```
npm run build && npm run start
```





<br/>
<br/>

<div align="center">

![](https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Fnoisekun.vercel.app) [![CodeFactor](https://img.shields.io/codefactor/grade/github/mateusfg7/Noisekun?style=flat-square)](https://www.codefactor.io/repository/github/mateusfg7/noisekun) ![](https://img.shields.io/github/last-commit/mateusfg7/noisekun?style=flat-square)

</div>

<br/>

---

# Credits

<table>
  <tr>
    <th>Icon</th>
    <th>Link</th>
  </tr>
  <tr>
  <td>
  <img src="public/assets/rain.svg" alt="Rain" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/weather-icons/icon-cloud-rain-icon-6709">rain</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/storm.svg" alt="Storm" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/weather-icons/icon-cloud-lightning-icon-6715">storm</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/wind.svg" alt="Wind" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/weather-icons/icon-wind-icon-6748">wind</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/drops.svg" alt="Drops" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/weather-icons/icon-raindrops-icon-6741">drops</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/waves.svg" alt="Waves" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/test/travel-beach-swimming-icon-1279">waves</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/water.svg" alt="Water" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/hotel-and-spa/sea-icon-786">water</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/birds-tree.svg" alt="Birds" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/travel-and-holiday/travel-trees-icon-1302">birds-tree</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/leafs.svg" alt="Leafs" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/beauty-and-salon/leaf-icon-1202">leafs</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/fire.svg" alt="Fire" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/travel-and-holiday/travel-fire-icon-1289">fire</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/night.svg" alt="Night" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/weather-icons-2/weather-moon-icon-13639#">night</a> (edited)
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/coffee.svg" alt="Coffee" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/cafe-and-coffee-shop-icons/cafe-cup-icon-2984">coffee</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/noise-block.svg" alt="Noise" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/computer-devices/headset-headphone-earphone-icon-133586">noise-block</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/train.svg" alt="Train" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/travel-and-holiday/travel-tarin-icon-1301">train</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/air-plane.svg" alt="Airplane" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/travel-and-holiday/travel-plane-flight-icon-1296">air-plane</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/underwater.svg" alt="Underwater" width="50" />
  </td>
  <td>
  
  <a src="https://freeicons.io/sports-icons-2/icon-diving-goggles-icon-6578">underwater</a>
  
  </td>
  </tr>
  <tr>
  <td>
  <img src="public/assets/washingmachine.svg" alt="Washingmachine" width="50" />
  </td>
  <td>

  <a src="https://freeicons.io/cleaning/cleaning-washing-machine-washingmachine-icon-42075#">washingmachine</a> (edited)
  
  </td>
  </tr>
</table>

## Sounds
- [Ambience - Airplane Interior Ambience - SFX Producer ( No Copyright Ambience Sound )](https://www.youtube.com/watch?v=yJrNMM7xvug)
- [ambience - Restaurant Crowd 2 - SFX Producer ( No Copyright Sound Effect )](https://www.youtube.com/watch?v=2ewwVYoMU5I)
- [Office - Elevator Fan Loop - SFX Producer ( No Copyright Sound Effects )](https://www.youtube.com/watch?v=Yy8Fujlzn0o)
- [Fire - Fire Wood Large 2 - SFX Producer ( No Copyright Sound Effects )](https://www.youtube.com/watch?v=aJ21cKAR7-M)
- [Sound Effect - Surround SFX - Birds Forest 1 - SFX Producer ( No Copyright Sound Effects )](https://www.youtube.com/watch?v=J6OGbkl4Vrs)
- [Weather - Light Wind In Trees - SFX Producer ( No Copyright Sound Effects )](https://www.youtube.com/watch?v=Kz0x59DlJks) (edited)
- [Ambience - Subdivision Night - SFX Producer ( No Copyright Sound Effects )](https://www.youtube.com/watch?v=nd1qc_bhMOs)
- [Ambience - Ocean Waves 2 - SFX Producer ( No Copyright Ambient Sounds )](https://www.youtube.com/watch?v=SL9NdTMsIUk)
- [Sound Effect - Rain - Rain Light 2 - SFX Producer ( No Copyright )](https://www.youtube.com/watch?v=3oMcTXhXOpc)
- [Ambience - Stream Water - SFX Producer ( No Copyright Sound Effects )](https://www.youtube.com/watch?v=cN5sGvQ_m_c)
- [Thunder - Thunderstorm Light 2 - SFX Producer ( No Copyright Sound Effects )](https://www.youtube.com/watch?v=Xu9SAuPlaKs)
- [Subway Train Interior (Version 2) (Metro Tube Underground Inside Ambience Background Noise...](https://www.youtube.com/watch?v=3oxBCtkev9g)
- [SCUBA BREATHING SOUND EFFECT IN HIGH QUALITY](https://www.youtube.com/watch?v=iwnFU28litc)
- [Weather - Rain Drops 3 - SFX Producer ( No Copyright Sound Effects )](https://www.youtube.com/watch?v=yLhG21A_9QE)
- [ambience - Amb Park - SFX Producer ( No Copyright Sound Effect )](https://www.youtube.com/watch?v=yN_5eOQvA3s)
- [WASHING MACHINE UNDERWATER AMBIENCE 2 SOUND](https://quicksounds.com/sound/12411/washing-machine-underwater-ambience-2)
