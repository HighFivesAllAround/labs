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

package_name = "ruby"
version      = "2.0.0-p195"
arch         = "amd64"
debfile      = "#{package_name}_#{version}_#{arch}.deb"
cache_path   = "/home/ubuntu/dick_and_jane/vagrant/assets/#{debfile}"

remote_file cache_path do
  source "http://provisioning.agrieser.net/debs/#{debfile}"
  checksum "0866a053cdaa5a381e78c14acd8c973a17c4abe253ded86cbd3fc19e6ce7f88c"
  mode 0644
  action :create_if_missing
end

dpkg_package "ruby" do
  source cache_path
  action :install
end

bash "install base gems" do
  user "root"
  cwd "/usr/local/bin"
  code <<-EOH
gem install bundler -v 1.3.5
  EOH
end
