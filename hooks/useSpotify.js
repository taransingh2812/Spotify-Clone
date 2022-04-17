import { signIn, useSession } from "next-auth/react";
import {useEffect} from "react";
import spotifyApi from "../lib/spotify";
// import SpotifyWebApi from "spotify-web-api-node";

// const spotifyApi = new SpotifyWebApi({ 
//     clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
//     clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
//     redirectUri: 'http://localhost:3000/api/auth/callback/spotify',
// });

function useSpotify() {
    const {data:session, status} = useSession();
 
    useEffect (() => {
        if(session){
            if(session.error === "RefreshAccessTokenError"){
                signIn();
            }
            spotifyApi.setAccessToken(session.user.accessToken);
        }

    },[session]);

  return spotifyApi;
}

export default useSpotify;