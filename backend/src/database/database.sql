create database mernvideosapp;

use mernvideosapp;

create table videos(
	id int not null primary key auto_increment,
	title text not null,
	url text not null unique,
	description text not null,
	createdAt datetime not null default now(),
	updatedAt datetime not null default now() on update now()
);

desc videos;
