class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :thumbnail, :role, :patients
end
