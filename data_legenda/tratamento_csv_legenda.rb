require 'csv'
require 'pry'

pessoa = Hash.new{0}
pessoas = []
grafos = []
old_grafo = 0
old_person = 1

CSV.foreach("all.csv") do |row|
   if old_person != row[2]
   	old_person = row[2]
   	pessoas << pessoa
   	pessoa = Hash.new
   end

   if old_grafo != row[0]
   	old_grafo = row[0]
   	grafos << pessoas
   	pessoas = []
   end
   #binding.pry
   #pessoa.each {|key, value| if (key.eql? row[3].to_s) then pessoa[key] = "#{row[4]}" end }
   #pessoa[row[3]] = row[4]
   if ((pessoa[row[3]] != nil) && (pessoa[row[3]] != "0"))
     pessoa[row[3]] = "#{pessoa[row[3]]} - #{row[4]}"
   else
     pessoa[row[3]] = "#{row[4]} "
   end
end

pessoas << pessoa
grafos << pessoas
grafos.delete_at(0)

idx_grafo = 0
  grafos.each do |g|
    CSV.open("#{idx_grafo}.csv", "wb") do |csv|
      csv << ["idpessoa", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
      "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
      idx_pessoa = 1
      g.each do |pess|
        csv << [idx_pessoa, pess["A"], pess["B"], pess["C"], pess["D"], pess["E"], pess["F"],
        pess["G"], pess["H"], pess["I"], pess["J"], pess["K"], pess["L"], pess["M"], pess["N"], pess["O"],
        pess["P"], pess["Q"], pess["R"], pess["S"], pess["T"], pess["U"], pess["V"], pess["W"], pess["X"],
        pess["Y"], pess["Z"]]
        idx_pessoa += 1
      end
      idx_grafo += 1
    end
  end
