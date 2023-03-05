variable "cidrSecurityGroup" {
  default = ["0.0.0.0/0"]
}

variable "cidrSubnetIp" {
  default = "172.24.1.0/24"
}

variable "key_name" {
  default = "test"
}

variable "access_private_key" {
  default = "/home/rodrigo/rodrigo2user.pem"
}