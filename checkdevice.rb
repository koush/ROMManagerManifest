require 'rubygems'
require 'json'

if ARGV[0] == nil then
  puts "ruby checkdeviceversion.rb <device> <version> <owner>"
  exit 1
end
key = ARGV[0]

if ARGV[1] == nil then
  puts "ruby checkdeviceversion.rb <device> <version> <owner>"
  exit 1
end

if ARGV[2] == nil then
  puts "no owner provided, bailing!"
  puts "ruby checkdeviceversion.rb <device> <version> <owner>"
  exit 1
end
owner = ARGV[2]

devices = JSON.parse(File.open(File.dirname(__FILE__) + "/devices.js").read)
found_device = nil
devices["devices"].each do |device|
  if device["key"] == key then
    found_device = device
  end
end


if found_device == nil then
  puts "device not found, adding"
  exit 0
end

if !devices['owners'][owner] && !(found_device['owners'] && found_device['owners'][owner])
  puts "Owner not allowed to update device"
  exit 1
end

touch_recovery = ENV['BOARD_TOUCH_RECOVERY'] != nil
if touch_recovery
  puts "touch version: "
  version = found_device['touch_version']
else
  puts "version:"
  version = found_device['version']
end

puts version

if version && ARGV[1] <= version
  puts "version #{ARGV[1]} is outdated, not updating"
  exit 1
end

puts "Updating ROMManagerManifest to #{ARGV[1]}."