/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { useAppContext } from "../hooks/useContexts";

const Home: NextPage = () => {
    const lanyard = useAppContext()

    if (!lanyard?.spotify) {
        return (
            <>
                <Head>
                    <title>
                        There is nothing here for you :)
                    </title>
                </Head>
                <div className="w-[100vw] h-[100vh] flex items-center justify-center text-white">
                    Not listening to anything right now.
                </div>
                <a href="https://github.com/v4ltages/spotify" className="absolute bottom-0 right-0 m-6 p-2 hover:bg-gray-300 hover:bg-opacity-20 rounded-lg text-gray-300 hover:text-white transition-all cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
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
                    content={`Currently playing: ${
                        lanyard.spotify.song ? lanyard.spotify.song + " by " + lanyard.spotify.artist : "Nothing"
                    }`}
                />
                <meta name="og:image" content={lanyard.spotify.album_art_url} />
            </Head>
            <div className="absolute w-[100vw] h-[100vh] overflow-hidden opacity-80 z-[10] flex items-center justify-center">
                <img
                    className="w-[100vw] blur-2xl z-[10]"
                    src={lanyard.spotify.album_art_url}
                    alt="Album art but blurred"
                />
            </div>

            <div className="absolute w-[100vw] h-[100vh] flex items-center justify-center text-white z-[20]">
                <div className="p-8 w-[33rem] bg-[#000] bg-opacity-60 rounded-lg flex flex-col items-center justify-start font-karla">
                    <div className="w-full flex flex-row items-center justify-start mb-6">
                        <img
                            src={lanyard.spotify.album_art_url}
                            className="w-[8rem] h-[8rem] rounded-md"
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
                    <div className="w-full h-[0.35rem] rounded-full bg-gray-700 mb-1">
                        <div
                            className="bg-[#65D46E] h-[0.35rem] rounded-full"
                            style={{
                                width: `${(
                                    ((new Date().getTime() - lanyard.spotify.timestamps.start) /
                                        (lanyard.spotify.timestamps.end - lanyard.spotify.timestamps.start)) *
                                    100
                                ).toString()}%`,
                            }}
                        />
                    </div>
                    <div className="w-full h-auto flex flex-row items-center justify-between text-base text-gray-400">
                        <p>{fromMS(new Date().getTime() - lanyard.spotify.timestamps.start)}</p>
                        <p>{fromMS(lanyard.spotify.timestamps.end - lanyard.spotify.timestamps.start)}</p>
                    </div>
                    <a href="https://github.com/v4ltages/spotify" className="absolute bottom-0 right-0 m-6 p-2 hover:bg-gray-300 hover:bg-opacity-20 rounded-lg text-gray-300 hover:text-white transition-all cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;
