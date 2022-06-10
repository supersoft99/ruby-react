require 'bcrypt'

class Patient < ApplicationRecord
    has_many :scores
    belongs_to :doctor

    include BCrypt

    def password
        @password ||= Password.new(password_hash)
    end
    
    def password=(new_password)
        @password = Password.create(new_password)
        self.password_hash = @password
    end   
end
