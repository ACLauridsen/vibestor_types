export interface Track {
    name: string
    artistName: string
    previewURL: string
    albumName: string
    albumId: string
    isrc: string
}

export interface Tracks {
    [trackId: string]: Track
}

export interface Playlist {
    name: string
    created: string
    dataSource: DataSource
    genre: string
    genreId: string | null
    tracks: Tracks
}

export interface Genre {
    name: string
    id: string | null
}

export interface Playlists {
    [name: string]: Playlist
}

export interface UserPlaylists {
    [uid: string]: Playlists
}

export enum StorageType {
    LOCAL = "LOCAL",
    FIREBASE = "FIREBASE",
}

export enum DataSource {
    NAPSTER = "NAPSTER",
    SPOTIFY = "SPOTIFY",
}
