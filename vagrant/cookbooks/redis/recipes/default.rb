package "gcc"
package "make"

package_name = "redis"
version      = "2.6.14"
arch         = "amd64"
debfile      = "#{package_name}_#{version}_#{arch}.deb"
cache_path   = "/home/ubuntu/labs/vagrant/assets/#{debfile}"

remote_file cache_path do
  source "http://provisioning.agrieser.net/debs/#{debfile}"
  checksum "729df7ac700857fddf3ca192f0fd2f27f09893f3f7c4d57dda52f44336248950"
  mode 0644
  action :create_if_missing
end

dpkg_package "redis" do
  source cache_path
  action :install
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
