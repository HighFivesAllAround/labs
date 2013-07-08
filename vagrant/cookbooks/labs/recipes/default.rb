cookbook_file "/etc/init/app-labs.conf" do
  mode 0644
  owner "root"
  group "root"
  action :create
end
