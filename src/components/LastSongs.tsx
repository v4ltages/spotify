'use client';
import { useEffect, useState } from "react";
import { lastSongData } from "../types/lastfmapi";

export const LastSongs = () => {
    const [lastSongData, setLastSongData] = useState<lastSongData | null>(null);
    const [errorStatus, setError] = useState(false);

    useEffect(() => {
        fetch("https://findstorage.voltag.es", { 
                next: { revalidate: 120 }
            })
           .then((res) => res.json())
           .then((data) => setLastSongData(data))
            .catch((error) => {
                console.error(error);
                setError(true);
            });
    }, []);

    if (errorStatus) {
        return (
            <p>Failed to fetch last listened songs :(</p>
        );
    } else if (lastSongData) {
        return (
            <div className="flex w-[30rem] px-2 flex-col relative">
                <h1 className="text-lg pb-4 text-white font-semibold">Last listened songs</h1>
                <div className="grid grid-cols-3 gap-4 justify-between">
                    {lastSongData.recenttracks.track.slice(1).map((track) => (
                        <div key={track.mbid} className="">
                            <img src={track.image[2]["#text"]} alt={track.name} className="w-24 h-24"/>
                            <div>
                                <a href={track.url}>{track.name}</a>
                                <p className="text-gray-300">{track.artist["#text"]}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        );
    } else {
        return (
            <svg className="w-8 h-8 invert" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path></svg>
        );
    }
};
