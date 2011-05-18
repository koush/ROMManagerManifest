require 'rubygems'
require 'json'
require 'open-uri'

data = File.open('manual_manifests.js').read
parsed_data = JSON.parse(data)
manifests = parsed_data['manifests']

threads = []

for manifest in manifests:
  threads  << Thread.new(manifest) { |myManifest|
    url = myManifest['manifest']
    begin
      test = open('http://dirtyjson.deployfu.com?url=' + url).read
      parsed_test = JSON.parse(test)
      myManifest['visible'] = true
    rescue
      puts url + ' failed to parse'
      myManifest['visible'] = false
    end
  }
end

threads.each { |aThread|  aThread.join }

new_manifests = []
for manifest in manifests:
  if manifest['visible'] then
    new_manifests << manifest
    manifest.delete('visible')
  else
    puts "Nuking: " + manifest['developer'] + " " + manifest['manifest']
  end
end

parsed_data['manifests'] = new_manifests

File.open('manual_manifests.js', 'w').write(JSON.pretty_generate(parsed_data))
