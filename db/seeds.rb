# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Removing all movies..."
Bookmark.destroy_all
Movie.destroy_all
List.destroy_all

puts "Reading movies from the API..."
url = 'http://tmdb.lewagon.com/movie/top_rated'
response = RestClient.get(url)
data = JSON.parse(response.body)

puts "Creating movies..."
data['results'].each do |info|
  Movie.create!(
    title: info['title'],
    overview: info['overview'],
    poster_url: "https://image.tmdb.org/t/p/w500#{info['poster_path']}",
    rating: info['vote_average']
  )
end

puts "All done 🎉"