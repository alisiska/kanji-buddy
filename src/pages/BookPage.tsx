import { useParams } from 'react-router-dom';

export default function BookPage() {
  const { id } = useParams<{ id: string }>(); // id from URL

  return (
    <div>
      <h2>Book Page</h2>
      <p>Book ID: {id}</p>
      {/* You can fetch the book data here using the id */}
    </div>
  );
}
