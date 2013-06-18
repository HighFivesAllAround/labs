package "g++"
package "gcc"
package "make"
package "libc6-dev"
package "patch"
package "openssl"
package "ca-certificates"
package "libreadline6"
package "libreadline6-dev"
package "curl"
package "zlib1g"
package "zlib1g-dev"
package "libssl-dev"
package "libyaml-dev"
package "libsqlite3-dev"
package "sqlite3"
package "libxml2-dev"
package "libxslt1-dev"
package "autoconf"
package "libc6-dev"
package "libgdbm-dev"
package "libncurses5-dev"
package "automake"
package "libtool"
package "bison"
package "pkg-config"
package "libffi-dev"

version    = "2.0.0-p195"
cache_path = "/home/ubuntu/dick_and_jane/vagrant/assets/ruby-#{version}.tar.gz"
unpack_path = "/tmp/ruby/#{version}"
build_path = "#{unpack_path}/ruby-#{version}"

remote_file cache_path do
  source "http://provisioning.agrieser.net/chef/ruby-#{version}.tar.gz"
  checksum "a2fe8d44eac3c27d191ca2d0ee2d871f9aed873c74491b2a8df229bfdc4e5a93"
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
./configure --prefix=/opt/ruby
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
rm -rf /opt/ruby
make install
  EOH
end

bash "link" do
  cwd "/usr/local/bin"
  user "root"
  code <<-EOH
ln -s /opt/ruby/bin/ruby
ln -s /opt/ruby/bin/rake
ln -s /opt/ruby/bin/gem
ln -s /opt/ruby/bin/irb
  EOH
end

bash "install base gems" do
  user "root"
  cwd "/usr/local/bin"
  code <<-EOH
gem install bundler -v 1.3.5
sudo ln -s /opt/ruby/lib/ruby/gems/2.0.0/gems/bundler-1.3.5/bin/bundle
  EOH
end
