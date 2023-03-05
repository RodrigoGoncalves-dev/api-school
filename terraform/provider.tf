terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  shared_credentials_file = "/home/rodrigo/.aws/credentials"
  profile                 = "default"
  region                  = "us-east-1"
}