import axios from "axios";
import React from "react";
import { useState, useEffect, useRef } from "react";

//reference https://www.freecodecamp.org/news/how-to-use-axios-with-react/
//reference https://www.codingbeautydev.com/blog/react-get-input-value-on-button-click
//reference : https://axios-http.com/docs/example
export default function Axios20240515() {
  const [post, setPost] = useState(null);
  const inputPostIdRef = useRef(null);
  const [postId, setPostId] = useState("");

  async function updatePostContent(postId) {
    const postURL = "https://jsonplaceholder.typicode.com/posts/" + postId;
    console.log("postURL == " + postURL);
    try {
      axios
        .get(postURL)
        .then(function (response) {
          // handle success
          setPost(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log("axios catch");
          console.log(error);
        })
        .finally(function () {
          console.log("finally");
          // always executed
        });
    } catch (error) {
      console.log("try Catch");
      console.log(error);
    }
  }
  function handleClick(getType) {
    let userInputId = "";

    userInputId =
      getType === "useState" ? postId : inputPostIdRef.current.value;

    updatePostContent(userInputId);
  }

  const handleInputChange = (event) => {
    setPostId(event.target.value);
  };

  // method 1
  useEffect(() => {
    const deFaultPostId = 10;
    updatePostContent(deFaultPostId);
  }, []);

  if (!post) return null;

  return (
    <div>
      <b>Title</b>
      <br />
      <h1>
        {post.title} &nbsp; (ID:{post.id})
      </h1>
      <br />
      <b>Body Part</b>
      <br />
      <p>{post.body}</p>
      <br />
      Input Post Id (by useState)&nbsp;
      <input
        type="text"
        name="txtPostIdUseState"
        value={postId}
        onChange={handleInputChange}
      />
      &nbsp;
      <br />
      Input Post Id (by ref)&nbsp;
      <input ref={inputPostIdRef} type="text" name="txtPostIdUseRef" />
      &nbsp;
      <br />
      <br />
      <button type="button" onClick={() => handleClick("useState")}>
        Get Data by Status
      </button>
      &nbsp;
      <button type="button" onClick={() => handleClick("useRef")}>
        Get Data by Ref
      </button>
    </div>
  );
}
