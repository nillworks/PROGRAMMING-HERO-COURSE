const Cards = ({ data }) => {
  const { title, body } = data;

  return (
    <div className="border px-4 py-8 space-y-3">
      <h2>Title: {title}</h2>
      <h4>Body:{body}</h4>
    </div>
  );
};

export default Cards;
