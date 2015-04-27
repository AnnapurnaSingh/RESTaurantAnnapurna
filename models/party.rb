# class Voyage < ActiveRecord::Base
#   belongs_to(:planet)
#   belongs_to(:astronaut)
# end


# class Planet < ActiveRecord::Base
#   has_many(:voyages)
#   has_many(:astronauts, through: :voyages)
# end

# class Astronaut < ActiveRecord::Base
#   has_many(:voyages)
#   has_many(:planets, through: :voyages)
# end
