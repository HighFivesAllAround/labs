package "avahi-daemon" do
  action :install
end

package "ntp" do
  action :install
end

bash "load rules" do
  user "root"
  code <<-EOH
########################################
# Start By Flushing Any Current Tables
########################################
iptables -F
iptables -X
iptables -Z
iptables -t nat -F
iptables -t nat -X
iptables -t nat -Z
iptables -t mangle -F
iptables -t mangle -X
iptables -t mangle -Z


########################################
# Declare Chains
########################################
iptables -N SSH
iptables -N HTTP
iptables -N BAN


########################################
# Allow Unlimited Access From Local Interface
########################################
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT


########################################
# Input Chain
########################################
# Accept established traffic and sort the rest
iptables -A INPUT -i eth+ -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -i br+ -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -p tcp --dport 22 --match state --state NEW -j SSH
iptables -A INPUT -p tcp --dport 80 --match state --state NEW -j HTTP


# SSH Chain
iptables -A SSH -j ACCEPT

# HTTP Chain
iptables -A HTTP -j ACCEPT

########################################
# Output chain
########################################
iptables -A OUTPUT -o eth+ -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A OUTPUT -o br+ -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A OUTPUT -p icmp -m icmp --icmp-type echo-request -j ACCEPT

iptables -A OUTPUT -p tcp --dport 22 -j ACCEPT #ssh
iptables -A OUTPUT -p udp --dport 53 -j ACCEPT #dns
iptables -A OUTPUT -p tcp --dport 53 -j ACCEPT #dns
iptables -A OUTPUT -p udp --dport 67 -j ACCEPT #dhcp
iptables -A OUTPUT -p tcp --dport 80 -j ACCEPT #http
iptables -A OUTPUT -p udp --dport 111 -j ACCEPT #portmapper
iptables -A OUTPUT -p tcp --dport 111 -j ACCEPT #portmapper
iptables -A OUTPUT -p udp --dport 123 -j ACCEPT #ntp
iptables -A OUTPUT -p tcp --dport 443 -j ACCEPT #https
iptables -A OUTPUT -p udp --dport 1022 -j ACCEPT #mountd (nfs)
iptables -A OUTPUT -p tcp --dport 1022 -j ACCEPT #mountd (nfs)
iptables -A OUTPUT -p udp --dport 2049 -j ACCEPT #nfs
iptables -A OUTPUT -p tcp --dport 2049 -j ACCEPT #nfs
iptables -A OUTPUT -p udp --dport 5353 -j ACCEPT #multicast dns
iptables -A OUTPUT -p tcp --dport 9418 -j ACCEPT #git
iptables -A OUTPUT -p tcp --dport 11371 -j ACCEPT #pgp

exit 0
  EOH
end

bash "Set policies" do
  code <<-EOH
########################################
# Set Default Policies
########################################
iptables -P INPUT DROP
iptables -P FORWARD ACCEPT
iptables -P OUTPUT DROP


########################################
# Get Rid Of IPV6 If You're Not Using It
########################################
ip6tables -P INPUT DROP
ip6tables -P FORWARD DROP
ip6tables -P OUTPUT DROP

exit 0
  EOH
end

bash "save rules" do
  user "root"
  code <<-EOH
iptables-save > /etc/firewall.conf
  EOH
end

cookbook_file "/etc/network/if-up.d/iptables" do
  mode 0755
end
