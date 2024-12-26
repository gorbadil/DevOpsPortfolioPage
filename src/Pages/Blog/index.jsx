import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
import Card from "../../Components/Card";
// import data from "../../assets/data.json";

function Blog() {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <section id="projects">
      <h3>
        Blog <span>Posts</span>
      </h3>
      <div className="project-boxes">
        {data.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default Blog;
