package "gcc"
package "make"

version    = "2.6.13"
cache_path = "/home/ubuntu/dick_and_jane/vagrant/assets/redis-#{version}.tar.gz"
unpack_path = "/tmp/redis/#{version}"
build_path = "#{unpack_path}/redis-#{version}"

remote_file cache_path do
  source "http://redis.googlecode.com/files/redis-2.6.13.tar.gz"
  checksum "3b9439636c58ca06bee538a0f7298e02a33fcf98b8fa845c0b0cf8567751e948"
  mode 0644
  action :create_if_missing
end

directory build_path do
  owner "ubuntu"
  group "ubuntu"
  recursive true
  action :delete
end

directory build_path do
  owner "ubuntu"
  group "ubuntu"
  recursive true
  action :create
end

bash "unpack" do
  cwd unpack_path
  user "ubuntu"
  code <<-EOH
tar -xzf #{cache_path}
  EOH
end

bash "compile" do
  cwd build_path
  user "ubuntu"
  code <<-EOH
make
  EOH
end

bash "install" do
  cwd build_path
  user "root"
  code <<-EOH
mv src/redis-cli /usr/local/bin/
mv src/redis-server /usr/local/bin/
  EOH
end

user "redis" do
  system true
end

directory "/var/lib/redis" do
  owner "redis"
  group "redis"
  recursive true
  mode 0755
end

user "redis" do
  system true
  shell "/bin/bash"
  home "/var/lib/redis"
end

group "redis" do
  system true
  members "redis"
end

directory "/etc/redis" do
  owner "root"
  group "root"
  mode 0755
end

cookbook_file "/etc/redis/redis.conf" do
  mode 0644
  owner "root"
  group "root"
end

cookbook_file "/etc/init/redis-server.conf" do
  mode 0644
  owner "root"
  group "root"
end

service "redis-server" do
  provider Chef::Provider::Service::Upstart
  action :restart
end
