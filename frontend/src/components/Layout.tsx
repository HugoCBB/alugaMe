import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { Sidebar } from './Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
    // Pages that should have the sidebar
    const isAppPage = ['/marketplace', '/comunidade', '/profile', '/publish'].some(path => location.pathname.startsWith(path));

    if (isAuthPage) {
        return (
            <div className="min-h-screen bg-cream font-sans">
                {children}
            </div>
        );
    }

    if (isAppPage) {
        return (
            <div className="min-h-screen bg-cream font-sans flex flex-col md:flex-row">
                <Sidebar />
                <main className="flex-grow md:ml-20 p-4 md:p-8 pb-24 md:pb-8">
                    {children}
                </main>
            </div>
        );
    }

    // Default to Landing Page layout (Navbar + Footer)
    return (
        <div className="min-h-screen flex flex-col bg-cream font-sans">
            {/* Navbar */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-2xl font-bold text-coffee-dark tracking-tight">
                                Alugue<span className="text-coffee-medium">Me</span>
                            </Link>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <Link to="/" className="text-gray-700 hover:text-coffee-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Início
                            </Link>
                            <Link to="/marketplace" className="text-gray-700 hover:text-coffee-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Livros
                            </Link>
                            <Link to="/comunidade" className="text-gray-700 hover:text-coffee-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Comunidade
                            </Link>
                        </nav>

                        <div className="flex items-center space-x-4">
                            {!isAuthPage && (
                                <>
                                    <Link to="/login">
                                        <Button variant="ghost" size="sm">Entrar</Button>
                                    </Link>
                                    <Link to="/register">
                                        <Button variant="primary" size="sm">Cadastrar</Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-coffee-dark text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-xl font-bold mb-4">AlugueMe</h3>
                            <p className="text-coffee-light max-w-md">
                                Conectando leitores e histórias. Dê uma nova vida aos seus livros antigos e descubra novos mundos.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-coffee-medium">Plataforma</h4>
                            <ul className="space-y-2">
                                <li><Link to="/marketplace" className="text-coffee-light hover:text-white transition-colors">Explorar Livros</Link></li>
                                <li><Link to="/register" className="text-coffee-light hover:text-white transition-colors">Começar a Vender</Link></li>
                                <li><Link to="/login" className="text-coffee-light hover:text-white transition-colors">Minha Conta</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-coffee-medium">Suporte</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-coffee-light hover:text-white transition-colors">Ajuda</a></li>
                                <li><a href="#" className="text-coffee-light hover:text-white transition-colors">Termos de Uso</a></li>
                                <li><a href="#" className="text-coffee-light hover:text-white transition-colors">Privacidade</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-coffee-light text-sm">
                        &copy; {new Date().getFullYear()} AlugueMe. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
};
