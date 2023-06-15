def mostrar_menu():
    print("Bienvenido al menú USSD. Por favor, selecciona una opción:")
    print("1. Ver saldo")
    print("2. Recargar saldo")
    print("3. Salir")

def ver_saldo():
    # Lógica para obtener el saldo del usuario
    balance = 100  # Ejemplo: saldo fijo de 100
    print(f"Tu saldo es: {balance} dólares.")

def recargar_saldo():
    monto = input("Ingresa el monto a recargar: ")
    # Lógica para confirmar y realizar la recarga del saldo
    print(f"Has recargado {monto} dólares a tu saldo.")

def menu_ussd():
    while True:
        mostrar_menu()
        opcion = input("Selecciona una opción: ")

        if opcion == '1':
            ver_saldo()
        elif opcion == '2':
            recargar_saldo()
        elif opcion == '3':
            print("Gracias por utilizar nuestro servicio. ¡Hasta pronto!")
            break
        else:
            print("Opción no válida. Por favor, selecciona una opción correcta.")

if __name__ == '__main__':
    menu_ussd()
