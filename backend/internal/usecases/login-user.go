package usecases

import (
	"context"
	"fmt"

	"github.com/hugocbb/alugueMe/internal/domain"
	"github.com/hugocbb/alugueMe/internal/repository"
	"github.com/hugocbb/alugueMe/pkg"
)

type (
	LoginUser struct {
		repo repository.UserRepository
	}
	LoginUserInput struct {
		Id       uint   `json:"id"`
		Email    string `json:"email"`
		Password string `json:"password"`
	}
)

func NewLoginUser(r repository.UserRepository) *LoginUser {
	return &LoginUser{repo: r}

}

func (r LoginUser) Execute(ctx context.Context, payload *domain.User) (string, error) {
	var user LoginUserInput
	err := r.repo.GetUserByEmail(ctx, payload.Email)
	if err != nil {
		return "", err
	}

	if err := pkg.CompareHash(user.Password, payload.Password); err != nil {
		return "", fmt.Errorf("Email ou senha invalido")
	}

	tokenString, err := pkg.GenerateToken(int(user.Id))
	if err != nil {
		return "", fmt.Errorf("Um erro inesperado aconteceu")
	}
	return tokenString, nil
}
