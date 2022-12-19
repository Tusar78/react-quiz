import { getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect } from "react";

const useVideoList = () => {
  useEffect(() => {
    const fetchVideos = async () => {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(videoRef, orderByKey());
    };

    fetchVideos();
  }, []);
};

export default useVideoList;
