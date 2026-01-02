package api

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/hugocbb/alugueMe/api/middleware"
	_ "github.com/hugocbb/alugueMe/docs"
	"github.com/hugocbb/alugueMe/internal/config"
	"github.com/hugocbb/alugueMe/internal/database"

	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func HandleRequest() {
	ctx := context.Background()
	r := gin.Default()
	deps := config.SetupDependecy(database.DB)
	rdb := config.NewRedisClient(ctx)

	r.GET("/docs/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	r.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})

	api := r.Group("/api")
	{
		user := api.Group("/users", middleware.RateLimitMiddleware(rdb))
		{
			user.POST("/", deps.UserHandler.Register)
			user.POST("/login", deps.UserHandler.Login)
		}
	}

	r.Run(":8080")
}
