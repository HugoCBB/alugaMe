package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/hugocbb/alugueMe/internal/config"
	"github.com/hugocbb/alugueMe/internal/database"
)

func HandleRequest() {
	r := gin.Default()
	deps := config.SetupDependecy(database.DB)

	r.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})

	api := r.Group("/api")
	{
		user := api.Group("/users")
		{
			user.POST("/", deps.UserHandler.Register)
		}
	}

	r.Run(":8080")
}
