resource "aws_vpc" "vpc_api" {
  cidr_block            = "172.24.0.0/16"
}

resource "aws_subnet" "api_subnet" {
  vpc_id        = aws_vpc.vpc_api.id
  cidr_block    = var.cidrSubnetIp
  availability_zone = "us-east-1a"
}

resource "aws_security_group" "api_school_sgp" {
  vpc_id        = aws_vpc.vpc_api.id
  name          = "api-school-sgp"

  egress {
    cidr_blocks = var.cidrSecurityGroup
    from_port   = 0
    to_port     = 0
    protocol    = -1
  }
  
  ingress {
    cidr_blocks = var.cidrSecurityGroup
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
  }

  ingress {
    cidr_blocks = var.cidrSecurityGroup
    from_port   = 81
    to_port     = 81
    protocol    = "tcp"
  }
}

resource "aws_internet_gateway" "api-igw" {
  vpc_id = aws_vpc.vpc_api.id
}

resource "aws_route_table" "api_public_rtb" {
  vpc_id = aws_vpc.vpc_api.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.api-igw.id
  }

  tags = {
    Name = "api-public-rtb"
  }
}

resource "aws_route_table_association" "api_rta" {
  subnet_id  = aws_subnet.api_subnet.id
  route_table_id = aws_route_table.api_public_rtb.id
}