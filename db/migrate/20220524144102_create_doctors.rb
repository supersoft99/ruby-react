class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :username
      t.string :thumbnail
      t.string :password_digest
      t.string :role

      t.timestamps
    end
  end
end
