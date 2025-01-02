import PropTypes from "prop-types";

Card.propTypes = {
  post: PropTypes.object.isRequired,
};

function Card({ post }) {
  const enLinks = ["gitMarkdownEn", "mediumEn"];
  const trLinks = ["gitMarkdownTr", "mediumTr"];
  return (
    <div className="project-box">
      <img className="project-info" src={post.image} alt="" />
      <div className="project-info">
        <h4>{post.name}</h4>
        <p>{post.desc}</p>
      </div>
      <div className="buttons">
        <div>
          {enLinks.map((link) => {
            if (post[link] === "") return null;
            return (
              <a key={link} target="_blank" href={post[link]} className="btn">
                {link === "gitMarkdownEn" ? "Github/En" : "Medium/En"}
              </a>
            );
          })}
        </div>

        <div>
          {trLinks.map((link) => {
            if (post[link] === "") return null;
            return (
              <a key={link} target="_blank" href={post[link]} className="btn">
                {link === "gitMarkdownTr" ? "Github/Tr" : "Medium/Tr"}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
