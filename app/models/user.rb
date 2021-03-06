class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

         
  has_one_attached :profile_picture 
  has_many :projects, dependent: :destroy
  has_many :inspeccions, dependent: :destroy
  has_one :contractor
 
  def self.find_by_uid!(uid)
    User.find_by!("firts_name = :p OR id = :p", p: uid)
  end
         
end
