# Security

Several security measures were implemented in the solution.

## Ubuntu Server

* Dedicated administrator account named "festivalsjef"
* SSH public key authentication configured
* PasswordAuthentication disabled
* Static IP address configured

## Network

* Separate guest network and internal network
* Servers use fixed IP addresses
* DNS service installed on Windows Server

## HTTPS

HTTPS was evaluated as part of the solution.

In a production environment HTTPS should be implemented using TLS certificates (for example Let's Encrypt and Nginx). Because the solution was developed and tested on an internal network, HTTPS was not implemented during the exam setup.
