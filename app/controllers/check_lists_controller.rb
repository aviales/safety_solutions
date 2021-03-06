class CheckListsController < ApplicationController
  before_action :set_inspeccion, only: %i[ show edit update destroy ]
  before_action :set_check_list, only: %i[ show edit update destroy ]
  before_action :set_check_list_item, only: %i[ show edit update destroy ]
  before_action :set_work_area, only: %i[ show edit update destroy ]
  before_action :authenticate_user!, except: %i[ index search ]
  # GET /check_lists or /check_lists.json
  def index
    @check_lists = CheckList.all.order(:hazard_type)
  end

  # GET /check_lists/1 or /check_lists/1.json
  def show
  end

  # GET /check_lists/new
  def new
    @work_area = WorkArea.new
    @inspeccion = Inspeccion.all
    @check_list = CheckList.new
    7.times do
      @check_list.check_list_items.build
    end
    @check_list.build_work_area
    
  end

  # GET /check_lists/1/edit
  def edit
    @CheckList.check_list_item.build
  end

  # POST /check_lists or /check_lists.json
  def create
    @check_list = CheckList.new(check_list_params)
    @inspeccion = Inspeccion.all


    respond_to do |format|
      if @check_list.save
        format.html { redirect_to @check_list, notice: "Check list was successfully created." }
        format.json { render :show, status: :created, location: @check_list }
      else
        format.html { render :new }
        format.json { render json: @check_list.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /check_lists/1 or /check_lists/1.json
  def update
    respond_to do |format|
      if @check_list.update(check_list_params)
        format.html { redirect_to @check_list, notice: "Check list was successfully updated." }
        format.json { render :show, status: :ok, location: @check_list }
      else
        format.html { render :edit }
        format.json { render json: @check_list.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /check_lists/1 or /check_lists/1.json
  def destroy
    @check_list.destroy
    respond_to do |format|
      format.html { redirect_to check_lists_url, notice: "Check list was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_check_list
      @check_list = CheckList.find(params[:id])
      
    end
    def set_inspeccion
      @inspeccion = Inspeccion.find(params[:id])
    end

    def set_check_list_item
      @check_list_item = CheckListItem.all
    end

    def check_list_items
      @check_list_item = CheckListItem.all
    end

    def set_work_area
      @work_area = WorkArea.all
    end
    # Only allow a list of trusted parameters through.
    def check_list_params
      params.require(:check_list).permit(:document_version, :hazard_type, :inspeccion_id, 
                                          check_list_items_attributes: [:id, :text], 
                                          work_area_attributes: [:id, :name ], todo_list_attributes: [:title, :description])
    end
end
