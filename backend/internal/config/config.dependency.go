package config

import (
	"github.com/hugocbb/alugueMe/api/handlers"
	"github.com/hugocbb/alugueMe/internal/repository"
	"github.com/hugocbb/alugueMe/internal/usecases"
	"gorm.io/gorm"
)

type dependency struct {
	UserHandler handlers.UserHandler
}

func SetupDependecy(db *gorm.DB) *dependency {
	// repositorios
	userRepository := repository.NewUserRepository(db)

	// casos de uso
	registerUserUsecase := usecases.NewRegisterUser(*userRepository)
	loginUserUsecase := usecases.NewLoginUser(*userRepository)

	// handlers
	userHandler := handlers.UserHandler{
		RegisterUseCase: *registerUserUsecase,
		LoginUseCase:    *loginUserUsecase,
	}

	return &dependency{
		UserHandler: userHandler,
	}
}
