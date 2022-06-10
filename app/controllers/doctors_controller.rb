class DoctorsController < ApplicationController
    def index
        render json: Doctor.all, status: :ok
    end
    
    def create 
        doctor = Doctor.create!(username: params[:username], password: params[:password])
        if doctor.valid?
            session[:doctor_id] = doctor.id
            render json: doctor, status: :created
        else
            render json: doctor.errors.full_messages, status: 422
        end
    end
    
    def show
        if params[:id]
            doctor = Doctor.find(params[:id])
            render json: doctor 
        end
       
        doctor = Doctor.find_by(id: session[:doctor_id])
        if doctor
            render json: doctor, status: :ok
        else
            render json: {error: "doctor not found"}, status: 401
        end
    end

    def destroy
        doctor = Doctor.find_by(id: params[:id])
        if doctor 
            doctor.destroy 
            head :no_content
        else
            render json: {error: "doctor not found"}, status: 404
        end
    end

    private

    def doctor_params
        params.permit(:username, :password)
    end
end
