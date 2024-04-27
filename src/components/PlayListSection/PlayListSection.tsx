import { getTracks } from "@/api/tracks";
import styles from "./PlayListSection.module.css";

import PlayListItem from "@/components/PlayListItem/PlayListItem";

async function PlayListSection() {
  let playlistSectionArray: trackType[];
  try {
    playlistSectionArray = await getTracks();
  } catch (error) {
    console.error("Произошла ошибка при получении списка треков:", error);
    playlistSectionArray = [];
  }

  return (
    <>
      <div className={styles.contentPlaylist}>
        {playlistSectionArray.map((item, index) => (
          <PlayListItem key={index} item={item}></PlayListItem>
        ))}
      </div>
    </>
  );
}
export default PlayListSection;
