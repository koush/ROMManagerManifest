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

check_version = ENV['CHECK_DEVICE_VERSION'] != nil

devices = JSON.parse(File.open("devices.js").read)
found_device = nil
devices["devices"].each do |device|
  if device["key"] == key then
    found_device = device
  end
end

if check_version
  if found_device == nil then
    puts "device not found"
    exit 1
  end

  touch_recovery = ENV['BOARD_TOUCH_RECOVERY'] != nil
  if touch_recovery
    puts "touch version: "
    if found_device['touch_version'] == nil
      exit 1
    end
    current_version = found_device['touch_version']
  else
    puts "version:"
    current_version = found_device['version']
  end

  puts current_version

  if ARGV[1] <= current_version
    puts "version #{version} is outdated, not updating"
    exit 1
  end

  puts "Updating ROMManagerManifest to #{version}."
end

if found_device == nil then
  found_device = {}
  found_device["key"] = key
  found_device["init"] = "init." + key + ".rc"
  found_device["name"] = key
  found_device["legacy_versions"] = []
  devices["devices"].push found_device
end

if ENV['BOARD_TOUCH_RECOVERY'] == nil then
  if found_device["version"] != nil then
    if found_device["legacy_versions"] == nil then
      found_device["legacy_versions"] = []
    end
    found_device["legacy_versions"].push found_device["version"]
  end
  found_device["version"] = version
  found_device['lunch'] = lunch
else
  found_device["touch_version"] = version
end

File.open("devices.js", "w").write(JSON.pretty_generate(devices))
