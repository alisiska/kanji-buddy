import { Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link, Outlet } from 'react-router-dom';

export default function KnowledgeBank() {
  const textBooks = [
    {
      title: 'Tobira Advanced',
      description: 'Intermediate Japanese',
      img: 'tobira-advanced-cover',
      id: 'tobira-advanced',
    },
    {
      title: 'Genki 1',
      description: 'Beginner Japanese',
      img: 'genki1-cover',
      id: 'genki-one',
    },
    {
      title: 'Minna no Nihongo 1',
      description: 'Beginner Japanese',
      img: 'minna1-cover',
      id: 'minna-no-nihongo-one',
    },
  ];
  return (
    <div>
      <h2 className=''>Knowledge Bank</h2>
      <h4 className='mt-4'>Choose the book you want to work with: </h4>
      <div className='flex items-center justify-start flex-wrap gap-4 mt-4'>
        {textBooks.map((book) => (
          <Card
            variant='outlined'
            sx={{ width: 300, height: 500, marginBottom: 2, cursor: 'pointer' }}
            key={book.title}
          >
            <CardContent>
              <div key={book.title} style={{ marginBottom: '1rem' }}>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
              </div>

              <img
                src={`/assets/${book.img.toLowerCase()}.png`}
                alt={book.title}
                style={{ width: '100%', height: '335px' }}
              />
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button
                to={`/bank/books/${book.id}`}
                variant='contained'
                component={Link}
                size='small'
              >
                Open
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
