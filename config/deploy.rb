require "bundler/capistrano"

server "192.241.200.76", :web, :app, :db, :primary => true

set :application, "labs"
set :rails_env, :production
set :user, "ubuntu"
set :deploy_to, "/home/#{user}/#{application}"
set :deploy_via, :remote_cache
set :use_sudo, false

set :scm, :git
set :repository, "git@github.com:HighFivesAllAround/labs.git"
set :branch, "master"

ssh_options[:forward_agent] = true
default_run_options[:pty] = true

after "deploy", "deploy:cleanup"
after "deploy", "deploy:restart"

namespace :deploy do
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "sudo service app-#{application} restart"
  end

  task :setup_config, :roles => :app do
    run "mkdir -p #{shared_path}/config"
    put File.read("config/database.yml.example"), "#{shared_path}/config/database.yml"
  end
  after "deploy:setup", "deploy:setup_config"

  task :symlink_config, :roles => :app do
    run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
  end
  after "deploy:finalize_update", "deploy:symlink_config"

  desc "Make sure local git is in sync with remote."
  task :check_revision, :roles => :web do
    unless `git rev-parse HEAD` == `git rev-parse origin/master`
      puts "WARNING: HEAD is not the same as origin/master"
      puts "Run `git push` to sync changes."
      exit
    end
  end
  before "deploy", "deploy:check_revision"
end
