import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { trackType } from "../../types";

type PlaylistStateType = {
  playList: trackType[];
  currentTrack: null | trackType;
  isPlaying: boolean;
  isShuffled: boolean;
  shuffledPlaylist: trackType[];

  isSearch: boolean;
  filteredPlaylist: trackType[];
  favoritePlaylist: trackType[];
  activeFilters: {
    authors: Array<string>;
    years: null | string;
    genres: Array<string>;
    searchValue: null | string;
  };

  user: UserType;
};

type SetCurrentTrackType = {
  currentTrack: trackType;
  playList: trackType[];
};

type UserType = {
  username: string | null;
  refresh: string | null;
  access: string | null;
};

const initialState: PlaylistStateType = {
  playList: [],
  currentTrack: null,
  isPlaying: false,
  isShuffled: false,
  shuffledPlaylist: [],

  isSearch: false,
  filteredPlaylist: [],
  favoritePlaylist: [],
  activeFilters: {
    authors: [],
    years: null,
    genres: [],
    searchValue: null,
  },

  user: {
    username: null,
    refresh: null,
    access: null,
  },
};

function changeTrack(direction: number) {
  return (state: PlaylistStateType) => {
    const currentTracks = state.isShuffled
      ? state.shuffledPlaylist
      : state.playList;
    let newIndex =
      currentTracks.findIndex((item) => item.id === state.currentTrack?.id) +
      direction;

    newIndex = (newIndex + currentTracks.length) % currentTracks.length;

    state.currentTrack = currentTracks[newIndex];
  };
}

const PlaylistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user.username = action.payload.username;
      state.user.refresh = action.payload.refresh;
      state.user.access = action.payload.access;
    },
    setPlayList: (state, action: PayloadAction<trackType[]>) => {
      state.playList = action.payload;
      state.filteredPlaylist = state.playList;
      state.shuffledPlaylist = [...action.payload].sort(
        () => 0.5 - Math.random()
      );
    },
    setFavoritePlaylist: (state, action: PayloadAction<trackType[]>) => {
      state.favoritePlaylist = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<SetCurrentTrackType>) => {
      state.currentTrack = action.payload.currentTrack;
    },
    removeFavorite: (state, action: PayloadAction<trackType>) => {
      state.favoritePlaylist = state.favoritePlaylist.filter(
        (track) => track.id != action.payload.id
      );
    },
    addFavorite: (state, action: PayloadAction<trackType>) => {
      state.favoritePlaylist = [...state.favoritePlaylist, action.payload];
    },
    nextTrack: changeTrack(1),
    previousTrack: changeTrack(-1),
    shuffle: (state) => {
      state.isShuffled = !state.isShuffled;
    },
    setActiveFilter: (
      state,
      action: PayloadAction<{
        authors?: string[];
        years?: string;
        genres?: string[];
        searchValue?: string;
      }>
    ) => {
      state.activeFilters = {
        authors: action.payload.authors || state.activeFilters.authors,
        years: action.payload.years || null,
        genres: action.payload.genres || state.activeFilters.genres,
        searchValue: action.payload.searchValue || null,
      };
      state.filteredPlaylist = state.playList.filter((track) => {
        const isAuthors =
          state.activeFilters.authors.length > 0
            ? state.activeFilters.authors.includes(track.author)
            : true;
        const isGenres =
          state.activeFilters.genres.length > 0
            ? state.activeFilters.genres.includes(track.genre)
            : true;
        const isSearch = state.activeFilters.searchValue
          ? track.name
              .toLowerCase()
              .includes(state.activeFilters.searchValue.toLowerCase())
          : true;
        return isAuthors && isGenres && isSearch;
      });
    },
  },
});

export const {
  setUser,
  setPlayList,
  setCurrentTrack,
  nextTrack,
  previousTrack,
  shuffle,
  setActiveFilter,
  setFavoritePlaylist,
  removeFavorite,
  addFavorite,
} = PlaylistSlice.actions;
export const playlistReducer = PlaylistSlice.reducer;
