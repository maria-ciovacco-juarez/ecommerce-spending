# ecommerce-spending

## Table of Contents
 - Description
 - Installation
 - Usage
 - Testing
 - Credits

## Description
This is a mysql database and application backend for an e-commerce site. This was built using MYSQL2, Express, Sequelize, and dotenv.


## Installation

This application is strictly backend work. It does not have a deployed link. Clone this repository to your local machine using either Git Bash (Windows), or the Terminal (MacOS). Type 'ls' and hit 'enter' to make sure it's there. cd into it and then type "code ." for it open into the coding software of your choice. VSCode is recommended. Insomnia must also be installed. 

Open the CLI and make these installations with the following commands

npm i mysql2

npm i sequelize

npm i dotenv

** Upon installing dotenv, create a new file in the folder and title it ".env" . 

You're ready to go.

## Usage
In the CLI, run these commands:

mysql -u root -p

Enter your password when prompted.

Source the database:

source db/schema.sql

quit

npm run seed

npm start

For visuals, watch the follow video for a walkthrough of Insomnia -->

## Credits

-- dcode on YouTube https://www.youtube.com/watch?v=hZUNMYU4Kzo
-- https://www.npmjs.com/package/dotenv
-- https://www.npmjs.com/package/sequelize
-- https://www.npmjs.com/package/mysql2
-- https://dev.mysql.com/doc/refman/8.0/en/creating-database.html
-- ChatGPT (syntax)

ORM actvityies 11, 13, 24


## License

MIT License

Copyright (c) 2023 Maria Juarez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
