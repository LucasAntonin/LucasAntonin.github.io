import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import NeonCircle from "./NeonCircle";

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="hidden md:block relative inline-flex items-center cursor-pointer font-extrabold text-blue-800 text-6xl">
      <NeonCircle>
        <div class="hidden">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=eQnq3LUS990"
            playing={isPlaying}
            volume={0.3}
            height={80}
            width={80}
            loop={true}
            controls={false}
            playIcon
            config={{
              youtube: {
                playerVars: {
                  showinfo: 1,
                  controls: 0,
                  fs: 0,
                  modestbranding: 1,
                },
              },
            }}
          />
        </div>
        <div onClick={() => togglePlay()}>
          {isPlaying ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
        </div>
      </NeonCircle>
    </div>
  );
}

export default AudioPlayer;
