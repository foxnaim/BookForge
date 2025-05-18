import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';
import BookCard from '../components/BookCard';
import Loader from '../components/Loader';

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [books, setBooks] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
    if (status === 'authenticated' && session?.user?.email) {
      fetch(`/api/books?userId=${session.user.email}`)
        .then(res => res.json())
        .then(data => {
          setBooks(data);
          setLoading(false);
        });
    }
  }, [status, session, router]);

  if (status === 'loading' || loading) return <Loader />;

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Мои книги</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {books.map((book, idx) => (
            <BookCard key={idx} title={book.title} status={book.status} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
} 
