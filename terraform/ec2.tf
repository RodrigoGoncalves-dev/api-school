resource "aws_instance" "ec2_api" {
  ami = "ami-0aa7d40eeae50c9a9"
  instance_type = "t2.micro"
  key_name = var.key_name

  associate_public_ip_address = true

  subnet_id = aws_subnet.api_subnet.id

  security_groups = [ "${aws_security_group.api_school_sgp.id}" ]

  connection {
      user        = "ubuntu"
      type        = "ssh"
      host        = self.public_ip
      private_key = file(var.access_private_key)
    }
}