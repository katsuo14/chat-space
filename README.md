# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: fales, unique: true|
|email|string|null: fales, unique: true|
|password|string||null: fales|

### Association
- has_many :groups, through: :groups_users, dependent: :destroy
- has_many :groups_users
- has_many :chats, dependent: :destroy


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: fales, unique: true|

### Association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :chats


## chatテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id|integer|null: fales, foreign_key: true|
|user_id|integer|null: fales, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: fales, foreign_key: true|
|group_id|integer|null: fales, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user