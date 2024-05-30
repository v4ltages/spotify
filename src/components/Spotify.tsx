/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useAppContext } from "../hooks/useContexts";
import Head from "next/head";

export const Spotify = () => {
    const lanyard = useAppContext()
    let [currentTime, setCurrentTime] = useState(new Date().getTime())

    setInterval(() => {
        setCurrentTime(new Date().getTime());
    }, 1000);

    if (!lanyard?.spotify) {
        if (lanyard?.discord_status == 'offline') {
            return (
                <>
                    <Head>
                        <title>
                            Voltages is not listening to anything since he is offline.
                        </title>
                    </Head>
                    <div className="w-[100vw] h-[100vh] flex items-center justify-center text-white p-8">
                        Voltages is offline so he cannot be listening to anything right now.
                    </div>
                </>
            );
        }
        return (
            <>
                <Head>
                    <title>
                        Voltages is not listening to anything.
                    </title>
                </Head>
                <div className="w-[100vw] h-[100vh] flex items-center justify-center text-white p-8">
                    Voltages is just not listening to anything right now.
                </div>
            </>
        );
    };

    function fromMS(ms: number) {
        const totalSeconds = ms / 1000;
        const minutes = (~~(totalSeconds / 60)).toString();
        const seconds = (~~(totalSeconds % 60)).toString();
        return minutes + ":" + seconds.padStart(2, "0");
    }

    return (
        <>
            <Head>
                <title>
                    Listening to: {lanyard.spotify.song} by {lanyard.spotify.artist}{" "}
                </title>
                <meta name="theme-color" content="#1DB954" />
                <meta name="og:title" content={`spotify.voltages.me`} />
                <meta
                    name="og:description"
                    content={`Voltages is currently playing: ${
                        lanyard.spotify.song ? lanyard.spotify.song + " by " + lanyard.spotify.artist : "Nothing"
                    }`}
                />
                <meta name="og:image" content={lanyard.spotify.album_art_url!} />
            </Head>
            <div className="absolute w-[100vw] h-[100vh] overflow-hidden opacity-80 z-[10] flex items-center justify-center">
                <img
                    className="w-[100vw] blur-2xl z-[10]"
                    src={lanyard.spotify.album_art_url!}
                    alt="Album art but blurred"
                />
            </div>

            <div className="absolute w-[100vw] h-[100vh] flex items-center justify-center text-white z-[20]">
                <div className="p-8 w-[33rem] bg-[#000] bg-opacity-60 rounded-lg flex flex-col items-center justify-start font-karla">
                    <div className="w-full flex flex-row items-center justify-start mb-6">
                        <img
                            src={lanyard.spotify.album_art_url!}
                            className="w-[8rem] h-[8rem]"
                            alt="Album Art"
                        />
                        <div className="ml-6 flex flex-col items-start justify-center">
                            <a
                                href={`https://open.spotify.com/track/${lanyard.spotify.track_id}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xl text-white font-semibold"
                            >
                                {lanyard.spotify.song}
                            </a>
                            <h2 className="text-lg text-gray-300 font-normal">{lanyard.spotify.artist}</h2>
                            <h3 className="text-lg text-gray-300 font-normal italic">in {lanyard.spotify.album}</h3>
                        </div>
                    </div>
                    <div className="group w-full h-[0.35rem] rounded-full bg-gray-700 mb-1">
                        <div
                            className="bg-gray-300 group-hover:bg-[#65D46E] h-[0.35rem] rounded-full cursor-not-allowed"
                            style={{ width: `${(((currentTime - lanyard.spotify.timestamps.start) / (lanyard.spotify.timestamps.end - lanyard.spotify.timestamps.start)) * 100).toString()}%` }}
                        />
                    </div>
                    <div className="w-full h-auto flex flex-row items-center justify-between text-base text-gray-400">
                        <p>{fromMS(currentTime - lanyard.spotify.timestamps.start)}</p>
                        <p>{fromMS(lanyard.spotify.timestamps.end - lanyard.spotify.timestamps.start)}</p>
                    </div>
                </div>
            </div>
        </>
    )
};