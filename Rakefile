# ***** GEMS *****
require 'bundler/setup'
Bundler.require

# ***** CONNECTION *****
ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'restaurant_pos'
)

# ***** MODELS *****
require './models/party'
require './models/food'
require './models/order'
require './models/user'



namespace :db do

  desc "Create Admin User"
  task :create_user do
    user = User.new({username: 'anna'})
    user.password='cats'
    user.save!
  end

  desc "Fill Database some Junk Data"
  task :junk_data do

    # Generate random Food
    foods_starting = ['Lentil', 'Veggie', 'Tofu', 'Seitan']
    food_ending = ['Consomme', 'Foam', 'Skewers', 'Goulash']
    cuisines = ['Fancy', 'LoBrau', 'Snack', 'Elevensies']
    rand(5..15).times do
      Food.create({
          name: ( foods_starting.sample + ' ' + food_ending.sample),
          cents: rand(500..1500),
          cuisine: cuisines.sample
      })
    end

    # Generate random Parties
    rand(5..15).times do |num|
      Party.create({
        table_number: num,
        is_paid: [true, false, false].sample
      })
    end

    # Generate random Orders
    parties = Party.all
    foods = Food.all
    rand(10..35).times do |num|
      Order.create({
        party: parties.sample,
        food: foods.sample
      })
    end

  end # task :junk_data

  desc "Empty Database"
  task :empty do
    Order.destroy_all
    Food.destroy_all
    Party.destroy_all
  end # task :empty

end # namespace :db
