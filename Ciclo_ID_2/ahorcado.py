import random

def jugar_ahorcado():
    palabras = ["python", "programacion", "juego", "computadora", "desarrollo"]
    palabra_secreta = random.choice(palabras)
    intentos = 6
    letras_adivinadas = []
    adivinadas_correctas = []
    adivinadas_incorrectas = []

    print("¡Bienvenido al juego de ahorcado!")
    print("La palabra secreta consta de", len(palabra_secreta), "letras.")

    while intentos > 0:
        letra = input("Ingresa una letra: ").lower()

        if letra in letras_adivinadas:
            print("Ya has ingresado esa letra. Intenta con otra.")
            continue

        letras_adivinadas.append(letra)

        if letra in palabra_secreta:
            adivinadas_correctas.append(letra)
            if len(adivinadas_correctas) == len(set(palabra_secreta)):
                print("¡Felicidades! Has adivinado la palabra:", palabra_secreta)
                break
        else:
            adivinadas_incorrectas.append(letra)
            intentos -= 1
            print("Letra incorrecta. Te quedan", intentos, "intentos.")

        print("Letras adivinadas correctamente:", ", ".join(adivinadas_correctas))
        print("Letras adivinadas incorrectamente:", ", ".join(adivinadas_incorrectas))
    
    if intentos == 0:
        print("¡Oh no! Te has quedado sin intentos. La palabra secreta era:", palabra_secreta)

jugar_ahorcado()
