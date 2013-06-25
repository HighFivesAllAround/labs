#The Dick & Jane Project
## Setting up a dev machine
Getting a dev machine set up is fairly straightforward.
These instructions assume an OSX host.

You need to install the following applications:

* [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
* [Vagrant 1.2.2 or newer](http://downloads.vagrantup.com/)

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
