#zad1



users = [{"name": "Kamil", "country": "Poland"}, {"name": "John", "country": "USA"}, {"name": "Yeti"}]
new_list= [user for user in users if user.get('country')=="Poland" ]
print(new_list)

#zad2

numbers = [1,5,2,3,1,4,1,23,12,2,3,1,2,31,23,1,2,3,1,23,1,2,3,123]
wynik= sum(numbers[4:14])
print(wynik)

#zad3

potengi=[2**n for n in range(2,21)]
print(potengi)