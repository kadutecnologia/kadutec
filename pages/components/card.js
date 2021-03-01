function Card({ title, description, btnText, styleName, children }) {
  return (
    <>
      <div className={`card image ${styleName}`}>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
        <button title={title}>{btnText}</button>
      </div>
    </>
  );
}

export default Card;
