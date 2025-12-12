import React, { useState } from 'react';
import { BookCard } from '../components/BookCard';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Filter, X } from 'lucide-react';

// Mock Data
const BOOKS = [
    { id: 1, title: 'Dom Casmurro', author: 'Machado de Assis', price: 'R$ 25,00', genre: 'Clássicos', imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: '1984', author: 'George Orwell', price: 'R$ 30,00', genre: 'Ficção Científica', imageUrl: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', price: 'R$ 20,00', genre: 'Infantil', imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'A Revolução dos Bichos', author: 'George Orwell', price: 'R$ 22,00', genre: 'Clássicos', imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Harry Potter e a Pedra Filosofal', author: 'J.K. Rowling', price: 'R$ 45,00', genre: 'Fantasia', imageUrl: 'https://images.unsplash.com/photo-1626618012641-bf8ca5e3fa68?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', price: 'R$ 60,00', genre: 'Fantasia', imageUrl: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=800' },
];

const CATEGORIES = ['Todos', 'Clássicos', 'Ficção Científica', 'Fantasia', 'Romance', 'Terror', 'Técnicos'];

export const MarketplacePage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [showFilters, setShowFilters] = useState(false);

    const filteredBooks = BOOKS.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todos' || book.genre === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Mobile Filter Toggle */}
                <div className="md:hidden mb-4">
                    <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        {showFilters ? <X size={20} /> : <Filter size={20} />}
                        {showFilters ? 'Fechar Filtros' : 'Filtrar Livros'}
                    </Button>
                </div>

                {/* Sidebar Filters */}
                <aside className={`
          w-full md:w-64 flex-shrink-0 
          ${showFilters ? 'block' : 'hidden md:block'}
        `}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-coffee-light sticky top-24">
                        <h3 className="text-lg font-bold text-coffee-dark mb-4">Categorias</h3>
                        <div className="space-y-2">
                            {CATEGORIES.map(category => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setShowFilters(false);
                                    }}
                                    className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === category
                                            ? 'bg-coffee-medium text-coffee-dark font-medium'
                                            : 'text-gray-600 hover:bg-cream hover:text-coffee-dark'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-coffee-dark mb-4">Preço</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="price-1" className="rounded text-coffee-dark focus:ring-coffee-medium" />
                                    <label htmlFor="price-1" className="text-sm text-gray-600">Até R$ 20,00</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="price-2" className="rounded text-coffee-dark focus:ring-coffee-medium" />
                                    <label htmlFor="price-2" className="text-sm text-gray-600">R$ 20,00 - R$ 50,00</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="price-3" className="rounded text-coffee-dark focus:ring-coffee-medium" />
                                    <label htmlFor="price-3" className="text-sm text-gray-600">Acima de R$ 50,00</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-grow">
                    {/* Search Bar */}
                    <div className="mb-8 flex gap-4">
                        <div className="flex-grow">
                            <Input
                                placeholder="Busque por título, autor ou ISBN..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="h-12 text-lg"
                            />
                        </div>
                        <Button size="lg" className="hidden sm:block">Buscar</Button>
                    </div>

                    {/* Results Info */}
                    <div className="mb-6 flex justify-between items-center">
                        <p className="text-gray-600">
                            Mostrando <span className="font-bold text-coffee-dark">{filteredBooks.length}</span> livros
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 hidden sm:inline">Ordenar por:</span>
                            <select className="border-gray-300 rounded-md text-sm focus:ring-coffee-medium focus:border-coffee-medium">
                                <option>Relevância</option>
                                <option>Menor Preço</option>
                                <option>Maior Preço</option>
                                <option>Mais Recentes</option>
                            </select>
                        </div>
                    </div>

                    {/* Books Grid */}
                    {filteredBooks.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBooks.map(book => (
                                <BookCard key={book.id} {...book} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
                            <p className="text-gray-500 text-lg">Nenhum livro encontrado com esses filtros.</p>
                            <Button
                                variant="ghost"
                                onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }}
                                className="mt-4"
                            >
                                Limpar Filtros
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
