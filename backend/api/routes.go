package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/hugocbb/alugueMe/docs"
	"github.com/hugocbb/alugueMe/internal/config"
	"github.com/hugocbb/alugueMe/internal/database"

	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func HandleRequest() {

	r := gin.Default()
	deps := config.SetupDependecy(database.DB)

	r.GET("/docs/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
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
			user.POST("/login", deps.UserHandler.Login)
		}
	}

	r.Run(":8080")
}
