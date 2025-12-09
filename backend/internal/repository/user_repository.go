package repository

import (
	"context"
	"fmt"

	"github.com/hugocbb/alugueMe/internal/domain"
	"gorm.io/gorm"
)

type (
	IUserRepository interface {
		Save(ctx context.Context, user *domain.User) (int, error)
		GetUserByEmail(ctx context.Context, email string)
	}

	UserRepository struct {
		db *gorm.DB
	}
)

func NewUserRepository(db *gorm.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (r *UserRepository) Save(ctx context.Context, user *domain.User) (int, error) {
	if err := r.db.WithContext(ctx).Create(user).Error; err != nil {
		return 0, fmt.Errorf("Erro ao cadastrar usuario: %d", err)
	}
	return int(user.Id), nil
}

func (r *UserRepository) GetUserByEmail(ctx context.Context, email string) (*domain.User, error) {
	var user domain.User

	if err := r.db.WithContext(ctx).Where("email = ?", email).First(&user).Error; err != nil {
		if err != nil {
			return nil, fmt.Errorf("email inexistente")
		}
		return nil, fmt.Errorf("erro ao consultar usuario: %w", err)
	}

	return &user, nil
}
