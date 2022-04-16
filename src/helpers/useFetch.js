import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://api.quotable.io/random/")
      .then((response) => {
        // handle success
        setData(response.data);
      })
      .catch((error) => {
        // handle error
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const refetch = () => {
    axios
      .get("http://api.quotable.io/random/")
      .then((response) => {
        // handle success
        setData(response.data);
      })
      .catch((error) => {
        // handle error
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, error, loading, refetch };
};
