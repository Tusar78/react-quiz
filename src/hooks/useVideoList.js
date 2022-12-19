import { getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = () => {
  const [loading,  setLoading] = useState(true);
  const [error,  setError] = useState(false);
  useEffect(() => {
    const fetchVideos = async () => {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(videoRef, orderByKey());

      try {

      } catch (err) {
        console.log(err);        
      }
    };

    fetchVideos();
  }, []);
};

export default useVideoList;
