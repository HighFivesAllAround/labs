apt_repository "apt.postgresql.org" do
  uri "http://apt.postgresql.org/pub/repos/apt/"
  distribution node['lsb']['codename'] + "-pgdg"
  components ["main"]
  keyserver "keyserver.ubuntu.com"
  key "ACCC4CF8"
end

package "pgdg-keyring"
package "postgresql"
package "libpq5"
package "libpq-dev"

cookbook_file "/etc/postgresql/9.2/main/pg_hba.conf" do
  mode 0640
  owner "postgres"
  group "postgres"
end

service "postgresql" do
  action :restart
end

bash "Add superuser" do
  user "postgres"
  code <<-EOH
echo "drop role ubuntu" | psql > /dev/null
createuser --superuser ubuntu
  EOH
end
