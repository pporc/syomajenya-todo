export const Tablink = ({ title, date, index, select }) => {
  const onClick = (e) => {
    select(index);
    e.preventDefault();
  };

  return (
    <div className="tab">
      <a
        href="#"
        onClick={onClick}
        className="day"
      >
        {title}
      </a>
      <a
        href="#"
        onClick={onClick}
        className="date"
      >
        {date}
      </a>
    </div>
  );
};
