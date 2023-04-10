# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)this is the controller file . its job is to hold all of the http verbs and their actions.
class BlogPostsController < ApplicationController
  def index
    # ---2)its creating a page that shows all of the instances for all blog post that are created .
    @posts = BlogPost.all
  end

  # ---3) show gives the user the ability to veiw only one instance at a time and call on them by using the id params
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The verb of new is a form that the user can fill out to create another instance. it hold the same params as the iniatil instance 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The verb create will add the information that was fill out by the user in the new section. based of the strong params the user will need to pass in specific aurgments.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) this BlogPost.find(params[:id]) is saay that we want to query our db for a specific id number and edit using a form.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)this is saying that if my update was valid /successful redirect me to the blog_post path @ that id
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)this is saying that if my destroy was valid /successful redirect me to the blog_post path 
      redirect_to blog_posts_path
    end
  end

  # ---9)this is where yo want hidden rules that people can not temper with 
  private
  def blog_post_params
    # ---10)This is saying that if you want to create a instance they must have a title and content sections 
    params.require(:blog_post).permit(:title, :content)
  end
end
