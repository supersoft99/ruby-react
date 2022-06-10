class PatientsController < ApplicationController
    def index
        render json: Patient.all, status: :ok
    end
    
    def create 
        patient  = Patient.create!(username: params[:username], password: params[:password])
        if patient.valid?
            session[:patient_id] = patient.id
            render json: patient, status: :created
        else
            render json: patient.errors.full_messages, status: 422
        end
    end
    
    def show 
        if params[:id]
            patient = Patient.find(params[:id])
            render json: patient
        end
       
        patient = Patient.find_by(id: session[:patient_id])
        if patient
            render json: patient, status: :ok
        else
            render json: {error: "patient not found"}, status: 401
        end
    end

    def destroy
        patient = Patient.find_by(id: params[:id])
        if patient 
            patient.destroy 
            head :no_content
        else
            render json: {error: "patient not found"}, status: 404
        end
    end

    private

    def patient_params
        params.permit(:username, :password)
    end
end
