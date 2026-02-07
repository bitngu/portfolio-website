import type { MediaProps } from './Views/WindowsMediaPlayer'

const mapOfTheSoulCover = '/assets/MediaPlayer/map-of-the-soul-cover.jpg';
const weAreYoungCover = '/assets/MediaPlayer/we-are-young-cover.jpg';
const stereoHeartsCover = '/assets/MediaPlayer/stereo-hearts-cover.webp';
const aLittleHappinessCover = '/assets/MediaPlayer/a-little-happiness-cover.jpg';
const thoseBygoneYearsCover = '/assets/MediaPlayer/those-bygone-years-cover.webp';
const youNeverKnowCover = '/assets/MediaPlayer/you-never-know-cover.jpg';
const iKnowCover = '/assets/MediaPlayer/i-know-cover.webp';
const arcaneS2Cover = '/assets/MediaPlayer/arcane-s2-cover.jpeg';
const stillHereCover = '/assets/MediaPlayer/still-here-cover.webp';
const loginCover = '/assets/MediaPlayer/maplestory-login-cover.png';
const elNathCover = '/assets/MediaPlayer/maplestory-elnath-cover.png';
const templeOfTimeCover = '/assets/MediaPlayer/maplestory-temple-of-time-cover.jpg';
const ifIWereYoungCover = '/assets/MediaPlayer/if-i-were-young-cover.jpg';
const metamodernityCover = '/assets/MediaPlayer/metamodernity-cover.png';
const brothersCover = '/assets/MediaPlayer/brothers-cover.png';

const loginWallpaper = '/assets/MediaPlayer/maplestory-login-wallpaper.png';
const elNathWallpaper = '/assets/MediaPlayer/maplestory-elnath-wallpaper.png';
const templeOfTimeWallpaper = '/assets/MediaPlayer/maplestory-temp-of-time-wallpaper.png';
const saltWaterRoomWallpaper = '/assets/MediaPlayer/the-salt-water-room-wallpaper.webp';
const metamodernityWallpaper = '/assets/MediaPlayer/metamodernity-wallpaper.jpg';
const brothersWallpaper = '/assets/MediaPlayer/brothers-wallpaper.png';

const nothingOnYouBob = '/assets/audio/music/[BoB] Nothing on you.mp3';
const symphonyRemixCleanBandit = '/assets/audio/music/[Clean Bandit] Symphony (Remix).mp3';
const oneMinuteOneSecondEpikHigh = '/assets/audio/music/[Epik High] 1 minute 1 second.mp3';
const fanEpikHigh = '/assets/audio/music/[Epik High] Fan.mp3';
const loveLoveLoveEpikHigh = '/assets/audio/music/[Epik High] Love love love.mp3';
const umbrellaEpikHigh = '/assets/audio/music/[Epik High] Umbrella.mp3';
const weAreYoungFun = '/assets/audio/music/[Fun] We are young.mp3';
const stereoHeartsGymClassHeroes = '/assets/audio/music/[Gym Class Heroes] Stereo hearts.mp3';
const aLittleHappinessHebeTian = '/assets/audio/music/[Hebe Tian] A little happiness.mp3';
const thoseBygoneYearsHuXia = '/assets/audio/music/[Hu Xia] Those bygone years.mp3';
const youNeverKnowImmortalTechnique = '/assets/audio/music/[Immortal Technique] You never know.mp3';
const imYoursJasonMraz = '/assets/audio/music/[Jason Mraz] Im yours.mp3';
const iKnowLeeJungSik = '/assets/audio/music/[Lee Jung Sik] I know (Saxophone).mp3';
const biteMarksLol = '/assets/audio/music/[LoL] Bite marks.mp3';
const maMeilleureEnnemieLol = '/assets/audio/music/[LoL] Ma meilleure ennemie.mp3';
const stillHereLol = '/assets/audio/music/[LoL] Still here.mp3';
const theLineLol = '/assets/audio/music/[LoL] The line.mp3';
const huynhVaDeLyHai = '/assets/audio/music/[Ly Hai] Huynh va de.mp3';
const ngaReLyHai = '/assets/audio/music/[Ly Hai] Nga re.mp3';
const tronTimTinhYeuLyHai = '/assets/audio/music/[Ly Hai] Tron tim tinh yeu.mp3';
const xinMotLanDauLyHai = '/assets/audio/music/[Ly Hai] Xin mot lan dau.mp3';
const elNathMaplestory = '/assets/audio/music/[MapleStory] El nath.mp3';
const loginThemeMaplestory = '/assets/audio/music/[MapleStory] Login theme.mp3';
const templeOfTimeMaplestory = '/assets/audio/music/[MapleStory] Temple of time.mp3';
const firefliesOwlCity = '/assets/audio/music/[Owl City] Fireflies.mp3';
const theSaltwaterRoomOwlCity = '/assets/audio/music/[Owl City] The saltwater room.mp3';
const ifIWereYoungRonghaoLi = '/assets/audio/music/[Ronghao Li] If I Were Young.mp3';
const dontLetMeBeLonelyTheBandPerry = '/assets/audio/music/[The Band Perry] Dont let me be lonely .mp3';
const thaTrangThaDenTruongDanHuy = '/assets/audio/music/[Troung Dan Huy] Tha Trang Tha Den.mp3';
const thoungXotDoiEmDanHuy = '/assets/audio/music/[Truong Dan Huy] Thuong Xot Doi Em.mp3';
const veDauTruongDanHuy = '/assets/audio/music/[Truong Dan Huy] Ve Dau.mp3';
const veDau3TruongDanHuy = '/assets/audio/music/[Truong Dan Huy] Ve Dau 3.mp3';
const veDau4TruongDanHuy = '/assets/audio/music/[Truong Dan Huy] Ve Dau 4.mp3';
const aThousandMilesVanessaCarlton = '/assets/audio/music/[Vanessa Carlton] A Thousand Miles.mp3';
const metamodernityVansire = '/assets/audio/music/[Vansire] Metamodernity.mp3';
const brothersVicMignogna = '/assets/audio/music/[Vic Mignogna] Brothers.mp3';


