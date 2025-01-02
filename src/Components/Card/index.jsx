import PropTypes from "prop-types";

Card.propTypes = {
  post: PropTypes.object.isRequired,
};

function Card({ post }) {
  return (
    <div className="project-box">
      <img className="project-info" src={post.image} alt="" />
      <div className="project-info">
        <h4>{post.name}</h4>
        <p>{post.desc}</p>
      </div>
      <div className="buttons">
        <div>
          <a target="_blank" href={post.gitMarkdownEn} className="btn">
            Github/En
          </a>
          <a target="_blank" href={post.mediumEn} className="btn">
            Medium/En
          </a>
        </div>

        <div>
          <a target="_blank" href={post.gitMarkdownTr} className="btn">
            Github/Tr
          </a>
          <a target="_blank" href={post.mediumTr} className="btn">
            Medium/Tr
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
