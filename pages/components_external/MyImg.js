/**
 * Represents an image.
 * @constructor
 * @param {string} imgUrl - Image Url
 * @param {string} width - Width (any value)
 * @param {string} hidth - Height (percentage)
 */

const MyImg = ({ imgUrl, height, width }) => {
  const style = {
    top: "0",
    left: "0",
    width: width,
    height: "0",
    paddingBottom: height,
    backgroundImage: "url('" + imgUrl + "')",
  };

  return <div className="image" style={style}></div>;
};

MyImg.defaultProps = {
  height: "100%",
  width: "100%",
};

export default MyImg;
