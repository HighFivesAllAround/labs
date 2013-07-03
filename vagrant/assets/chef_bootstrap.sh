deb_name="chef_11.4.4-2.ubuntu.11.04_amd64.deb"
deb_path="/home/ubuntu/labs/vagrant/assets"
deb_file="${deb_path}/${deb_name}"

if [ ! -f $deb_file ]; then
  curl --silent --show-error "http://provisioning.agrieser.net/debs/${deb_name}" > $deb_file
fi

cd $deb_path
sha256sum --status --check "chef_checksum.sha256"
if [ $? -gt 0  ]; then
  echo "Checksum failed"
  exit 1
fi

dpkg -i $deb_file

exit 0
