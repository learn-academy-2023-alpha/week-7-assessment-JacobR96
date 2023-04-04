# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:i beleive that i can go in to my files and Cohort.rb file and type in has_many student and the go into the Students.rb and enter belongs to Cohorts


Researched answer: belongs_to establishes a connection with another model . and each new model that this is assoscationed  with will have that forieng key attached .





2. Which RESTful routes must always be passed params? Why?

Your answer: create and delete both needs params because we dont want to be vulnierable to a sql injection and have someone pass in extra params or pass less than is require

Researched answer:update, show and delete. they are all used for a specific instance in that DB .






3. Name three rails generator commands. What is created by each?

Your answer:

-rails generate controller-creates a controller for you database so that you can control the http verbs. like index,create,destroy and others
-rails generate model- connects with other databases using has_many or belongs_to 
-rails generate migration- running this commands followed by add_column ext. will create a migration file the youcan make changes to you date base columns and more

Researched answer:



rails gernerate controller -creates a controller file, a view file, a functional test file, a helper for the view, a JavaScript file, and a stylesheet file.

rails generate model -Ruby class that is used to represent data, models can interact with the database through  Rails Active Record. 

rails generate migration -is a way to make changes to your database. you can use key words such as , add_column, remove_column , add_reference, create_table, change_table,change_column, add_belongs_to and add_foreign_key. to use your rails magic on whatever column.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students -show-all of the instances in students

action: "POST" location: /students -create-a new student instance

action: "GET" location: /students/new -new- the form that you fill out to create a new instance

action: "GET" location: /students/2- show - id- 2/ student 

action: "GET" location: /students/2/edit -the form that you fill out to make changes to an existing instance

action: "PATCH" location: /students/2 -updates - id- will make that changes made in the edit-verb

action: "DELETE" location: /students/2 - destroy - id:2 



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


Epic- make an application to manage your to do list




Create 10 user stories that will help you get your application started




Stories fragments


-As a user i can see a page that ask me to sign in or create an account. 

-As a user i can create an account , the user name has to be unquie and the password cant be pass word or less than 7 chars.

-As a user i can see a words on the screan that says "${USERS NAME}" Blogs and has a button that can create more blogs 

-As a user i can click the create new Blog button and be directed to the creaion page

-As a user i can see a screen that has a form that i can fill out that say blog title and blog content.

-As a user i can fill out the form and am rediected to the main screen and i see my newly created blog entry

-As a user i can edit my my current blogs 

-As a user i can see a form that i can make updates to my current blog sorted by id:

-As a user i can submit that update and am redirected to the main screen and i see my updated blogs

-As a user i can Delete a blog andwhen i click that button i see a model that ask me if im sure i want to delete.

-As a user i  am redirect back to the main screen and i see that my blog instance has been deleted.
