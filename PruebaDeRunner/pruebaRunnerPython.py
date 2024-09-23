def invertir_palabra(palabra):
    return palabra[::-1]

# Solicitar una palabra al usuario
palabra = input("Ingrese una palabra: ")

# Invertir la palabra y mostrarla en pantalla
palabra_invertida = invertir_palabra(palabra)
print("Palabra invertida:", palabra_invertida)
