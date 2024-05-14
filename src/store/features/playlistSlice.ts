import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { trackType } from "../../types";

type PlaylistStateType = {
  playList: trackType[];
  currentTrack: null | trackType;
  isPlaying: boolean;
  isShuffled: boolean;
  shuffledPlaylist: trackType[];
};

type SetCurrentTrackType = {
  currentTrack: trackType;
  playList: trackType[];
};

const initialState: PlaylistStateType = {
  playList: [],
  currentTrack: null,
  isPlaying: false,
  isShuffled: false,
  shuffledPlaylist: [],
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
    setCurrentTrack: (state, action: PayloadAction<SetCurrentTrackType>) => {
      state.currentTrack = action.payload.currentTrack;
      state.playList = action.payload.playList;
      state.shuffledPlaylist = [...action.payload.playList].sort(
        () => 0.5 - Math.random()
      );
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
  },
});

export const { setCurrentTrack, nextTrack, previousTrack, shuffle } =
  PlaylistSlice.actions;
export const playlistReducer = PlaylistSlice.reducer;
