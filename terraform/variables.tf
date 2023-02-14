variable "cidrSecurityGroup" {
  default = ["0.0.0.0/0"]
}

variable "cidrSubnetIp" {
  default = "172.24.1.0/24"
}

variable "key_name" {
  default = "rodrigo2user"
}

variable "access_private_key" {
  default = "/home/rodrigo/rodrigo2user.pem"
}