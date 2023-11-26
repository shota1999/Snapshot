/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.scss";
import { Gallery } from "./components/Gallery/Gallery";
import { Header } from "./components/Header/Header";

const accessKey = "v5WoSDDHpb5kc-AoZk9dUqWzHFu--GZA3WNHrvIxIIA";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [res, setRes] = useState([]);
  const [CategoryList, setCategoryList] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomImages = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=24`
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching random images:", error);
      return [];
    }
  };

  const fetchInputRequest = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=${accessKey}&per_page=24`
      );
      setRes(response.data.results);
    } catch (error) {
      setRes([]);
    }
  };

  const fetchCategoryList = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${CategoryList}&client_id=${accessKey}&per_page=24`
      );
      setRes(response.data.results);
    } catch (error) {
      setRes([]);
   
     
    }
  };

  useEffect(() => {
    const displayRandomImages = async () => {
      const randomImages = await fetchRandomImages();
      setRes(randomImages);
      setIsLoading(false); 
    };

    displayRandomImages();
  }, []);

  const submit = () => {
    fetchInputRequest();
    setInputValue("");
  };

  const submitCategoryList = (category: string) => {
    setCategoryList(category);
    fetchCategoryList();
  };

  useEffect(() => {
    submitCategoryList(CategoryList);
  }, [CategoryList]);

  return (
    <div className={styles.container}>
      <Header
        setInputValue={setInputValue}
        submit={submit}
        inputValue={inputValue}
        submitCategoryList={submitCategoryList}
        setCategoryList={setCategoryList}
      />
    
      {!isLoading && res.length === 0 ? (
        <p>No images found</p>
      ) : (
        <Gallery res={res} />
      )}
    </div>
  );
};


