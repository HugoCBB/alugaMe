package usecases

import (
	"context"

	"github.com/hugocbb/alugueMe/internal/domain"
	"github.com/hugocbb/alugueMe/internal/repository"
)

type RegisterUser struct {
	repo repository.UserRepository
}

func NewRegisterUser(r repository.UserRepository) *RegisterUser {
	return &RegisterUser{repo: r}

}

func (u *RegisterUser) Execute(ctx context.Context, user *domain.User) (int, error) {
	id, err := u.repo.Save(ctx, user)
	if err != nil {
		return 0, err
	}
	return id, nil
}
