class AddPasswordHashToPatients < ActiveRecord::Migration[6.1]
  def change
    add_column :patients, :password_hash, :string
  end
end
