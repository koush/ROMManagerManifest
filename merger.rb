require 'rubygems'
require 'json'
require 'open-uri'

data = File.open('manual_manifests.js').read
parsed_data = JSON.parse(data)
manifests = parsed_data['manifests']

romshare_manifests = JSON.parse(open('http://romshare.deployfu.com/manifest').read)

threads = []

free_dudes = { 
  'codeworkx' => true,
  'atinm' => true,
}

for manifest in romshare_manifests['manifests']:
  if manifest['manifest'].index('romshare.deployfu.com') != nil
    if not free_dudes[manifest['developer']] then
      manifest['free'] = false
    end
  end
  manifests << manifest
end

parsed_data['manifests'] = manifests = manifests.sort_by { |a| a['id'] }

File.open('manifests.js', 'w').write(JSON.pretty_generate(parsed_data))

device_manifests = {}
devices = JSON.parse(open('devices.js').read)

for device in devices['devices']:
  device = device['key']
  device_manifest = {}
  device_manifest['minversion'] = parsed_data['minversion']
  device_manifest['manifests'] = []
  device_manifests[device] = device_manifest
end

for manifest in manifests:
  for device in manifest['roms'].keys:
    if device == 'all' then
      for device_manifest in device_manifests.values:
        device_manifest['manifests'] << manifest
      end
    else
      device_manifest = device_manifests[device]
      if device_manifest == nil
        puts "Missing device: " + device
        next
      end
      device_manifest['manifests'] << manifest
    end
  end
  manifest.delete 'roms'
end

for device in device_manifests.keys:
  device_manifest = device_manifests[device]
  device_file = 'manifest/' + device + ".js"
  File.open(device_file, 'w').write(JSON.pretty_generate(device_manifest))
end
