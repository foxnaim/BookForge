import React, { createContext, useContext, useState } from 'react';

export type Chapter = {
  title: string;
  content: string;
};

export type Book = {
  _id?: string;
  title: string;
  genre: string;
  coverUrl: string;
  chapters: Chapter[];
  status: 'в процессе' | 'завершено' | 'оплачено';
  userId: string;
  createdAt?: string;
  updatedAt?: string;
};

type BookContextType = {
  book: Book | null;
  setBook: (book: Book) => void;
  resetBook: () => void;
};

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: React.ReactNode }) {
  const [book, setBook] = useState<Book | null>(null);
  const resetBook = () => setBook(null);

  return (
    <BookContext.Provider value={{ book, setBook, resetBook }}>
      {children}
    </BookContext.Provider>
  );
}

export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error('useBook must be used within BookProvider');
  return context;
};
