#!/bin/bash

echo "Iniciando Deploy na AWS..."

cd ../terraform

terraform apply -auto-approve

echo "Deploy finalizado, pegando IP e salvando no arquivo inventory..."

IP_MACHINE=$(terraform output ec2_public_ip | cut -d '"' -f 2)

echo $IP_MACHINE

cd ../config

echo $IP_MACHINE > inventory

echo "Inicializando instalação na máquina remota..."

ansible-playbook install_apache.yaml