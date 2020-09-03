class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword
  field :username, type: String
  field :password_digest, type: String
  
  has_secure_password
end
