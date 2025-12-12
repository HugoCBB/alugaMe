import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const GENRES = [
    'Romance', 'Ficção Científica', 'Fantasia', 'Terror',
    'Suspense', 'Biografia', 'História', 'Autoajuda',
    'Negócios', 'Quadrinhos', 'Poesia', 'Clássicos'
];

export const RegisterPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        genres: [] as string[]
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleGenre = (genre: string) => {
        setFormData(prev => ({
            ...prev,
            genres: prev.genres.includes(genre)
                ? prev.genres.filter(g => g !== genre)
                : [...prev.genres, genre]
        }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registration data:', formData);
        // TODO: Implement registration logic
        nextStep(); // Move to confirmation
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-cream py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-lg border border-coffee-light">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        <span className={`text-sm font-medium ${step >= 1 ? 'text-coffee-dark' : 'text-gray-400'}`}>Dados</span>
                        <span className={`text-sm font-medium ${step >= 2 ? 'text-coffee-dark' : 'text-gray-400'}`}>Gêneros</span>
                        <span className={`text-sm font-medium ${step >= 3 ? 'text-coffee-dark' : 'text-gray-400'}`}>Conclusão</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                        <div
                            className="h-full bg-coffee-medium rounded-full transition-all duration-300"
                            style={{ width: `${((step - 1) / 2) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-coffee-dark">
                        {step === 1 && 'Crie sua conta'}
                        {step === 2 && 'O que você gosta de ler?'}
                        {step === 3 && 'Tudo pronto!'}
                    </h2>
                    {step === 1 && (
                        <p className="mt-2 text-sm text-gray-600">
                            Já tem uma conta?{' '}
                            <Link to="/login" className="font-medium text-accent hover:text-coffee-dark transition-colors">
                                Faça login
                            </Link>
                        </p>
                    )}
                </div>

                {step === 1 && (
                    <div className="space-y-6">
                        <Input
                            label="Nome Completo"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Seu nome"
                        />
                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="seu@email.com"
                        />
                        <Input
                            label="Senha"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                        />
                        <Input
                            label="Confirmar Senha"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                        />
                        <Button onClick={nextStep} className="w-full" size="lg">
                            Próximo
                        </Button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6">
                        <p className="text-gray-600 text-center mb-4">
                            Selecione seus gêneros favoritos para personalizarmos sua experiência.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {GENRES.map(genre => (
                                <button
                                    key={genre}
                                    onClick={() => toggleGenre(genre)}
                                    className={`p-2 rounded-md text-sm font-medium transition-colors border ${formData.genres.includes(genre)
                                            ? 'bg-coffee-medium text-coffee-dark border-coffee-dark'
                                            : 'bg-white text-gray-600 border-gray-300 hover:border-coffee-medium'
                                        }`}
                                >
                                    {genre}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-8">
                            <Button variant="outline" onClick={prevStep} className="w-1/3">
                                Voltar
                            </Button>
                            <Button onClick={handleSubmit} className="w-2/3">
                                Finalizar Cadastro
                            </Button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <span className="text-4xl">🎉</span>
                        </div>
                        <p className="text-gray-600">
                            Sua conta foi criada com sucesso! Agora você pode começar a explorar, comprar e vender livros.
                        </p>
                        <Link to="/marketplace">
                            <Button size="lg" className="w-full">
                                Ir para o Marketplace
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
