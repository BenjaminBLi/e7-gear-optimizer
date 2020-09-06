class ApplicationController < ActionController::Base

    helper_method :current_user
    helper_method :logged_in?

    def current_user    
        if session[:user_id] != nil
            User.find(id: session[:user_id])
        end
    end
    def logged_in?
        !current_user.nil?  
    end
end
