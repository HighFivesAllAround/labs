package "nginx"

cookbook_file "/etc/nginx/sites-available/unicorn.conf" do
  mode 0644
  owner "root"
  group "root"
end

bash "link configs" do
  cwd "/etc/nginx/sites-enabled"
  user "root"
  code <<-EOH
rm *
ln -s ../sites-available/unicorn.conf
  EOH
end

service "nginx" do
  action :restart
end
