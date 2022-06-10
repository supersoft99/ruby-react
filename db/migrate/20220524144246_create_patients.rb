class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.integer :doctor_id
      t.string :name
      t.string :username
      t.datetime :dob
      t.string :password_digest
      t.string :role

      t.timestamps
    end
  end
end
