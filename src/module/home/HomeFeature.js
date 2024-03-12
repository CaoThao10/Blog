import React from "react";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";
import PostFeatureItem from "../post/PostFeatureItem";
// import { db } from "firebase-app/firebase-config";

import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";

const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("hot", "==", true),
      limit(3)
    );
    onSnapshot(queries, (snapshot) => {
      // console.log(snapshot);
      const results = [];
      snapshot.forEach((doc) => {
        // console.log(doc.data());
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(results);
    });
  }, []);
  if (posts.length <= 0) return null;
  // console.log(posts);
  return (
    <HomeFeatureStyles>
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
        <div className="grid-layout">
          {/* <PostFeatureItem></PostFeatureItem> */}
          {/* <PostFeatureItem></PostFeatureItem> */}
          {/* <PostFeatureItem></PostFeatureItem> */}
          {posts.map((post) => (
            <PostFeatureItem key={post.id} data={post}></PostFeatureItem>
          ))}
        </div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
