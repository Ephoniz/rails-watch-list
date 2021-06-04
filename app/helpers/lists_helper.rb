module ListsHelper
  def list_image(list)
    if list.thumbnail.attached?
      cl_image_path(list.thumbnail.key)
    else
      'https://barcelona.lecool.com/files/2016/02/no-image-available.jpg'
    end
  end
end
