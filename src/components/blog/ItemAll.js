import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  limit,
  startAfter,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import Heading from "../layout/Heading";
import PostAllItem from "../../module/post/PostAllItem";
import Button from "../button/Button";

const POST_PER_PAGE = 6;

const ItemAll = () => {
  const [posts, setPosts] = useState([]);
  //   const [postList, setPostList] = useState([]);
  const [total, setTotal] = useState(0);
  const [lastDoc, setLastDoc] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const colRef = collection(db, "posts");
      const q = query(colRef, where("status", "==", 1), limit(POST_PER_PAGE));

      const querySnapshot = await getDocs(q);
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(results);
      const totalQuery = query(colRef, where("status", "==", 1));
      const totalSnapshot = await getDocs(totalQuery);
      setTotal(totalSnapshot.size);
      if (!querySnapshot.empty) {
        const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastDoc(lastDoc);
      }
    };

    fetchPosts();
  }, []);
  console.log(total);

  //   console.log(lastDoc);
  const handleLoadMorePost = async () => {
    const colRef = collection(db, "posts");
    const q = query(
      colRef,
      where("status", "==", 1),
      startAfter(lastDoc),

      limit(POST_PER_PAGE)
    );

    const querySnapshot = await getDocs(q);
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setPosts([...posts, ...results]);
    if (!querySnapshot.empty) {
      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastDoc(lastDoc);
    }
  };

  //   console.log("postList", posts);
  //   console.log(posts);

  return (
    <div className="mx-5 h-svh">
      <div className="container flex justify-center flex-col">
        <Heading>Tất cả bài viết</Heading>
        <div className="grid-layout">
          {posts.length === 0
            ? posts.map((post) => (
                <PostAllItem key={post.id} data={post}></PostAllItem>
              ))
            : posts.map((post) => (
                <PostAllItem key={post.id} data={post}></PostAllItem>
              ))}
        </div>
      </div>
      {total > posts.length && (
        <div className="mt-10 text-center">
          <Button className="mx-auto w-[200px]" onClick={handleLoadMorePost}>
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default ItemAll;

// import React, { useEffect, useState } from "react";
// import {
//   collection,
//   query,
//   where,
//   limit,
//   startAfter,
//   getDocs,
// } from "firebase/firestore";
// import { db } from "../../firebase/firebase-config";
// import Heading from "../layout/Heading";
// import PostAllItem from "../../module/post/PostAllItem";
// import Button from "../button/Button";

// const POST_PER_PAGE = 3;

// const ItemAll = () => {
//   const [posts, setPosts] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [lastDoc, setLastDoc] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const colRef = collection(db, "posts");
//       const q = query(colRef, where("status", "==", 1), limit(POST_PER_PAGE));

//       const querySnapshot = await getDocs(q);
//       const results = [];
//       querySnapshot.forEach((doc) => {
//         results.push({
//           id: doc.id,
//           ...doc.data(),
//         });
//       });
//       setPosts(results);
//       setTotal(querySnapshot.size);
//       if (!querySnapshot.empty) {
//         const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
//         setLastDoc(lastDoc);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const handleLoadMorePost = async () => {
//     const colRef = collection(db, "posts");
//     const q = query(
//       colRef,
//       where("status", "==", 1),
//       startAfter(lastDoc),
//       limit(POST_PER_PAGE)
//     );

//     const querySnapshot = await getDocs(q);
//     const results = [];
//     querySnapshot.forEach((doc) => {
//       results.push({
//         id: doc.id,
//         ...doc.data(),
//       });
//     });
//     setPosts([...posts, ...results]);
//     if (!querySnapshot.empty) {
//       const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
//       setLastDoc(lastDoc);
//     }
//   };

//   return (
//     <div className="mx-5">
//       <div className="container">
//         <Heading>Tất cả bài viết</Heading>
//         <div className="grid-layout">
//           {posts.map((post) => (
//             <PostAllItem key={post.id} data={post}></PostAllItem>
//           ))}
//         </div>
//       </div>
//       {total > posts.length && (
//         <div className="mt-10 text-center">
//           <Button className="mx-auto w-[200px]" onClick={handleLoadMorePost}>
//             Load more
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ItemAll;
