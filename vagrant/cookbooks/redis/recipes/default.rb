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

bash "add scripts" do
  cwd "#{build_path}/utils"
  user "root"
  code <<-EOH
echo "6379" | ./install_server.sh
  EOH
end

service "redis_6379" do
  action :stop
end

service "redis_6379" do
  action :start
end
