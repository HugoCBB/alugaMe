import React from 'react';
import { Button } from './ui/Button';

interface BookCardProps {
    title: string;
    author: string;
    price: string;
    imageUrl: string;
    genre: string;
}

export const BookCard: React.FC<BookCardProps> = ({ title, author, price, imageUrl, genre }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-coffee-light">
            <div className="h-48 overflow-hidden bg-gray-200 relative">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-coffee-medium text-coffee-dark text-xs font-bold px-2 py-1 rounded-full">
                    {genre}
                </span>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-coffee-dark truncate">{title}</h3>
                <p className="text-sm text-gray-600 mb-2">{author}</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-accent">{price}</span>
                    <Button size="sm" variant="outline">Ver Detalhes</Button>
                </div>
            </div>
        </div>
    );
};
