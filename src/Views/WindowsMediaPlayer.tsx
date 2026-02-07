import '../styles/WindowsMediaPlayer.scss'
import defaultCover from '/assets/MediaPlayer/default-cover.jpeg'
import defaultWallpaper from '/assets/MediaPlayer/default-wallpaper.jpeg'
import backArrow from '/assets/taskbar/back-arrow.png'
import doubleRightArrow from '/assets/taskbar/double-right-arrow.png'
import forward from '/assets/taskbar/forward-arrow.png'
import music from '/assets/taskbar/music.avif'

import { useEffect, useRef, useState, type ChangeEvent, type SyntheticEvent } from 'react'
import { shuffle } from '../helpers'
import { audioCollections } from '../constants'


export type MediaProps = {
    name: string;
    by: string;
    path: string;
    current_time?: number;
    duration?: number;
    wallpaper?: string;
    cover?: string;
    seekTime?: number,
}

const enum RepeatStatus {
    None,
    All,
    Once
}


export const WindowsMediaPlayer = (): React.ReactNode => {
    const [playlist, setPlaylist] = useState<MediaProps[]>(audioCollections);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [currentSong, setCurrentSong] = useState<MediaProps>(audioCollections[0]);
    const [play, setPlay] = useState(false);
    const [isSeeking, setIsSeeking] = useState(false);
    const [repeatStatus, setRepeatStatus] = useState<RepeatStatus>(RepeatStatus.None);
    const [isShuffle, setShuffle] = useState(false);
    const [volume, setVolume] = useState(1);

    const convertTime = (time?: number): string => {
        if (time) {
            const mins = Math.floor(time / 60)
            const seconds = time % 60
            return `${(mins < 10 ? '0' : '') + mins}: ${(seconds < 10 ? '0' : '') + seconds.toFixed(0)}`
        }
        return '00: 00';
    }

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.load();
            audioRef.current.play();
        }
    }

    const onPlay = () => {
        if (audioRef.current) {
            setPlay(prev => !prev);
            if (play) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
    }

    const songClick = (song: MediaProps) => {
        setCurrentSong(() => song);
        setPlay(true);
        playAudio();
    }

    const onRepeat = () => {
        setRepeatStatus(prev => (prev + 1) % 3)
    }

    const onStop = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.pause();
            setPlay(false);
        }
    }

    const onShuffle = () => {
        if (!isShuffle) {
            let newList = shuffle(playlist) as MediaProps[]
            newList = newList.filter(song => song.path !== currentSong.path)
            newList.unshift(currentSong);
            setPlaylist(newList)
        }
        setShuffle(prev => !prev);
    }

    const loopNext = () => {
        const currentIndex = playlist.findIndex(item =>  item.path === currentSong.path);
        const nextIndex = (currentIndex + 1) % audioCollections.length
         if (repeatStatus === RepeatStatus.All) {            
            setCurrentSong(playlist[nextIndex]);
            playAudio();
        } else if (repeatStatus === RepeatStatus.None) {
            if (currentIndex + 1 === audioCollections.length){
                onStop();
            } else {
                setCurrentSong(playlist[nextIndex]);
                playAudio();
            }
        }
        else {
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                playAudio();
            }
        }
    }

    const nextSong = () => {
        if (repeatStatus === RepeatStatus.Once) {
            setRepeatStatus(RepeatStatus.All);
        };

        const currentIndex = playlist.findIndex(item =>  item.path === currentSong.path);
        const nextIndex = (currentIndex + 1) % audioCollections.length
        setCurrentSong(playlist[nextIndex]);
        setPlay(true);
        playAudio();
    }

    const prevSong = () => {
        if (repeatStatus === RepeatStatus.Once) {
            setRepeatStatus(RepeatStatus.All);
        };

        const currentIndex = playlist.findIndex(item =>  item.path === currentSong.path);
        let prevIndex = 0

        if (currentIndex - 1 < 0) {
            prevIndex = playlist.length - 1
        } else {
            prevIndex = currentIndex - 1
        }

        setCurrentSong(playlist[prevIndex]);
        setPlay(true);
        playAudio();
    }

    const onTimeUpdate = (event: SyntheticEvent<HTMLAudioElement>) => {
        const currentTime = event.currentTarget.currentTime;
        const currentDuration = event.currentTarget.duration;
        if (!isSeeking) {
            setCurrentSong(prev => {
                return {
                    ...prev,
                    current_time: currentTime,
                    seekTime: (currentTime / currentDuration) * 100 || 0
                }
            })
        }
    }

    const handleOnSeek = (event: ChangeEvent<HTMLInputElement>) => {
        let currentTime = currentSong.current_time
        const seekTime = parseFloat(event.currentTarget.value);
        if (audioRef.current) {
            currentTime = parseFloat(event.currentTarget.value) / 100 * audioRef.current.duration
        }

        setCurrentSong(prev => {
            return {
                ...prev,
                current_time: currentTime,
                seekTime: seekTime
            }
        })
    }
    
    const onMouseDown = () => {
        setIsSeeking(true);
        if (audioRef.current) {
            setPlay(false);
            audioRef.current.pause();
        }
    }
    const onMouseUp = () => {
        setIsSeeking(false);

        if (audioRef.current) {
            const newTime = ((currentSong.seekTime || 0) / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setCurrentSong(prev => {
                return {
                    ...prev,
                    current_time: newTime
                }
            })
            setPlay(true);
            audioRef.current.play();
        }
    }

    const clickVolume = () => {
        let newVolume = 0;
        if (audioRef.current) {
            if (audioRef.current.volume === 0) {
                newVolume = 0.5
            } else if (audioRef.current.volume < 0.6){
                newVolume = 1;
            }
            audioRef.current.volume = newVolume;
        }
        setVolume(newVolume);
    }

    const onVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(event.target.value);    
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
        setVolume(newVolume);
    }

    useEffect(() => {
        audioCollections.forEach((song, index) => {
            const audio = new Audio(song.path);
            if (audio) {
                audio.onloadedmetadata = () => {
                    song.duration = audio.duration
                    song.current_time = audio.currentTime

                    setPlaylist(prev => {
                        const newPlaylist = [...prev];
                        newPlaylist[index] = {
                            ...newPlaylist[index],
                            duration: audio.duration,
                            current_time: audio.currentTime
                        };
                        return newPlaylist
                    })
                }
                audio.load();
            }
        })
    }, [])

    return (
        <div className="windows-media-player">
            <div className="media-actions">
                <div className='nav-actions'>
                    <div className='back-arrow'>
                        <img src={backArrow}></img>
                    </div>
                    <div className='forward-arrow'>
                        <img src={forward}></img>
                    </div>
                </div>
                <button className={`now-playing ${play ? 'active': ''}`}> Now Playing </button>
                <button> Library </button>
                <button className='ipad'> Rip </button>
                <button className='ipad'> Burn </button>
                <button className='web'> Sync </button>
                <button className='web'> Media Guide </button>
                <div className='more-options mobile'>
                    <img src={doubleRightArrow}></img>
                </div>
            </div>
            <div className="media-content">
                <div className="wallpaper">
                    <img src={currentSong.wallpaper || defaultWallpaper} />
                </div>
                <div className="media-playlist ipad">
                    <div className="music-content">
                        <div className="music-icon">
                            <img src={currentSong.cover || defaultCover} />
                        </div>
                        <p> {currentSong.name} </p>
                    </div>
                    <div className='playlist-content'>
                        {audioCollections.map((song, index) => {
                            return <div key={index} className={`media-info ${song.path === currentSong.path ? 'active' : ''}`} onClick={() => songClick(song)}>
                                <span className='name'> {index + 1}. {song.name} </span>
                                <span className='duration'> {convertTime(song.duration || 0)} </span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className='track-filler'>
                <div className='progress' style={{width: `${currentSong.seekTime}%`}}></div>
                <input type='range' id='seek' value={currentSong.seekTime || 0} max={100} onChange={handleOnSeek} onMouseDown={onMouseDown} onMouseUp={onMouseUp}/>
            </div>
            <audio ref={audioRef} onEnded={loopNext} onTimeUpdate={onTimeUpdate}>
                <source src={currentSong.path} type='audio/mp3' />
            </audio>
            <div className='media-controls'>
                <div className='song-info ipad'>
                    <div className='music-icon'>
                        <img src={music} />
                    </div>
                    <div className='animation-wrapper'>
                        <p className='name'> {currentSong.name} <span className='created-by'> {currentSong.by}</span></p>
                    </div>
                    <span className='time'>{convertTime(currentSong.current_time)}</span>
                </div>
                <div className='controls'>
                    <button type="button" className={`shuffle ${isShuffle ? 'enable' : 'none'} ipad`} onClick={onShuffle}/>
                    <button type="button" className={`repeat ${repeatStatus === RepeatStatus.None ? 'none': (repeatStatus === RepeatStatus.All ? 'all' : 'once')} ipad`} onClick={onRepeat}/>
                    <button type="button" className='stop' onClick={onStop}/>
                    <button type="button" className='rewind' onClick={prevSong} />
                    <button type="button" className={play ? 'pause' : 'play'} onClick={onPlay} />
                    <button type="button" className='fast-forward' onClick={nextSong} />
                    <button type="button" className={`volume ${volume > 0.6 ? 'high': (volume === 0 ? 'mute' : 'low')}`} onClick={(clickVolume)} />
                    <input id ='media-volume' step={0.01} type="range" value={volume} max={1.0} className='volume-slider ipad' onChange={onVolumeChange}/>
                </div>
                <div className='help-actions ipad'>
                    <button type='button' className='help'/>
                </div>
            </div>
        </div>
    )
}