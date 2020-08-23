# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

# Ruby version

# System dependencies

# Configuration

# Database creation

# Database initialization

# How to run the test suite

# Services (job queues, cache servers, search engines, etc.)

# Deployment instructions

We're going to deploy to Elastic Beanstalk, so make sure you have your AWS account and Access Key ID/Secret ready

## Downloading and precompiling project

1. Clone this repo

    ```shell
    git clone https://github.com/BenjaminBLi/e7-gear-optimizer.git
    ```

2. cd into directory and install everything

    ```shell
    cd e7-gear-optimizer
    yarn install
    gem install bundler
    bundle install
    ```

3. Run rail server locally, check everything is fine

    ```shell
    rails s
    ```

4. Create new secret key and store in config/secrets.yml (save this key for EB env var later)

    ```shell
    export SECRET_KEY_BASE=$(rake secret)
    echo $SECRET_KEY_BASE
    ```

5. Precompile assets, run in production environment mode to double check its fine

    ```shell
    rake assets:precompile
    rails s -e production
    ```

## Deploy to EB

1. Download [EB CLI](https://github.com/aws/aws-elastic-beanstalk-cli-setup)
2. In root directory, run ```eb init``` and fill in any information. 
    - If you have not provided your Access Key ID/Secret, it will ask for this information. 
    - Region is self explainatory
    - Application does not matter the name, just a way to organize different versions
    - Platform must be **Ruby 2.7 running on 64bit Amazon Linux 2** (If you choose a existing application, this won't appear)
    - **SSH for you instances needs to be on**, because we'll need it in step 6.
3. Run ```eb create -s``` to launch a single instance of the app. You can name the environment and DNS prefix anything you'd like.
    - **Note**: that ```-s``` just means it will launch on a single instance instead of with a load balancer. In production, we might need this later, but for right now, single instance should server us well (and save us cash)
4. Launch the instance. This will produce an Error code 1, which is fine.
5. Set the Go to your the `SECRET_KEY_BASE` from console or in the web console:
    - Either: user command line 
    ```
    eb setenv SECRET_KEY_BASE=$SECRET_KEY_BASE RAILS_SKIP_ASSET_COMPILATION=true RAILS_SKIP_MIGRATIONS=true
    ```
    - Or: go to [Elastic Beanstalk console](https://console.aws.amazon.com/elasticbeanstalk/home) and click your deployed instance environment. Click **Configuration** -> **Software** -> **Edit**-> **Environment Properties** or **Environment Variables** and fill in ```SECRET_KEY_BASE``` as the name with the value the same as the value generated in ```rake secret``` in *Downloading and precompiling project step 4*. 
    - might need `export RUBYOPT='-W:no-deprecated'`
6. SSH into your instance using instance ec2-user and your Elastic Beanstalk DNS

    ```shell
    ssh -i key.pem ec2-user@yourappprefix.region.elasticbeanstalk.com
    ```

7. Change the file in /etc/nginx/conf.d/elasticbeanstalk/webapp.conf

    ```shell
    cd /etc/nginx/conf.d/elasticbeanstalk/
    sudo vi webapp.conf
    ```

    *webapp.conf*
    ```
    server_name _ localhost; # need to listen to localhost for worker tier

    location / {
        proxy_pass http://my_app; # match the name of upstream directive which is defined above
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /assets {
        alias /var/app/current/public/assets;
        gzip_static on;
        gzip on;
        expires max;
        add_header Cache-Control public;
    }

    location /packs {
        alias /var/app/current/public/packs;
        gzip_static on;
        gzip on;
        expires max;
        add_header Cache-Control public;
    }

    location /public {
        alias /var/app/current/public;
        gzip_static on;
        gzip on;
        expires max;
        add_header Cache-Control public;
    }
    ```
8. Restart nginx proxy server

    ```shell
    sudo su
    service nginx restart
    ```
    - Currently not sure if I can do this step automatically cause nginx overwrite my file I put here, and you *might have to be in the nginx directory* if you're having issues this restart


# ...
