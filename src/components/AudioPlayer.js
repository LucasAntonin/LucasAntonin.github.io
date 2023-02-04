import { useState } from "react";
import synthwave from "../song/synthwave_goose_blade_runner_2049.mp3";
import useSound from 'use-sound';
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import NeonCircle from "./NeonCircle";

function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    const [play, { pause }] = useSound(synthwave,
        { volume: 0.3 },
        {
            onplay: () => setIsPlaying(true),
            onend: () => setIsPlaying(false),
        });

    const togglePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <div onClick={() => togglePlay()} className="relative inline-flex items-center cursor-pointer font-extrabold text-blue-800 text-4xl">
            <NeonCircle>
                {isPlaying ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
            </NeonCircle>
        </div>
    );
}

export default AudioPlayer;