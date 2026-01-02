package database

import (
	"fmt"
	"log"
	"os"

	"github.com/hugocbb/alugueMe/internal/domain"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	DB  *gorm.DB
	err error
)

func ConnectDatabase() {
	dsn := os.Getenv("DB")
	if dsn == "" {
		dsn = "host=db user=root password=root dbname=alugaMeDB port=5432 sslmode=disable"
	}
	DB, err = gorm.Open(postgres.Open(dsn))
	if err != nil {
		log.Fatal("Erro ao se conectar ao banco de dados")
	}
	fmt.Println("Conectado ao banco de dados")
	DB.AutoMigrate(&domain.User{})

}
