# Interfaz que define el comportamiento común de los estados
class State:
    def handle(self, context): #realiza una acción específica del estado
        pass

# Implementación concreta del estado "EstadoA"
class StateA(State):
    def handle(self, context):
        print("Manejando el Estado A.")
        # Transición al siguiente estado
        context.set_state(StateB()) #setState para cambiar el estado actual 

# Implementación concreta del estado "EstadoB"
class StateB(State):
    def handle(self, context):
        print("Manejando el Estado B.")
        # Transición al siguiente estado
        context.set_state(StateC())

# Implementación concreta del estado "EstadoC"
class StateC(State):
    def handle(self, context):
        print("Manejando el Estado C.")
        # Transición al siguiente estado
        context.set_state(StateA())

# Contexto que utiliza los estados
class Context:
    def __init__(self):
        # Estado inicial
        self.state = StateA()

    def set_state(self, state):
        self.state = state

    # Método que invoca el comportamiento del estado actual
    def request(self):
        self.state.handle(self)

# Uso del patrón State
context = Context()

# Realizar algunas solicitudes para demostrar el cambio de estado
context.request()
context.request()
context.request()
