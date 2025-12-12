import React from 'react';
import { Link } from 'react-router-dom';
import { BookCard } from '../components/BookCard';
import { Button } from '../components/ui/Button';

// Mock Data
const MY_BOOKS = [
    { id: 1, title: 'Dom Casmurro', author: 'Machado de Assis', price: 'R$ 25,00', genre: 'Clássicos', imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', price: 'R$ 20,00', genre: 'Infantil', imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800' },
];

const MY_COMMUNITIES = [
    { id: 1, name: 'Clube dos Clássicos', members: 1250, image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'Ficção Científica Brasil', members: 890, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200' },
];

export const ProfilePage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {/* Profile Header */}
            <div className="bg-white rounded-xl shadow-sm border border-coffee-light p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-coffee-medium rounded-full flex items-center justify-center text-4xl text-coffee-dark font-bold border-4 border-white shadow-lg">
                    JD
                </div>
                <div className="text-center md:text-left flex-grow">
                    <h1 className="text-3xl font-bold text-coffee-dark mb-2">João da Silva</h1>
                    <p className="text-gray-600 mb-4">Leitor apaixonado | Rio de Janeiro, RJ</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <div className="bg-cream px-4 py-2 rounded-lg">
                            <span className="font-bold text-coffee-dark">12</span> Livros Lidos
                        </div>
                        <div className="bg-cream px-4 py-2 rounded-lg">
                            <span className="font-bold text-coffee-dark">5</span> Livros à Venda
                        </div>
                        <div className="bg-cream px-4 py-2 rounded-lg">
                            <span className="font-bold text-coffee-dark">2</span> Comunidades
                        </div>
                    </div>
                </div>
                <div>
                    <Button variant="outline">Editar Perfil</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Published Books */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-coffee-dark">Meus Livros Publicados</h2>
                        <Link to="/publish">
                            <Button size="sm">Adicionar Novo</Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {MY_BOOKS.map(book => (
                            <BookCard key={book.id} {...book} />
                        ))}
                    </div>
                </div>

                {/* Communities */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-coffee-dark">Minhas Comunidades</h2>
                    <div className="bg-white rounded-xl shadow-sm border border-coffee-light p-6 space-y-4">
                        {MY_COMMUNITIES.map(community => (
                            <div key={community.id} className="flex items-center gap-4 p-3 hover:bg-cream rounded-lg transition-colors cursor-pointer">
                                <img src={community.image} alt={community.name} className="w-12 h-12 rounded-lg object-cover" />
                                <div>
                                    <h3 className="font-semibold text-coffee-dark">{community.name}</h3>
                                    <p className="text-xs text-gray-500">{community.members} membros</p>
                                </div>
                            </div>
                        ))}
                        <Button variant="ghost" className="w-full text-sm">Ver todas</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
