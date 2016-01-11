require 'sinatra'

set :bind, '0.0.0.0'
get '/keyword' do
  content_type 'application/javascript'
  keyword = params['keyword']
  callback = params['callback']
  "#{callback}('#{keyword}');"
end
