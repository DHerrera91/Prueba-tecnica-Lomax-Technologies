# . Pino: Realiza un programa el cual dibuje un pino en consola dada una altura para el árbol.

# Se solicita al usuario la altura para el arbol y se convierte a numero.
height = int(input("Indique la altura del arbor que quiere dibujar: "))


def dibujar_arbol(altura):
    # Se iteran los valores desde 0 hasta altura -1.
    # Se declaran las variables para los espacios y los asteriscos.
    for i in range(altura):
        spaces = altura - i-1
        asterisks = 2*i+1
        print(" "*spaces + "*"*asterisks)

# Se imprimen 2 asteriscos centrado para formar el tronco.
    print(" "*(altura-1)+"*")
    print(" "*(altura-1)+"*")


dibujar_arbol(height)

#  Para este ejercicio debo aclarar que luego de muchos intentos, no logre hacerlo con los numeros consecutivos
# tal y como lo muestra la imagen de referencia.
