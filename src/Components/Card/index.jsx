import PropTypes from "prop-types";

Card.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    en: PropTypes.shape({
      desc: PropTypes.string.isRequired,
      git: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
    }),
    tr: PropTypes.shape({
      desc: PropTypes.string.isRequired,
      git: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
    }),
  }),
};

function Card({ post }) {
  const links = ["git", "medium"];
  if (post.type !== "Blog") {
    return null;
  }
  return (
    <div className="project-box">
      <div className="badge">{post.domain}</div>
      <img className="project-info" src={post.image} alt="" />
      <div className="project-info">
        <p>{post.en.desc}</p>
      </div>
      <div className="buttons">
        <div>
          {links.map((link) => {
            if (post.en[link] === "") return null;
            return (
              <a
                key={"en" + link}
                target="_blank"
                href={post.en[link]}
                className="btn"
              >
                {link === "git" ? "Github/En" : "Medium/En"}
              </a>
            );
          })}
        </div>

        <div>
          {links.map((link) => {
            if (post.tr[link] === "") return null;
            return (
              <a
                key={"en" + link}
                target="_blank"
                href={post.tr[link]}
                className="btn"
              >
                {link === "git" ? "Github/Tr" : "Medium/Tr"}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
