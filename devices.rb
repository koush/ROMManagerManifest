require 'rubygems'
require 'json'

if ARGV[0] == nil then
  puts "ruby devices.rb <device> <version> <lunchcombo>"
  exit
end
key = ARGV[0]

if ARGV[1] == nil then
  puts "ruby devices.rb <device> <version> <lunchcombo>"
  exit
end
version = ARGV[1]

if ARGV[2] == nil then
  puts "ruby devices.rb <device> <version> <lunchcombo>"
  exit
end
lunch = ARGV[2]

devices = JSON.parse(File.open("devices.js").read)
found_device = nil
devices["devices"].each do |device|
  if device["key"] == key then
    found_device = device
  end
end

if found_device == nil then
  found_device = {}
  found_device["key"] = key
  found_device["init"] = "init." + key + ".rc"
  found_device["name"] = key
  devices["devices"].push found_device
end

if found_device["version"] != nil then
  if found_device["legacy_versions"] == nil then
    found_device["legacy_versions"] = []
  end
  found_device["legacy_versions"].push found_device["version"]
end
found_device["version"] = version
found_device['lunch'] = lunch

File.open("devices.js", "w").write(JSON.pretty_generate(devices))
