import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://api.quotable.io/random/")
      .then((response) => {
        // handle success
        setData(response.data.content.toLowerCase());
      })
      .catch((error) => {
        // handle error
        setError(error.message);
      });
  }, []);

  const refetch = () => {
    axios
      .get("http://api.quotable.io/random/")
      .then((response) => {
        // handle success
        setData(response.data.content.toLowerCase());
      })
      .catch((error) => {
        // handle error
        setError(error.message);
      });
  };

  return { data, error, refetch };
};
