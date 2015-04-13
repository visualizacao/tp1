output = File.open('options','w')

for i in 0..99
  output << "<option value=\"#{i}\">Grafo #{i}</option>\n"
end

output.close
