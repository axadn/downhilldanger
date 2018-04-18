class RootController < ApplicationController
  render file: Rails.public_path.join("index.html"), layout: false
end
