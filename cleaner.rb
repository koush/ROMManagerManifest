require 'rubygems'
require 'json'
require 'open-uri'

data = File.open('manifests.js').read
parsed_data = JSON.parse(data)
manifests = parsed_data['manifests']

for manifest in manifests:
  url = manifest['manifest']
  begin
    test = open(url).read
    manifest['visible'] = true
  rescue
    manifest['visible'] = false
  end
end

puts parsed_data
