cookbook_file "/etc/ssh/sshd_config" do
  mode 0644
  owner "root"
  group "root"
  action :create
end

service "ssh" do
  action :restart
end

user "ubuntu" do
  system false
  shell "/bin/bash"
end

directory "/home/ubuntu/.ssh" do
  mode 0700
  owner "ubuntu"
  group "ubuntu"
end

cookbook_file "/home/ubuntu/.ssh/authorized_keys" do
  mode 0600
  owner "ubuntu"
  group "ubuntu"
end

cookbook_file "/etc/sudoers" do
  mode 0440
  owner "root"
  group "root"
end

bash "lock root account" do
  user "root"
  cwd "/root"
  code <<-EOH
passwd -l root
  EOH
end

package "htop"
package "vim"
package "git-core"
package "screen"
