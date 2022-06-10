class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :doctor_id, :date
end
