package "g++"
package "make"
package "pkg-config"
package "curl"
package "libssl-dev"

version    = "v0.10.11"
cache_path = "/home/ubuntu/dick_and_jane/vagrant/assets/node-#{version}.tar.gz"
unpack_path = "/tmp/node/#{version}"
build_path = "#{unpack_path}/node-#{version}"

remote_file cache_path do
  source "http://nodejs.org/dist/v0.10.11/node-v0.10.11.tar.gz"
  checksum "ee4b398efde1fa7a334435910447422dae58e93da8711602c2228485f2b58cb1"
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

bash "configure" do
  cwd build_path
  user "ubuntu"
  code <<-EOH
./configure --prefix=/opt/node
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
rm -rf /opt/node
make install
  EOH
end

bash "link" do
  cwd "/usr/local/bin"
  user "root"
  code <<-EOH
ln -s /opt/node/bin/node
ln -s /opt/node/bin/npm
ln -s /opt/node/bin/node-waf
  EOH
end
