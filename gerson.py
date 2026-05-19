# loops/iteração/laços com for
# Aqui ele criou uma LISTA chamada frutas
frutas = ["banana", "maçã", "pera", "abacaxi", "laranja"]

# O for percorre cada item da lista
# A variável fruta vai receber um valor por vez
for fruta in frutas:
  print(fruta)

# Resultado:
# banana
# maçã
# pera
# abacaxi
# laranja



# Looping Through a String
# Aqui o for está percorrendo uma STRING
# Ou seja, ele pega letra por letra da palavra "banana"
for fruta in "banana":
  print(fruta)

# Resultado:
# b
# a
# n
# a
# n
# a



# The break Statement
# Aqui começa um loop while
# A variável i começa valendo 1
i = 1

# Enquanto i for menor que 6, o loop continua
while i < 6:
  print(i)

  # Se i for igual a 3...
  if i == 3:
    # break interrompe o loop imediatamente
    break

  # Soma +1 na variável
  i += 1

# Resultado:
# 1
# 2
# 3


# Range de 1 até 5
for x in range(1, 2):
    print(x)

    