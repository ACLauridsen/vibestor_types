export interface Track {
    name: string;
    artistName: string;
    previewURL: string;
    imageURL: string;
    albumName: string;
    albumId: string;
    isrc: string;
    dataSource: DataSource;
}
export interface Tracks {
    [trackId: string]: Track;
}
export interface Playlist {
    name: string;
    created: string;
    genre: string;
    genreId: string | null;
    tracks: Tracks;
}
export interface SessionFilters {
    genre?: string;
}
export interface Genre {
    name: string;
    id: string | null;
}
export interface Playlists {
    [name: string]: Playlist;
}
export interface UserPlaylists {
    [uid: string]: Playlists;
}
export declare enum StorageType {
    LOCAL = "LOCAL",
    FIREBASE = "FIREBASE"
}
export declare enum DataSource {
    NAPSTER = "NAPSTER",
    SPOTIFY = "SPOTIFY"
}
