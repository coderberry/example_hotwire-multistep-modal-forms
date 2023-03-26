class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, default: ""
      t.string :email, null: false
      t.text :bio, default: ""
      t.boolean :receive_newsletter, default: false
      t.boolean :notify_by_email, default: false

      t.timestamps
    end
  end
end
