import { FC } from 'react';
import { useAppContext } from "../hooks/useContexts";

const StatusIcon:FC<{IconColor: string}> = ({IconColor}) => (
    <div className={`z-10 m-10 p-2 -translate-x-10 translate-y-[2px] absolute bottom-0 right-0 rounded-[100%] w-5 h-5 border ${IconColor}`}/>
);

export const DiscordStatus = () => {
    const lanyard = useAppContext()

    switch (lanyard?.discord_status) {
        case "idle":
        return (
            <StatusIcon IconColor='bg-yellow-600 border-yellow-600'/>
        );
        case "online":
        return (
            <StatusIcon IconColor='border-emerald-500 bg-emerald-500'/>
        );
        case "dnd":
        return (
            <StatusIcon IconColor='border-red-700 bg-red-700'/>
        );
        default:
        return (
            <StatusIcon IconColor='border-gray-700 bg-gray-700'/>
        );
    };
};
