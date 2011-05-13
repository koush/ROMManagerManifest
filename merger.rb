require 'rubygems'
require 'json'
require 'open-uri'

data = File.open('manual_manifests.js').read
parsed_data = JSON.parse(data)
manifests = parsed_data['manifests']

romshare_manifests = JSON.parse(open('http://romshare.deployfu.com/manifest').read)

threads = []

for manifest in romshare_manifests['manifests']:
  manifests << manifest
end

File.open('manifests.js', 'w').write(JSON.pretty_generate(parsed_data))
