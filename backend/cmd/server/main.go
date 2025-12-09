package main

import (
	"github.com/hugocbb/alugueMe/api"
	"github.com/hugocbb/alugueMe/internal/config"
	"github.com/hugocbb/alugueMe/internal/database"
)

func init() {
	config.LoadEnv()
}

// @title AlugameAPI
// @version 1.0
// @description API do backend
// @host localhost:8080
// @BasePath /api
func main() {
	database.ConnectDatabase()
	api.HandleRequest()
}
