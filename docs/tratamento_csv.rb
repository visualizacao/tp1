require 'csv'

pessoa = Hash.new{0}
pessoas = []
grafos = []
old_grafo = 0
old_person = 1

CSV.foreach("all.csv") do |row|
   if old_person != row[2]
   	old_person = row[2]
   	pessoas << pessoa
   	pessoa = Hash.new{0}
   end

   if old_grafo != row[0]
   	old_grafo = row[0]
   	grafos << pessoas
   	pessoas = []
   end

   pessoa[row[3]] += 1
end

pessoas << pessoa
grafos << pessoas

grafos.delete_at(0)

letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
	"T", "U", "V", "W", "X", "Y", "Z"]
(0...grafos.size).each do |i|
  CSV.open("converted#{i}.csv", "wb") do |csv|
    idx_grafo = 0
    grafos.each do |g|
      csv << ["idgrafo", "idpessoa", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
      "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
      idx_pessoa = 1
      g.each do |pess|
        csv << [idx_grafo, idx_pessoa, pess["A"], pess["B"], pess["C"], pess["D"], pess["E"], pess["F"], 
        pess["G"], pess["H"], pess["I"], pess["J"], pess["K"], pess["L"], pess["M"], pess["N"], pess["O"],
        pess["P"], pess["Q"], pess["R"], pess["S"], pess["T"], pess["U"], pess["V"], pess["W"], pess["X"], 
        pess["Y"], pess["Z"]]
        idx_pessoa += 1
      end
      idx_grafo += 1
    end
  end
end