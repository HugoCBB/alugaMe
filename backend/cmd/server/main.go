package main

import (
	"github.com/hugocbb/alugueMe/api"
	"github.com/hugocbb/alugueMe/internal/database"
)

func main() {
	database.ConnectDatabase()
	api.HandleRequest()
}
