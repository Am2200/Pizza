#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

configure do
  set :database, "sqlite3:PizzaShop.db"
end

class Product < ActiveRecord::Base

end


get '/' do
	erb :index
end

get '/about' do
  erb :about
end