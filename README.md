#The Dick & Jane Project
## Setting up a dev machine
Getting a dev machine set up is fairly straightforward.
These instructions assume an OSX host.

You need to install the following applications:

* [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
* [Vagrant 1.2.2 or newer](http://downloads.vagrantup.com/)

*Note*: Virtualbox 4.2.14 does NOT work with vagrant.
Use version 4.2.12 until this problem is fixed.

Edit `/etc/nfs.conf` to configure a static mountd port

```
#
# nfs.conf: the NFS configuration file
#
nfs.server.mount.port = 1022
```

Restart nfsd

```
sudo nfsd restart
```

Clone the project

```
git clone git@github.com:HighFivesAllAround/labs.git
cd labs
```

Build the vm (this takes about 10 minutes, so grab a coffee)

```
vagrant up
```

Thats it.

When you are done working, either use `vagrant suspend`, or if you halt the vm make sure to restart it with `vagrant up --no-provision` to avoid re-running install scripts.
Nothing bad will happen, but it will take 10 minutes.

Notes:

* Provisioning is done via vagrant and chef solo
* This project uses ruby 2.0, and rvm is not installed on the vm
* Gems are installed locally via bundler into the vendor directory
* Per Rails 4 conventions, bins are installed and checked into ./bin, so running the server looks like `./bin/rails server`
* Vagrant is set up with nfs because of [performance problems](http://docs-v1.vagrantup.com/v1/docs/nfs.html) with virtualbox's built in drive mapping.

## Setting up a production instance
On your local machine:
```
git archive master > ../labs.tar
scp ../labs.tar root@remote-server:
```

On the remote machine (as root)
```
wget http://provisioning.agrieser.net/debs/chef_11.4.4-2.ubuntu.11.04_amd64.deb
dpkg -i chef_11.4.4-2.ubuntu.11.04_amd64.deb
mkdir labs
cd labs
tar -xf ../labs.tar
cd vagrant
chef-solo -c solo.rb -j solo.json
```

Then set up the directory structure
```
cap deploy:setup
```

Copy the following files into place

* `config/database.yml`
