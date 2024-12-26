import { useEffect, useState } from "react";

import data from "../../assets/data.json";

function BlogPost() {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    setPosts(data);
  }, []);
  return (
    <section id="blog">
      <div className="blog-container">
        {posts &&
          posts.map((post, index) => (
            <div className="blog-post" key={index}>
              <img src={post.image} className="blog-image" alt="Post Image" />
              <h4>{post.name}</h4>
              <p>{post.acıklama}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default BlogPost;
