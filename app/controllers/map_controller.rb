class MapController < ApplicationController
  def where
  	
  	@get_user = User.find(1)
  	@all_user = User.all

  # @list = []
  # @icons = @all_user.length
  # 	@icons.times do |x|
  # 			@list << @all_user[x].full_address
  # 			puts "#{@list[]}"
  # 		end

  end
end
