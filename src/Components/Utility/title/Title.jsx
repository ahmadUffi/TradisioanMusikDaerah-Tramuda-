import "./title.css";

function Title({ title1, title2 }) {
  return (
    <div className="title">
      <h1>
        {title1}
        <span>{title2}</span>
      </h1>
    </div>
  );
}

export default Title;
