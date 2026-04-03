import { Link } from 'react-router';

const Cards = ({ data }) => {
  const { id, title, body } = data;

  return (
    <div className="border px-4 py-8 space-y-3">
      <h2>Title: {title}</h2>
      <h4>Body:{body}</h4>
      <Link to={`${id}`} className="text-green-500">
        Show User
      </Link>
    </div>
  );
};

export default Cards;
