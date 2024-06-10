import { trackType } from "@/types";

type TrackKeys = Pick<trackType, "author" | "release_date" | "genre">;

export function getListItem(item: keyof TrackKeys, trackList: trackType[]) {
  const listItem: string[] = [];
  trackList?.forEach((track) => {
    if (listItem.includes(track[item]) || track[item] === "-") return;
    listItem.push(track[item]);
  });
  return listItem.sort();
}
