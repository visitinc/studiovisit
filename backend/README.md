#  

## Development

```
sudo apt install python3-dev libpq-dev
virtualenv --python python3 .env
source .env/bin/activate
pip install -r requirements.txt
```

Install + run Cloud SQL Proxy: [link](https://cloud.google.com/sql/docs/mysql/sql-proxy)

```
./cloud_sql_proxy -instances=studiovisit-prototype:us-central1:studiovisit-dev=tcp:3306
```









