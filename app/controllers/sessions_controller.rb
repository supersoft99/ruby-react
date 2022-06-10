class SessionsController < ApplicationController
    def create 
        user = if params[:user_type] == 'doctor'
            Doctor.find_by(username: params[:username])
        elsif params[:user_type] == 'patient'
            Patient.find_by(username: params[:username])
        end
        
        if user&.password == params[:password]
            session[:current_user_id] = user.id
            session[:current_user_type] = user.role
            render json: user, status: :ok
        else
            render json: { error: {login: "Invalid username or password"}, status: :unauthorized }
        end
    end

    def destroy 
        session.delete :doctor_id
    end

    def current_user 
        doctor = Doctor.find_by(id: session[:doctor_id])
    end
end
