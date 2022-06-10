class RemovePasswordDigestFromPatients < ActiveRecord::Migration[6.1]
  def change
    remove_column :patients, :password_digest
    remove_column :doctors, :password_digest
  end
end
