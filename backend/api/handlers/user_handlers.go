package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/hugocbb/alugueMe/internal/domain"
	"github.com/hugocbb/alugueMe/internal/usecases"
)

type UserHandler struct {
	RegisterUseCase usecases.RegisterUser
}

func (u *UserHandler) Register(c *gin.Context) {
	var payload *domain.User
	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, err)
		return
	}

	id, err := u.RegisterUseCase.Execute(c.Request.Context(), payload)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "erro ao cadastrar usuario",
			"error":   err,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Usuario cadastrado com sucesso",
		"id":      id,
	})
}
