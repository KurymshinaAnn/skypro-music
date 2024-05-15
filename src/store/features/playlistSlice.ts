import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { trackType } from "../../types";
import { RootState } from "@reduxjs/toolkit/query";

type PlaylistStateType = {
  // track: null | trackType;

  playList: trackType[];
  currentTrack: null | trackType;
  isPlaying: boolean;
  isShuffled: boolean;
  shuffledPlaylist: trackType[];

  isSearch: boolean;
  filteredPlaylist: trackType[];
  activeFilters: {
    authors: Array<string>;
    years: null | string;
    genres: Array<string>;
    searchValue: string;
  };
};

type SetCurrentTrackType = {
  currentTrack: trackType;
  playList: trackType[];
};

const initialState: PlaylistStateType = {
  // track: null,

  playList: [],
  currentTrack: null,
  isPlaying: false,
  isShuffled: false,
  shuffledPlaylist: [],

  isSearch: false,
  filteredPlaylist: [],
  activeFilters: {
    authors: [],
    years: null,
    genres: [],
    searchValue: "",
  },
};

function actualPlaylist(state: PlaylistStateType) {
  return state.isShuffled ? state.shuffledPlaylist : state.playList;
}

function trackIndex(playList: trackType[], track: trackType | null): number {
  const index = playList.findIndex((val) => val.id === track?.id);
  return index;
}

const PlaylistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlayList: (state, action: PayloadAction<trackType[]>) => {
      state.playList = action.payload;
      state.filteredPlaylist = state.playList;
      state.shuffledPlaylist = [...action.payload].sort(
        () => 0.5 - Math.random()
      );
    },
    setCurrentTrack: (state, action: PayloadAction<SetCurrentTrackType>) => {
      state.currentTrack = action.payload.currentTrack;
    },
    nextTrack: (state) => {
      const playList = actualPlaylist(state);
      const currentTrackIndex = trackIndex(playList, state.currentTrack);
      if (currentTrackIndex !== -1 && currentTrackIndex < playList.length - 1) {
        const newTrack = playList[currentTrackIndex + 1];
        state.currentTrack = newTrack;
      }
    },
    previousTrack: (state) => {
      const playList = actualPlaylist(state);
      const currentTrackIndex = trackIndex(playList, state.currentTrack);
      if (currentTrackIndex !== -1 && currentTrackIndex !== 0) {
        const previousTrack = playList[currentTrackIndex - 1];
        state.currentTrack = previousTrack;
      }
    },
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
        searchValue:
          action.payload.searchValue || state.activeFilters.searchValue,
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
        return isAuthors && isGenres;
      });
    },
  },
});

export const {
  setPlayList,
  setCurrentTrack,
  nextTrack,
  previousTrack,
  shuffle,
  setActiveFilter,
} = PlaylistSlice.actions;
export const playlistReducer = PlaylistSlice.reducer;
