package "git-core"

bash "bundle" do
  cwd "/home/ubuntu/labs"
  user "ubuntu"
  code <<-EOH
bundle install --path vendor/bundle
  EOH
end

cookbook_file "/home/ubuntu/labs/config/database.yml" do
  mode 0644
  owner "ubuntu"
  group "ubuntu"
  action :create_if_missing
end

cookbook_file "/etc/init/app-labs.conf" do
  mode 0644
  owner "root"
  group "root"
  action :create_if_missing
end

bash "create db" do
  cwd "/home/ubuntu/labs"
  user "ubuntu"
  code <<-EOH
bundle exec rake db:create
  EOH
end
