class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.integer :patient_id
      t.integer :result
      t.datetime :date

      t.timestamps
    end
  end
end
