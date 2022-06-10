class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :patient_id, :result, :date
end
