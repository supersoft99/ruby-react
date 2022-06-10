require 'bcrypt'

class Doctor < ApplicationRecord
    has_many :appointments
    has_many :patients
    has_many :scores, through: :patients

    include BCrypt

    def password
        @password ||= Password.new(password_hash)
    end
    
    def password=(new_password)
        @password = Password.create(new_password)
        self.password_hash = @password
    end    
end
