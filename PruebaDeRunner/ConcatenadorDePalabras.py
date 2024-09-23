def concatenar_palabras():
    # Pedir al usuario que ingrese 5 palabras
    palabras = []
    for i in range(5):
        palabra = input("Ingresa una palabra: ")
        palabras.append(palabra)

    # Ordenar las palabras por longitud en orden descendente
    palabras.sort(key=len, reverse=True)

    # Crear una oración concatenando las palabras
    oracion = " ".join(palabras)

    # Imprimir la oración resultante
    print("Oración generada:", oracion)

# Llamar a la función
concatenar_palabras()