class Location < ApplicationRecord
	# with an attribute
  # geocoded_by :address #address is an attribute of MyModel

  #o or with a method
  geocoded_by :full_address #full_address is a method wichi take some model's attributes

  # callback is set to longitude and latitude

  after_validation :geocode

  def full_address
  	"#{street}, #{city}, #{state}"
  end


  #def latlong
  #latlong = "#{latitude}"
  # end
end
