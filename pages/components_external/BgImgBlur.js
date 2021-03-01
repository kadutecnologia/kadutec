/**
 * Represents a <div> component with a Background Image with
 * opacity and blur option.
 * You can style the class DivBgImg or add additional classes.
 * Styles Size|Cover and Position|Center applied automatic.
 * No children elements.
 * @constructor
 * @param {string} bgUrl     - Image URL (required)
 * @param {string} opacity   - Image Opacity (optional)
 * @param {string} blur      - Image Blur (optional)
 * @param {string} styleName - Additional className(s) (optional)
 */

function BgImgBlur({ bgUrl, opacity, blur, styleName }) {
  const style = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    filter: "blur(" + blur + "px) opacity(" + opacity + "%)",
    backgroundImage: "url('" + bgUrl + "')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div className={`BgImgBlur ${styleName}`} style={style}></div>;
}

BgImgBlur.defaultProps = {
  opacity: "100",
  blur: "0",
  styleName: "",
};

export default BgImgBlur;

/**
 * EXAMPLE
  <div style={{ width: "600px", height: "315px" }}>
    <BgImgBlur
      bgUrl="https://rauppservices.com/assets/img/FBShareB.jpg"
      blur="0"
      opacity="50"
    />
  </div>
 */
