import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
        // TODO: Implement actual login logic
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-cream py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-coffee-light">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-coffee-dark">
                        Bem-vindo de volta
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Ou{' '}
                        <Link to="/register" className="font-medium text-accent hover:text-coffee-dark transition-colors">
                            crie uma nova conta
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <Input
                            label="Email"
                            type="email"
                            required
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            label="Senha"
                            type="password"
                            required
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-coffee-dark focus:ring-coffee-medium border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Lembrar de mim
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-accent hover:text-coffee-dark">
                                Esqueceu sua senha?
                            </a>
                        </div>
                    </div>

                    <div>
                        <Button type="submit" className="w-full" size="lg">
                            Entrar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
