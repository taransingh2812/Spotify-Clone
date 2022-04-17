import {useRecoilState} from "recoil";
import {currentTrackIdState} from "../atoms/songAtom";
import useSpotify from "../hooks/useSpotify";
import {useEffect, useState} from "react";

function useSongInfo() {
    const spotifyApi = useSpotify();

    const [currentIdTrack, setCurrentIdTrack] = useRecoilState(currentTrackIdState);
    
    const[songInfo, setSongInfo] = useState(null);

    useEffect (() => {

        const fetchSongInfo = async ()=>{

            if(currentIdTrack)
            {
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
                    {
                        headers:{
                            Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
                        },
                    }
                );
                const res = await trackInfo.json();
                setSongInfo(res);
            }
        };

        fetchSongInfo();
    },[currentIdTrack, spotifyApi]);



    return songInfo;
}

export default useSongInfo