import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-coffee-light py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-coffee-dark mb-6 tracking-tight">
                            Dê uma nova vida aos seus <span className="text-accent">livros favoritos</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                            O marketplace perfeito para amantes de livros. Compre, venda e troque histórias com uma comunidade apaixonada por leitura.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/marketplace">
                                <Button size="lg" className="w-full sm:w-auto">Explorar Livros</Button>
                            </Link>
                            <Link to="/register">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">Começar a Vender</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-coffee-medium rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-coffee-dark rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 animate-blob animation-delay-4000"></div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-coffee-dark mb-4">Como funciona o AlugueMe</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Simples, rápido e seguro. Conectamos você aos livros que sempre quis ler.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center p-6 rounded-xl bg-cream hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-coffee-medium rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                                📚
                            </div>
                            <h3 className="text-xl font-semibold text-coffee-dark mb-3">Cadastre seus Livros</h3>
                            <p className="text-gray-600">
                                Tire fotos, adicione uma descrição e defina o preço. É super rápido colocar seus livros à venda.
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-cream hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-coffee-medium rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                                🔍
                            </div>
                            <h3 className="text-xl font-semibold text-coffee-dark mb-3">Encontre Relíquias</h3>
                            <p className="text-gray-600">
                                Navegue por milhares de títulos, de clássicos a lançamentos, com preços acessíveis.
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-cream hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-coffee-medium rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                                🤝
                            </div>
                            <h3 className="text-xl font-semibold text-coffee-dark mb-3">Negocie com Segurança</h3>
                            <p className="text-gray-600">
                                Converse com vendedores, combine a entrega e faça parte de uma comunidade de leitores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-coffee-dark text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para renovar sua estante?</h2>
                    <p className="text-coffee-light text-lg mb-8">
                        Junte-se a milhares de leitores que já estão comprando e vendendo no AlugueMe.
                    </p>
                    <Link to="/register">
                        <Button size="lg" className="bg-white text-coffee-dark hover:bg-gray-100">
                            Criar Conta Grátis
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};
