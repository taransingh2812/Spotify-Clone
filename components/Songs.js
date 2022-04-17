import {useRecoilValue} from "recoil";
import {playlistState} from "../atoms/playlistAtom";
import Song from "./Song";

function Songs() {
    const playlists = useRecoilValue(playlistState);
  return (
    <div className="text-white px-8 flex flex-col space-y-1 pb-28 ">
        {playlists?.tracks.items.map((track,i)=>(
            <Song key={track.track.id} track={track} order={i}/>
        ))}
    </div>
  )
}

export default Songs