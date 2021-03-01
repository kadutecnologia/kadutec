/**
 * Represents an image.
 * @constructor
 * @param {string} ogUrl - Url to be shared (required)
 * @param {string} type - Content type (optional)
 * @param {string} title - Title to be displayed (required)
 * @param {string} description - Description to be displayed (required)
 * @param {string} image - Image to be displayed to publish (required)
 * @param {string} imageWidth - Image Width (optional)
 * @param {string} imageHeight - Image Height (optional)
 * @param {string} appId - Facebook App Id (required)
 */

const FBComponent = ({
  ogUrl,
  type,
  title,
  description,
  image,
  imageWidth,
  imageHeight,
  appId,
}) => {
  return (
    <>
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="fb:app_id" content={appId} />
    </>
  );
};

FBComponent.defaultProps = {
  type: "website",
  imageWidth: "600",
  imageHeight: "315",
};

export default FBComponent;
