class RegistrationsController < ApplicationController
    def create 
        user = if params[:user_type] == 'doctor'
            Doctor.create!(
                username: params[:username],
                password: params[:password],
                role: 'doctor'
            )
        elsif params[:user_type] == 'patient'
            Patient.create!(
                username: params[:username],
                password: params[:password],
                role: 'patient'
            )
        end
        
        session[:current_user_id] = user.id
        session[:current_user_type] = user.role
        render json: user, status: :ok
    end
end
