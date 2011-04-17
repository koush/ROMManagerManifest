require "rubygems"
require "net/https"
require "json"
require "open-uri"

http = Net::HTTP.new("kernels.teamw.in")
headers = { "Content-Type" => "application/x-www-form-urlencoded" }

devices = JSON.parse(open("http://rommanager.appspot.com/manifests/devices.js").read)
kernels = []

devices["devices"].each do |device|
  key = device["key"]
  puts key

  resp, data = http.post("/kernels.php?device=" + URI.escape(device["name"]), "user-id=kang@clockworkmod.com", headers)

  data = JSON.parse(data)
  data.each do |kernel|
    rmk = {
      :modversion => kernel["file"],
      :device => key,
      :url => "http://kernels.teamw.in/files/" + kernel["file"],
      :name => kernel["kernel"],
      :summary => kernel["desc"] + "\n\nAndroid Version: " + kernel["androidversion"] + "\n\nLinux Kernel Version: " + kernel["lnxkernelver"] + "\n\nOS Type: " + kernel["ostype"]
    }
  
    kernels.push rmk
  end

end

wrapper = {
    :version => "1",
    :homepage => "https://market.android.com/details?id=com.teamwin.kernelmanager.free",
    :donate => "http://bit.ly/hVLp6l",
    :roms => kernels
}

File.open("kernelmanager.js", "w").write(JSON.pretty_generate(wrapper))
