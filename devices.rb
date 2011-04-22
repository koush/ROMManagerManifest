require 'rubygems'
require 'json'

if ARGV[0] == nil then
  puts "ruby devices.rb <device> <version>"
  exit
end
key = ARGV[0]

if ARGV[1] == nil then
  puts "ruby devices.rb <device> <version>"
  exit
end
version = ARGV[1]

devices = JSON.parse(File.open("devices.js").read)
found_device = nil
devices["devices"].each do |device|
  if device["key"] == key then
    found_device = device["key"]
    legacy_version = device["version"]
    if legacy_version != nil then
      if device["legacy_versions"] == nil then
        device["legacy_versions"] = []
      end
      device["legacy_versions"].push legacy_version
    end
    device["version"] = version
  end
end

if found_device == nil then
  puts "Could not find device"
end

File.open("devices.js", "w").write(JSON.pretty_generate(devices))
