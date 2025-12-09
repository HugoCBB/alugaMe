package domain

type User struct {
	Id         uint   `json:"id"`
	Name       string `json:"name"`
	Email      string `json:"email"`
	Password   string `json:"password"`
	CreateDate string `json:"create_date"`
}

type RegisterUserInput struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}
type LoginUserInput struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}
