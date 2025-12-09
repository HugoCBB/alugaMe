package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/hugocbb/alugueMe/internal/domain"
	"github.com/hugocbb/alugueMe/internal/usecases"
)

type UserHandler struct {
	RegisterUseCase usecases.RegisterUser
	LoginUseCase    usecases.LoginUser
}

// @Summary Cria um novo usuario
// @Tags users
// @Accept json
// @Produce json
// @Param payload body domain.RegisterUserInput true "Dados do usuário"
// @Success 201 {object} map[string]interface{}
// @Router /users [post]
func (u *UserHandler) Register(c *gin.Context) {
	var payload *domain.User
	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, err)
		return
	}

	token, err := u.RegisterUseCase.Execute(c.Request.Context(), payload)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "erro ao cadastrar usuario",
			"error":   err,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Usuario cadastrado com sucesso",
		"token":   token,
	})
}

// @Summary Faz o login e retorna o token
// @Tags users
// @Accept json
// @Produce json
// @Param payload body domain.LoginUserInput true "Dados do usuário"
// @Success 201 {object} map[string]interface{}
// @Router /users/login [post]
func (u *UserHandler) Login(c *gin.Context) {
	var payload *domain.User
	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, err)
	}

	token, err := u.LoginUseCase.Execute(c.Request.Context(), payload)
	if err != nil {
		c.JSON(http.StatusBadRequest, err)
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Usuario loagado com sucesso",
		"token":   token,
	})

}
