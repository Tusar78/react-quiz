import { useEffect } from "react";
import { getDatabase } from "firebase/database";

const useVideoList = () => {
  useEffect(() => {
    const fetchVideos = async () => {
      const db = getDatabase();
    };

    fetchVideos()
  }, []);
};

export default useVideoList;
