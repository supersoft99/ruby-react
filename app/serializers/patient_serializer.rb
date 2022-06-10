class PatientSerializer < ActiveModel::Serializer
  attributes :id, :doctor_id, :name, :username, :dob, :role
end
