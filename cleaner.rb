require 'rubygems'
require 'json'
require 'open-uri'

data = File.open('manifests.js').read
parsed_data = JSON.parse(data)
manifests = parsed_data['manifests']

threads = []

for manifest in manifests:
  threads  << Thread.new(manifest) { |myManifest|
    url = myManifest['manifest']
    begin
      test = open(url).read
      myManifest['visible'] = true
    rescue
      myManifest['visible'] = false
    end
  }
end

threads.each { |aThread|  aThread.join }

new_manifests = []
for manifest in manifests:
  if manifest['visible'] then
    new_manifests << manifest
  end
  manifest.delete('visible')
end

parsed_data['manifests'] = new_manifests

puts JSON.dump(parsed_data)
