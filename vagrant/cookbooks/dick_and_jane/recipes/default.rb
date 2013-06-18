package "git-core"

bash "bundle" do
  cwd "/home/ubuntu/dick_and_jane"
  user "ubuntu"
  code <<-EOH
bundle install --path vendor/bundle
  EOH
end

bash "create db" do
  cwd "/home/ubuntu/dick_and_jane"
  user "ubuntu"
  code <<-EOH
bundle exec rake db:create
  EOH
end
