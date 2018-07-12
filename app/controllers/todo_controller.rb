class TodoController < ApplicationController
    def index 
    
    
    end
    def show
        
    end
    
    
    
    def create
    t = Todo.new
    t.description = params['description']
    t.pomodoro_estimation = params['pomodoro_estimation']
    t.save redirect_to "/todo/show/#{t.id}" 
    end    
    def edit 
    @todo = Todo.find_by_id(params[:id]) 
    end
end                   