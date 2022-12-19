import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [localVideos, setLocalVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(videoRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // Request firebase database
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
        } else {
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchVideos();
  }, []);
};

export default useVideoList;
