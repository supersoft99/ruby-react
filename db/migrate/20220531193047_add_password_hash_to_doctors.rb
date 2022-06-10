class AddPasswordHashToDoctors < ActiveRecord::Migration[6.1]
  def change
    add_column :doctors, :password_hash, :string
  end
end
