export type lastSongData = GeneratedType;

export interface GeneratedType {
    recenttracks: Recenttracks;
}

export interface Recenttracks {
    track: Track[];
}

export interface Track {
    artist: Artist;
    streamable: string;
    image: Image[];
    mbid: string;
    album: Artist;
    name: string;
    url: string;
    date?: Date;
}

export interface Artist {
    mbid: string;
    "#text": string;
}

export interface Image {
    size: string;
    "#text": string;
}

export interface Attr {
    nowplaying: string;
}

export interface Date {
    uts: string;
    "#text": string;
}

export interface Attr2 {
    user: string;
    totalPages: string;
    page: string;
    total: string;
    perPage: string;
}
