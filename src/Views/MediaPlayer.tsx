import '../styles/MediaPlayer.scss'
import {useRef, useState, type ChangeEvent, type SyntheticEvent} from 'react'
import mapleBGM from '/assets/audio/music/[MapleStory BGM] El Nath_ Snowy Village.mp3'
import mapleLogin from '/assets/audio/music/[MapleStory BGM] Login.mp3'

export const MediaPlayer = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const songs = [mapleBGM, mapleLogin];
    const [songIndex, setSongIndex] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const [songTime, setSongTime] = useState(0);
    const [songDuration, setSongDuration] = useState(0);
    const [play, setPlay] = useState(false);
    const [isSeeking, setIsSeeking] = useState(false);


    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.load();
            audioRef.current.play();
        }
    }

    const onPlay= () => {
        if(audioRef.current) {
            setPlay(prev => !prev);
            if (play) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
    }

    const nextSong = () => {
        setSongIndex(prev => (prev + 1) % songs.length)
        playAudio()
    }

    const prevSong = () => {
        setSongIndex(prev => (Math.abs(prev - 1)) % songs.length)
        playAudio();
    }

    const onTimeUpdate = (event: SyntheticEvent<HTMLAudioElement>) => {
        if (!isSeeking){
            setSongTime(event.currentTarget.currentTime)
            setSeekTime((event.currentTarget.currentTime / event.currentTarget.duration) * 100 || 0);
        }
    }

    const handleOnSeek = (event: ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current){
            setSongTime((parseFloat(event.currentTarget.value) / 100) * audioRef.current.duration)
        }

        setSeekTime(parseFloat(event.currentTarget.value))
    }

    const onLoadedMetadata = (event: SyntheticEvent<HTMLAudioElement>) => {
        setSongTime(event.currentTarget.currentTime);
        setSongDuration(event.currentTarget.duration)
    }

    const onMouseDown = () => {
        setIsSeeking(true);
        if (audioRef.current){
            audioRef.current.pause();
        }
    }
    const onMouseUp = () => {
        setIsSeeking(false);
        if (audioRef.current) {
            const newTime = (seekTime / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setSongTime(newTime)
            audioRef.current.play();
        }
    }

    return <div className="media-player">
        <audio ref={audioRef} onEnded={nextSong} onTimeUpdate={onTimeUpdate} onLoadedMetadata={onLoadedMetadata}>
            <source src={songs[songIndex]} type='audio/mp3'/>
        </audio>
        <div className='media-player--time-control-slider'>
            <p>{songTime.toFixed(2)}</p>
            <input type='range' id='seek' value={seekTime} max={100} onChange={handleOnSeek} onMouseDown={onMouseDown} onMouseUp={onMouseUp}></input>
            <p>{songDuration.toFixed(2)}</p>

        </div>
        <div className='media-player--controls'>
            <button type='button' onClick={onPlay}> Play </button>
            <button onClick={nextSong}> Next </button>
            <button onClick={prevSong}> Prev </button>
        </div>
    </div>
}