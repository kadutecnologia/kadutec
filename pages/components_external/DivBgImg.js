/**
 * Represents a <div> component with a Background Image with
 * opacity and blur option.
 * You can style the class DivBgImg or add additional classes.
 * Styles Size|Cover and Position|Center applied automatic.
 * @constructor
 * @param {string} bgUrl - Image URL (required)
 * @param {string} styleName - Additional className(s) (optional)
 * @param {string} children - Any contant inside this div (optional)
 */

function DivBgImg({ bgUrl, styleName, children }) {
  const style = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url('" + bgUrl + "')",
  };

  return (
    <div className={`DivBgImg ${styleName}`} style={style}>
      {children}
    </div>
  );
}

export default DivBgImg;
