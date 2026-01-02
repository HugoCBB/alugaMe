package usecases

import (
	"context"
	"fmt"
	"time"

	"github.com/hugocbb/alugueMe/internal/domain"
	"github.com/hugocbb/alugueMe/internal/repository"
	"github.com/hugocbb/alugueMe/pkg"
)

type (
	RegisterUser struct {
		repo repository.UserRepository
	}
	RegisterUserInput struct {
		Id       uint   `json:"id"`
		Name     string `json:"name"`
		Email    string `json:"email"`
		Password string `json:"password"`
	}
)

func NewRegisterUser(r repository.UserRepository) *RegisterUser {
	return &RegisterUser{repo: r}

}

func (u *RegisterUser) Execute(ctx context.Context, user *RegisterUserInput) (string, error) {
	hashedPassword := pkg.HashPassword(user.Password)
	err := u.repo.GetUserByEmail(ctx, user.Email)
	if err == nil {
		return "", fmt.Errorf("email já cadastrado no sistema")
	}

	payload := &domain.User{
		Id:         user.Id,
		Name:       user.Name,
		Email:      user.Email,
		Password:   hashedPassword,
		CreateDate: time.Now().Format("02/01/2026"),
	}

	_, err = u.repo.Save(ctx, payload)
	if err != nil {
		return "", err
	}

	tokenString, err := pkg.GenerateToken(int(user.Id))
	if err != nil {
		return "", err
	}
	return tokenString, nil
}