export const audioCollections: MediaProps[] = [
    {
        name: 'Nothing on you',
        by: 'BoB ft Bruno Mars',
        path: nothingOnYouBob
    },
    {
        name: 'Symphony Remix',
        by: 'Clean Bandit',
        path: symphonyRemixCleanBandit
    },
    {
        name: 'Love love love',
        by: 'Epik High',
        path: loveLoveLoveEpikHigh,
        cover: mapOfTheSoulCover
    },
    {
        name: '1 minute 1 second',
        by: 'Epik High',
        path: oneMinuteOneSecondEpikHigh,
        cover: mapOfTheSoulCover
    },
    {
        name: 'Fan',
        by: 'Epik High',
        path: fanEpikHigh,
        cover: mapOfTheSoulCover
    },
    {
        name: 'Umbrella',
        by: 'Epik High',
        path: umbrellaEpikHigh,
        cover: mapOfTheSoulCover
    },
    {
        name: 'We are young',
        by: 'Fun',
        path: weAreYoungFun,
        cover: weAreYoungCover,
    },
    {
        name: 'Stereo hearts',
        by: 'Gym Class Hereos',
        path: stereoHeartsGymClassHeroes,
        cover: stereoHeartsCover,
    },
    {
        name: 'A little happiness',
        by: 'Hebe Tian',
        path: aLittleHappinessHebeTian,
        cover: aLittleHappinessCover,
    },
    {
        name: 'Those bygone years',
        by: 'Hu Xia',
        path: thoseBygoneYearsHuXia,
        cover: thoseBygoneYearsCover,
    },
    {
        name: 'You never know',
        by: 'Immortal Technique',
        path: youNeverKnowImmortalTechnique,
        cover: youNeverKnowCover,
    },
    {
        name: 'I\'m yours',
        by: 'Jason Mraz',
        path: imYoursJasonMraz,
    },
    {
        name: 'I know (Saxophone)',
        by: 'Lee Jung Sik',
        path: iKnowLeeJungSik,
        cover: iKnowCover
    },
    {
        name: 'Bite marks',
        by: 'League of Legends',
        path: biteMarksLol,
        cover: arcaneS2Cover
    },
    {
        name: 'Ma meilleure ennemie',
        by: 'League of Legends',
        path: maMeilleureEnnemieLol,
        cover: arcaneS2Cover
    },
    {
        name: 'The line',
        by: 'League of Legends',
        path: theLineLol,
        cover: arcaneS2Cover
    },
    {
        name: 'Still here',
        by: 'League of Legends',
        path: stillHereLol,
        cover: stillHereCover
    },
    {
        name: 'Huynh va de',
        by: 'Ly Hai',
        path: huynhVaDeLyHai,
    },
    {
        name: 'Nga re',
        by: 'Ly Hai',
        path: ngaReLyHai,
    },
    {
        name: 'Tron tim tinh yeu',
        by: 'Ly Hai',
        path: tronTimTinhYeuLyHai,
    },
    {
        name: 'Xin mot lan dau',
        by: 'Ly Hai',
        path: xinMotLanDauLyHai,
    },
    {
        name: 'El Nath Snowy Village',
        by: 'Maplestory',
        path: elNathMaplestory,
        cover: elNathCover,
        wallpaper: elNathWallpaper
    },
    {
        name: 'Login Theme',
        by: 'Maplestory',
        path: loginThemeMaplestory,
        cover: loginCover,
        wallpaper: loginWallpaper
    },
    {
        name: 'Temple of time',
        by: 'Maplestory',
        path: templeOfTimeMaplestory,
        cover: templeOfTimeCover,
        wallpaper: templeOfTimeWallpaper
    },
    {
        name: 'Fireflies',
        by: 'Owl City',
        path: firefliesOwlCity,
    },
    {
        name: 'The saltwater room',
        by: 'Owl City',
        path: theSaltwaterRoomOwlCity,
        wallpaper: saltWaterRoomWallpaper
    },
    {
        name: 'If I were young',
        by: 'Ronghao Li',
        path: ifIWereYoungRonghaoLi,
        cover: ifIWereYoungCover
    },
    {
        name: 'Don\'t let me be lonely',
        by: 'The Band Perry',
        path: dontLetMeBeLonelyTheBandPerry
    },
    {
        name: 'Tha trang tha den',
        by: 'Truong Dan Huy',
        path: thaTrangThaDenTruongDanHuy
    },
    {
        name: 'Thoung xot doi em',
        by: 'Truong Dan Huy',
        path: thoungXotDoiEmDanHuy
    },
    {
        name: 'Ve dau',
        by: 'Truong Dan Huy',
        path: veDauTruongDanHuy
    },
    {
        name: 'Ve dau 3',
        by: 'Truong Dan Huy',
        path: veDau3TruongDanHuy
    },
    {
        name: 'Ve dau 4',
        by: 'Truong Dan Huy',
        path: veDau4TruongDanHuy
    },
    {
        name: 'A thousand miles',
        by: 'Vanessa Carlton',
        path: aThousandMilesVanessaCarlton
    },
    {
        name: 'Metamodernity',
        by: 'Vansire',
        path: metamodernityVansire,
        cover: metamodernityCover,
        wallpaper: metamodernityWallpaper
    },
    {
        name: 'Brothers',
        by: 'Vic Mignogna',
        path: brothersVicMignogna,
        cover: brothersCover,
        wallpaper: brothersWallpaper
    }
]