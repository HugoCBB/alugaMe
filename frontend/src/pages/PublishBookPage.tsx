import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Upload } from 'lucide-react';

export const PublishBookPage: React.FC = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        isbn: '',
        price: '',
        description: '',
        image: null as File | null
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, image: e.target.files![0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Publishing book:', formData);
        // TODO: Implement publish logic
        alert('Livro publicado com sucesso! (Simulação)');
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-coffee-dark mb-8">Publicar um Livro</h1>

            <div className="bg-white rounded-xl shadow-sm border border-coffee-light p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Título do Livro"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Ex: Dom Casmurro"
                            required
                        />
                        <Input
                            label="Autor"
                            name="author"
                            value={formData.author}
                            onChange={handleInputChange}
                            placeholder="Ex: Machado de Assis"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="ISBN"
                            name="isbn"
                            value={formData.isbn}
                            onChange={handleInputChange}
                            placeholder="000-00-000-0000-0"
                        />
                        <Input
                            label="Preço (R$)"
                            name="price"
                            type="number"
                            step="0.01"
                            value={formData.price}
                            onChange={handleInputChange}
                            placeholder="0,00"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-coffee-dark mb-1">
                            Descrição
                        </label>
                        <textarea
                            name="description"
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-coffee-medium focus:border-coffee-dark"
                            placeholder="Conte um pouco sobre o estado do livro, edição, etc..."
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-coffee-dark mb-1">
                            Foto da Capa
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-coffee-medium transition-colors cursor-pointer relative">
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={handleImageChange}
                                accept="image/*"
                            />
                            <div className="space-y-1 text-center">
                                {formData.image ? (
                                    <div className="text-coffee-dark font-medium">
                                        {formData.image.name}
                                    </div>
                                ) : (
                                    <>
                                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                        <div className="flex text-sm text-gray-600">
                                            <span className="relative cursor-pointer bg-white rounded-md font-medium text-accent hover:text-coffee-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-coffee-medium">
                                                Faça upload de um arquivo
                                            </span>
                                            <p className="pl-1">ou arraste e solte</p>
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            PNG, JPG, GIF até 10MB
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-4">
                        <Button type="button" variant="ghost">Cancelar</Button>
                        <Button type="submit" size="lg">Publicar Livro</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
