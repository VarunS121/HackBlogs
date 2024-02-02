# HackBlogs Backend

Backend of the HackBlogs website built on NodeJS.

## Start Server

```bash
node app.js
```

or

```bash
nodemon app.js
```

## Setup Instructions

To install requirements `cd` into backend folder :

```bash
npm install
```

Make sure latest NodeJS and npm are installed

### Database setup

Make sure mysql is installed<br>
Start mysql server service:

```bash
sudo systemctl start mysql.service
```

Run the security script :

```bash
sudo mysql_secure_installation
```

Follow the steps given by script to setup database first time<br/>
Create a user for the backend :

```sql
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
```

To provide user privileges :

```sql
GRANT ALL PRIVILEGES ON *.* TO 'sammy'@'localhost' WITH GRANT OPTION;
```

Then create a database using :

```sql
CREATE DATABASE databasename;
```

Uncomment the lines for database setup in models/Blog.js and start the server using `node app.js` or `nodemon app.js` to setup the database initially the again comment the lines

<strong>The backend setup is complete!!!</strong>
