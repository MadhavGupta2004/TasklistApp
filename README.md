# TaskListApp project

This is the code base for TaskListApp project.

TaskListApp is a simple React (v.19) App using the Laravel (12) Backend API for CRUD operations in MySQL database.

## Installation
+ Pre-requisites:
    - PHP >= PHP 8
    - Composer
    - MySQL
    - Node.js >= v23

+ Clone the repository, or download the zip file and extract it.

```
git clone https://github.com/strumy/TasklistApp.git && cd tasklist/
```
+ Copy the .env.example file to .env:
```cp .env.example .env```
+ Install the dependencies.
```composer install```
+ Generate the application key.
```php artisan key:generate```
+ Create a MySQL database and set the database credentials in the .env file:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE="<database_name>"
DB_USERNAME="<username>"
DB_PASSWORD="<password>"
```

+ Refresh the application cache.

```php artisan optimize```

+ Run the migrations and seed the database.
```php artisan migrate:fresh --seed```

+ Install the NPM dependencies.
```npm install```

+ Build the assets.
```npm run build```

+ Start the development server using below command or configure a virtual host.

```php artisan serve```

+ Open the application in a browser at http://127.0.0.1:8000.

## Disclaimer
This repository codes were taken from the online Laravel- React.js Tutorial : [Use React.js with Laravel. Build a Tasklist app]([https://pages.github.com/](https://dev.to/boolfalse/use-reactjs-with-laravel-build-a-tasklist-app-449f)).

## License

The TaskListApp software is using license under the [MIT license](https://opensource.org/licenses/MIT).
