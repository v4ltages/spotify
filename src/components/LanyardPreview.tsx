/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";
import { useAppContext } from "../hooks/useContexts";

export const LanyardPreview = () => {

    const [openLanyardPreview, setLanyardPreview] = useState(false)

    const lanyard = useAppContext()

    if (!lanyard?.spotify) {
        return (
            <div>
                <a className="absolute bottom-0 right-0 m-6 p-2 rounded-lg text-gray-700 transition-all cursor-default z-30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"/></svg>
                </a>
            </div>
        );
    }
    return (
    <>  
        <motion.a animate={{rotate: openLanyardPreview ? 180 : 0}} onClick={ () => setLanyardPreview(!openLanyardPreview)} className="absolute bottom-0 right-0 m-6 p-2 hover:bg-[#000] hover:bg-opacity-60 rounded-lg text-gray-300 hover:text-white cursor-pointer z-30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"/></svg>
        </motion.a>
        {openLanyardPreview && <LanyardJSONPreview/>}
    </>
    );
};

const LanyardJSONPreview = () => {
    const lanyard = useAppContext()

    if (!lanyard?.spotify) {
        return (
            <>
            </>
        );
    }
    const SpotifyArray = [
        <p key="key-1">&quot;track_id&quot;: &quot;{lanyard.spotify.track_id}&quot;,</p>,
        <p key="key-2">&quot;timestamps&quot;:</p>,
        <p key="key-3">&quot;start&quot;: &quot;{lanyard.spotify.timestamps.start}&quot;,</p>,
        <p key="key-4">&quot;end&quot;: &quot;{lanyard.spotify.timestamps.end}&quot;</p>,
        <p key="key-5">&quot;song&quot;: &quot;{lanyard.spotify.song}&quot;,</p>,
        <p key="key-6">&quot;artist&quot;: &quot;{lanyard.spotify.artist}&quot;,</p>,
        <p key="key-7">&quot;album_art_url&quot;: &quot;{lanyard.spotify.album_art_url}&quot;,</p>,
        <p key="key-8">&quot;album&quot;: &quot;{lanyard.spotify.album}&quot;</p>,
    ];
    return (
        <motion.div animate={{ opacity: [0, 100] }} className="absolute -translate-x-6 bottom-0 right-0 mb-20 p-2 w-64 bg-[#000] bg-opacity-60 rounded-lg text-gray-300 z-20 break-words">
            <a href="https://github.com/phineas/lanyard" className="text-lg pb-6 cursor-pointer">Lanyard provided data</a>
            <p>{SpotifyArray}</p>
        </motion.div>
    )
};
