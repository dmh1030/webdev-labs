-- Exercise 1 (done for you):
SELECT * FROM users;

-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;


-- Exercise 3
SELECT id, first_name, last_name 
FROM users
order by last_name;


-- Exercise 4
select id, image_url, user_id
from posts
where user_id=26;


-- Exercise 5
select id, image_url, user_id
from posts
where user_id=26 or user_id=12;


-- Exercise 6
select count(*)
from posts;


-- Exercise 7
select user_id, count(*)
from comments
group by user_id
order by count desc;


-- Exercise 8
select  posts.id, posts.image_url, posts.user_id,
users.username, users.first_name, users.last_name
from posts join users on users.id = posts.user_id
where user_id=26 or user_id=12;


-- Exercise 9
select posts.user_id, posts.pub_date, following.following_id
from following join posts on following.user_id=posts.user_id
where following.user_id=26
order by following.following_id;


-- Exercise 10



-- Exercise 11
insert into bookmarks(user_id, post_id)
values(26, 219);

insert into bookmarks(user_id, post_id)
values(26, 220);

insert into bookmarks(user_id, post_id)
values(26, 221);


-- Exercise 12
DELETE from bookmarks
where post_id=219

DELETE from bookmarks
where post_id=220

DELETE from bookmarks
where post_id=221


-- Exercise 13
update users
set email = 'cyoung2022@gmail.com'
where id=26;


-- Exercise 14
