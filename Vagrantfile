# -*- mode: ruby -*-
# vi: set ft=ruby :

require 'etc'

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu_12.04"
  config.vm.box_url = "http://provisioning.agrieser.net/vagrant/ubuntu_12.04.box"
  config.vm.network :public_network
  config.vm.network :private_network, ip: "10.24.48.96"
  config.vm.hostname = "#{Etc.getlogin}-#{Time.new.strftime("%s")}"
  config.vm.synced_folder ".", "/home/ubuntu/labs", nfs: true
  # add the following line to /etc/nfs.conf on osx
  # nfs.server.mount.port = 1022

  config.vm.provider "virtualbox" do |v|
    v.customize ["modifyvm", :id, "--memory", "1024"]
    v.customize ["modifyvm", :id, "--cpus", "2"]
  end

  config.ssh.username = "ubuntu"
  config.ssh.private_key_path = "vagrant/assets/keys/id_rsa"

  config.vm.provision :shell, path: "vagrant/assets/chef_bootstrap.sh"
  config.vm.provision "chef_solo" do |chef|
    chef.cookbooks_path = "vagrant/cookbooks"
    chef.add_recipe "apt"
    chef.add_recipe "base"
    chef.add_recipe "networking"
    chef.add_recipe "postgres"
    chef.add_recipe "nginx"
    chef.add_recipe "redis"
    chef.add_recipe "ruby"
    chef.add_recipe "node"
    chef.add_recipe "labs"
    chef.add_recipe "labs-dev"
  end
end
