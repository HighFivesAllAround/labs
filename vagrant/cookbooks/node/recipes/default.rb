package "g++"
package "make"
package "pkg-config"
package "curl"
package "libssl-dev"

package_name = "node.js"
version      = "0.10.12"
arch         = "amd64"
debfile      = "#{package_name}_#{version}_#{arch}.deb"
cache_path   = "/home/ubuntu/labs/vagrant/assets/#{debfile}"

remote_file cache_path do
  source "http://provisioning.agrieser.net/debs/#{debfile}"
  checksum "7a35f0aec896299a8c3cac9da415dc46ff7a5d68e170b4a8dcbd7ced615b3c5c"
  mode 0644
  action :create_if_missing
end

dpkg_package "node.js" do
  source cache_path
  action :install
end
