import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Users, User, Settings } from 'lucide-react';

export const Sidebar: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        { path: '/marketplace', icon: BookOpen, label: 'Livros' },
        { path: '/comunidade', icon: Users, label: 'Comunidade' },
        { path: '/profile', icon: User, label: 'Perfil' },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 bg-white border-r border-coffee-light flex-col items-center py-8 z-50">
                <div className="mb-12">
                    <Link to="/" className="text-2xl font-bold text-coffee-dark">
                        A<span className="text-coffee-medium">M</span>
                    </Link>
                </div>

                <nav className="flex-1 w-full flex flex-col gap-6 px-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 group relative
                  ${isActive(item.path)
                                        ? 'bg-coffee-dark text-white shadow-md'
                                        : 'text-gray-500 hover:bg-cream hover:text-coffee-dark'
                                    }`}
                                title={item.label}
                            >
                                <Icon size={24} strokeWidth={1.5} />
                                <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 absolute -bottom-2 transition-opacity duration-200 whitespace-nowrap bg-white px-1 rounded shadow-sm border border-gray-100 z-10 text-coffee-dark">
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto">
                    <button className="p-3 text-gray-400 hover:text-coffee-dark transition-colors">
                        <Settings size={24} strokeWidth={1.5} />
                    </button>
                </div>
            </aside>

            {/* Mobile Bottom Nav */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-coffee-light z-50 px-6 py-3 flex justify-between items-center shadow-lg">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors
                ${isActive(item.path)
                                    ? 'text-coffee-dark'
                                    : 'text-gray-400 hover:text-coffee-dark'
                                }`}
                        >
                            <Icon size={24} strokeWidth={isActive(item.path) ? 2 : 1.5} />
                            <span className="text-[10px] font-medium mt-1">{item.label}</span>
                        </Link>
                    );
                })}
                <button className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-coffee-dark">
                    <Settings size={24} strokeWidth={1.5} />
                    <span className="text-[10px] font-medium mt-1">Config</span>
                </button>
            </nav>
        </>
    );
};
