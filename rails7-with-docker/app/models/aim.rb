class Aim < ApplicationRecord
    def self.ransackable_attributes(auth_object = nil)
        ["advantage", "created_at", "difficulty", "genre", "id", "reason", "title", "updated_at"]
    end

    validates :title, presence: true
    
end