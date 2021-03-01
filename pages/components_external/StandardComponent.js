/**
 * Represents a component.
 * @constructor
 * @param {string} properties - Properties
 */

const StandardComponent = ({ properties }) => {
  const style = {
    someStyle: "someStyle",
  };

  return <div className="StandardComponent" style={style}></div>;
};

/* StandardComponent.defaultProps = {
  properties: "defaultProperty",
}; */

export default StandardComponent;
